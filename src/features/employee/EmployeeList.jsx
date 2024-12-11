import {useCallback, useEffect, useState} from "react";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import EmployeeService from "../../services/EmployeeService";
import {Field, Form, Formik} from "formik";

export function EmployeeList() {
    const [employees, setEmployees] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const data = await EmployeeService.getEmployeeList(localStorage.getItem("token"));
            setEmployees(data);
        } catch (error) {
            console.error("Failed to fetch Employees:", error);
        }
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
    const handleSearch = async (values) => {
        try {
            if (values.search === "") {
                fetchEmployees();
                return;
            }
            const data = await EmployeeService.searchEmployeeList(localStorage.getItem("token"),values.search);
            setEmployees(data);
        } catch (error) {
            console.error("Failed to search Employees:", error);
        }
    }
    return (
        <div>
            <div className="row justify-content-center" style={{margin: "30px 0 30px 0"}}>
                <div className="col-xl-10 col-xxl-12">
                    <div className="card shadow">
                        <div className="card-header d-flex flex-wrap justify-content-center align-items-center justify-content-sm-between gap-3" style={{background: "#171821"}}>
                            <h5 className="display-6 text-nowrap text-capitalize mb-0" style={{color: "#c1931f"}}>All Employees&nbsp;</h5>
                            <div className="input-group input-group-sm w-auto">
                                <Formik initialValues={
                                    {
                                        search: ""
                                    }
                                } onSubmit={handleSearch}>
                                    {() => ( <Form className="d-flex">
                                <Field className="form-control form-control-sm d-flex" type="text" name="search" style={{background: "#171821",color: "rgb(250,169,13)"}}/>
                                        <button className="btn btn-sm btn-outline-light" type="submit">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-search mb-1" style={{color: "rgb(255,255,255)"}}>
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path>
                            </svg></button>
                            </Form>)}
                            </Formik>
                                    </div>
                        </div>
                        <div className="card-body" style={{background: "#171821"}}>
                            <div className="table-responsive">
                                <table className="table table-striped table-hover">
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Date of birth</th>
                                        <th>Salary</th>
                                        <th>Gender</th>
                                        <th>Phone Number</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                        <th>Position</th>
                                        <th>Division</th>
                                        <th>Degree</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {employees.length > 0 ? (
                                            employees.map((employee, index) => (
                                                <tr key={employee.id}>
                                                    <td>{employee.name}</td>
                                                    <td>{employee.dob}</td>
                                                    <td>{employee.salary}</td>
                                                    <td>{employee.gender === 1 ? 'Male' : 'Female'}</td>
                                                    <td>{employee.phoneNumber}</td>
                                                    <td>{employee.email}</td>
                                                    <td>{employee.address}</td>
                                                    <td>{employee.position.name}</td>
                                                    <td>{employee.division.name}</td>
                                                    <td>{employee.degree.name}</td>
                                                    <td className="text-center"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-trash fs-5 text-danger" onClick={() => confirmDelete(employee)} style={{color: "rgb(255,0,0)"}}>
                                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"></path>
                                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"></path>
                                                    </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-wrench fs-5 text-warning" onClick={() => updateForm(employee.id) } >
                                                        <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z"></path>
                                                    </svg></td>
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