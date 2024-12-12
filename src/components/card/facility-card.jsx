import { useNavigate } from "react-router-dom";
import { FacilityDetail } from "../overlay/components";
import { useOverlay } from "../overlay/use-overlay"
import { useCallback,useEffect ,useState } from "react";
import FacilityService from "../../services/FacilityService";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

export const FacilityCard = (props) => {
    const { display } = useOverlay();
    const navigate = useNavigate();
    const [facilitys, setFacilitys] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    useEffect(() => {
        fetchFacility();
    }, []);

    const fetchFacility = async () => {
        try {
            const data = await FacilityService.getFacilityList(localStorage.getItem("token"));
            setFacilitys(data);
        } catch (error) {
            console.error("Failed to fetch Facility:", error);
        }
    };

    const [isVisible, setIsVisible] = useState(true);

    const handleClick = () => {
        setIsVisible(false);
    };

    const handleDelete = useCallback(async (facilityId) => {
        if (!facilityId) {
            console.error("Invalid facilityId for deletion:", facilityId);
            return;
        }

        try {
            await FacilityService.softDeleteFacilityByid(facilityId);
            setFacilitys(facilitys.filter(f => f.id !== facilityId));
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
    }, [facilitys]);

    const confirmDelete = useCallback((facility) => {
        Swal.fire({
            title: " Warning!!!",
            text: `Are you sure to delete : ${facility.name} ?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete!",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete(facility.id);
            }
        });
    }, [handleDelete]);
    const updateForm = useCallback((id) => {
        navigate(`/user/facility/update/${id}`);
    });

    return (
        <div className={`flex justify-between items-center bg-white w-[90%] p-4 rounded-lg hover:bg-gradient-to-r from-[#fff2da] to-[#FFF] hover:border-[1px] hover:scale-[1.01] hover:border-[blue] ${!isVisible && "hidden"}`}
            onClick={(e) =>
                {
                    e.stopPropagation(); 
                display(<FacilityDetail props={props} />)}
            }
        >
            <div className="flex items-center gap-3">
                <img src="https://xuonggooccho.com/ckfinder/userfiles/files/Hinh-anh-phong-ngu-dep-1.jpg" alt=""
                    className="h-[60px] w-[60px] "
                />
                <div className="flex flex-col">
                    <span className="font-[600] text-[18px]">
                        {props.props.name}
                    </span>
                    <span className="text-[12px] text-[gray]">
                        {props.props.standardRoom}
                    </span>
                </div>
            </div>
            <span className="text-[gray]">
                {props.props.description}
            </span>
            <span className="text-[gray]">
                Cost: {props.props.cost}
            </span>
            <span className="text-[gray]">
                Max: {props.props.maxPeople} people
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
                    onClick={() => updateForm(props.props.id)}
                >
                    Edit
                </button>
            </div>
        </div>
    )
} 
