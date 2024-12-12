import { EmployeeDetail } from "../overlay/components";
import { useOverlay } from "../overlay/use-overlay";
import { useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import EmployeeService from "../../services/EmployeeService";

export const EmployeeCard = (props) => {
    const {display} = useOverlay();
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(true);

    const handleClick = () => {
        setIsVisible(false);
    };

    
    const handleDelete = useCallback(async (employeeId) => {
        if (!employeeId) {
            console.error("Invalid employeeId for deletion:", employeeId);
            return;
        }

        try {
            await EmployeeService.softDeleteEmployeeByid(employeeId);
            setEmployees(employees.filter(e => e.id !== employeeId));
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
    }, [employees]);

    const confirmDelete = useCallback((employeeSelect) => {
        Swal.fire({
            title: " Warning!!!",
            text: `Are you sure to delete : ${employeeSelect.name} ?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete!",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete(employeeSelect.id);
            }
        });
    }, [handleDelete]);
    const updateForm = useCallback((id) => {
        navigate(`/user/employee/update/${id}`);
    });

    return (
        <div className={`flex justify-between items-center bg-white w-[90%] p-4 rounded-lg hover:bg-gradient-to-r from-[#fff2da] to-[#FFF] hover:border-[1px] hover:scale-[1.01] hover:border-[blue]  ${!isVisible && "hidden"}`}
            onClick={(e) => {
                e.stopPropagation();
                display(<EmployeeDetail props={props} />)}}
        >
            <div className="flex items-center gap-3">
                <img src="https://admin.vov.gov.vn/UploadFolder/KhoTin/Images/UploadFolder/VOVVN/Images/sites/default/files/2024-02/elon_musk.jpg" alt=""
                    className="h-[60px] w-[60px] rounded-full"
                />
                <div className="flex flex-col">
                    <span className="font-[600] text-[18px]">
                        {props.props.name}
                    </span>
                    <span className="text-[12px] text-[gray]">
                        {props.props.division.name}
                    </span>
                </div>
            </div>
            <span className="text-[gray]">
                Gender: {props.props.gender === 1 ? "male" : "female"}
            </span>
            <span className="text-[gray]">
                Address: {props.props.address}
            </span>
            <span className="text-[gray]">
                Degree: {props.props.degree.name}
            </span>
            <div className="flex gap-3">
                <button className="bg-red-300 text-[red] font-[500] p-2 rounded-lg hover:scale-[1.1]"
                    onClick={(e) => {
                        e.stopPropagation();
                        confirmDelete(props.props)
                        handleClick()
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