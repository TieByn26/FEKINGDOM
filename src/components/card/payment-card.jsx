import { useCallback, useEffect, useState } from "react";
import FacilityService from "../../services/FacilityService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PaymentService from "../../services/PaymentService";
import { useOverlay } from "../overlay/use-overlay";
import { PaymentBill } from "@/features/payment/PaymentBill";

export const PaymentCard = (props) => {
    const {display} = useOverlay();

    const [payments, setPayments] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const navigate = useNavigate();

    const handleDelete = useCallback(async (paymentId) => {
        if (!paymentId) {
            console.error("Invalid paymentId for deletion:", paymentId);
            return;
        }

        try {
            await PaymentService.softDeletePaymentByid(paymentId);
            setPayments(payments.filter(f => f.id !== paymentId));
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
            console.error("Error deleting product:", error);
        }
    }, [payments]);

    const confirmDelete = useCallback((payment) => {
        Swal.fire({
            title: " Warning!!!",
            text: `Are you sure to delete : ${payment.title} ?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete!",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete(payment.id);
            }
        });
    }, [handleDelete]);
    const updateForm = useCallback((id) => {
        navigate(`/user/payment/update/${id}`);
    });
    const printBill = useCallback((payment) => {
        Swal.fire({
            title: "Print Bill",
            text: `Are you sure to print bill for : ${payment.customer.name} ?`,
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Print!",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                display(<PaymentBill idBill={props.props.id}></PaymentBill>);
            }
        });
    });


    return (
        <div className={`flex justify-between items-center bg-white w-[90%] p-4 rounded-lg hover:bg-gradient-to-r from-[#fff2da] to-[#FFF] hover:border-[1px] hover:scale-[1.01] hover:border-[blue]`}
            onClick={(e) => { 
                e.stopPropagation();
                printBill(props.props) }}
        >
            <div className="flex items-center gap-3">
                <img src="https://png.pngtree.com/png-clipart/20230925/original/pngtree-comicstyle-money-icon-on-white-background-with-payroll-concept-vector-png-image_12861632.png" alt=""
                    className="h-[60px] w-[60px] rounded-full"
                />
                <div className="flex flex-col gap-1">
                    <span>
                        {props.props.title}
                    </span>
                    <span>
                        Customer: {props.props.customer.name}
                    </span>
                </div>
            </div>
            <span>
                Depsoit: {props.props.deposit}$
            </span>
            <span>
                {props.props.historyDate}
            </span>
            <span>
                Check: {props.props.employee.name}
            </span>
            <span className="">
                {props.props.status}
            </span>
            <div className="flex gap-3">
                <button className="bg-red-300 text-[red] font-[500] p-2 rounded-lg hover:scale-[1.1]"
                    onClick={(e) => {
                        e.stopPropagation();
                        confirmDelete(props.props)
                    }
                    }
                >
                    Delete
                </button>
                <button className="bg-yellow-300  text-[#e87d31] font-[500] p-2 rounded-lg hover:scale-[1.1] "
                    onClick={() => {
                        updateForm(props.props.id)
                     }}
                >
                    Edit
                </button>
            </div>
        </div>
    )
}