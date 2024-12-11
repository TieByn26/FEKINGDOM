import {useCallback, useEffect, useState} from "react";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import ContractService from "../../services/ContractService";
import AuthService from "../../services/AuthService";

export function ContractListForCustomer() {

    const [contracts, setContracts] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchContracts();
    }, []);

    const fetchContracts = async () => {
        try {
            const data = await ContractService.fetchContractsByCustomer(localStorage.getItem("token"));
            setContracts(data);
        } catch (error) {
            console.error("Failed to fetch Contracts:", error);
        }
    };

    const handleDelete = useCallback(async (contractID) => {
        if (!contractID) {
            console.error("Invalid contractID for deletion:", contractID);
            return;
        }

        try {
            await ContractService.removeContractById(contractID);
            setContracts(contracts.filter(e => e.id !== contractID));
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
            console.error("Error deleting contract:", error);
        }
    }, [contracts]);

    const confirmDelete = useCallback((contractSelect) => {
        Swal.fire({
            title: " Warning!!!",
            text: `Are you sure to delete : ${contractSelect.name} ?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete!",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete(contractSelect.id);
            }
        });
    }, [handleDelete]);
    const updateForm = useCallback((id) => {
        navigate(`/user/contract/update/${id}`);
    });



    return (
        <div>
            <div className="row justify-content-center" style={{margin: "30px 0 30px 0"}}>
                <div className="col-xl-10 col-xxl-12">
                    <div className="card shadow">
                        <div className="card-header d-flex flex-wrap justify-content-center align-items-center justify-content-sm-between gap-3" style={{background: "#171821"}}>
                            <h5 className="display-6 text-nowrap text-capitalize mb-0" style={{color: "#c1931f"}}>All Contracts&nbsp;</h5>
                            <div className="input-group input-group-sm w-auto"><input className="form-control form-control-sm" type="text" style={{background: "#171821"}}/><button className="btn btn-sm btn-outline-light" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-search mb-1" style={{color: "rgb(255,255,255)"}}>
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path>
                            </svg></button></div>
                        </div>
                        <div className="card-body" style={{background: "#171821"}}>
                            <div className="table-responsive">
                                <table className="table table-striped table-hover">
                                    <thead>
                                    <tr>
                                        <th>Customer Name</th>
                                        <th>Date start</th>
                                        <th>Date end</th>
                                        <th>Depsoit</th>
                                        <th>Payment</th>
                                        <th>Check by</th>
                                        <th>Facility</th>
                                        {AuthService.isAdmin() || AuthService.isManager() ?(
                                            <th>History Check</th>
                                        ): null}
                                        <th>Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {contracts.length > 0 ? (
                                            contracts.map((c, index) => (
                                                <tr key={c.id}>
                                                    <td>{c.customer.name}</td>
                                                    <td>{c.dateStart}</td>
                                                    <td>{c.dateEnd}</td>
                                                    <td>{c.deposit}</td>
                                                    <td>{c.payment.title}</td>
                                                    <td>{c.employee.name}</td>
                                                    <td>{c.facility.name}</td>
                                                    {AuthService.isAdmin() || AuthService.isManager() ?(
                                                        <td>{c.historyCheck}</td>
                                                    ): null}
                                                    <td>{c.status ? "Pending" : "Done"}</td>

                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="11" className="text-center">Empty</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="card-footer" style={{background: "#171821"}}>
                            {/*for pagenaton*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}