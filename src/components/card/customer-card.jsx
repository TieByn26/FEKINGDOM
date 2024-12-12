import { useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import customerService from "../../services/CustomerService";
import { useOverlay } from "../overlay/use-overlay";
import { CustomerDetail } from "../overlay/components";

export const CustomerCard = (props) => {
    const { display } = useOverlay();

    const [customers, setCustomers] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const navigate = useNavigate();

    const [isVisible, setIsVisible] = useState(true);

    const handleClick = () => {
        setIsVisible(false);
    };

    const handleDelete = useCallback(async (customerId) => {
        if (!customerId) {
            console.error("Invalid customerId for deletion:", customerId);
            return;
        }

        try {
            await customerService.softDeleteCustomerByid(customerId);
            setCustomers(customers.filter(e => e.id !== customerId));
            setShowDeleteModal(false);
            toast("Deleted successfully", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
                style: {
                    backgroundColor: '#000000', color: 'rgba(237,0,0,0.98)', fontWeight: 'bold', fontSize: '16px'
                }
            });
        } catch (error) {
            console.error("Error deleting customer:", error);
        }
    }, [customers]);

    const confirmDelete = useCallback((customerSelect) => {
        Swal.fire({
            title: " Warning!!!",
            text: `Are you sure to delete : ${customerSelect.name} ?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete!",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete(customerSelect.id);
            }
        });
    }, [handleDelete]);


    return (
        <div className={`flex justify-between items-center bg-white w-[90%] p-4 rounded-lg hover:bg-gradient-to-r from-[#fff2da] to-[#FFF] hover:border-[1px] hover:scale-[1.01] hover:border-[blue] ${!isVisible && "hidden"}`}
            onClick={(e) => {
                e.stopPropagation();
                display(<CustomerDetail props={props} />)}}
        >
            <div className="flex items-center gap-3">
                <img src="https://khudothi.vn/wp-content/uploads/2023/10/GigaChad-la-ai.jpg" alt=""
                    className="h-[60px] w-[60px] rounded-full"
                />
                <div className="flex flex-col">
                    <span className="font-[600] text-[18px]">
                        {props.props.name}
                    </span>
                    <span className="text-[12px] text-[gray]">
                        {props.props.typeCustomer.name}
                    </span>
                </div>
            </div>
            <span className="text-[gray]">
                Gender: {props.props.gender === 1 ? 'Male' : 'Female'}
            </span>
            <span className="text-[gray]">
                {props.props.address}
            </span>
            <span className="text-[gray]">
                Degree: Master
            </span>
            <div className="flex gap-3">
                <button className="bg-red-300 text-[red] font-[500] p-2 rounded-lg hover:scale-[1.1]"
                    onClick={(e) => {
                        e.stopPropagation();
                        confirmDelete(props.props);
                        handleClick();
                    }
                    }
                >
                    Delete
                </button>
            </div>
        </div>
    )
} 