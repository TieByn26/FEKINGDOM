import {SideBar} from "../../components/layout/SideBar";
import {FooterDashboard} from "../../components/layout/FooterDashboard";
import {useEffect} from "react";
import {EmployeeList} from "./EmployeeList";
import {HeaderDashboard} from "../../components/layout/HeaderDashboard";
import {EmployeeAdd} from "./EmployeeAdd";
import {Link} from "react-router-dom";
import {EmployeeUpdate} from "./EmployeeUpdate";
import AuthService from "../../services/AuthService";
import {ErrorPage} from "../../components/layout/ErrorPage";

export function EmployeeUpdateDashboard() {
    useEffect(() => {
        document.title = "Employee Update";
    }, []);
    return (<>
        <div id="page-top">
            <div id="wrapper">
                <SideBar/>
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content" style={{background: "#171821"}}>
                        <HeaderDashboard/>
                        {
                            AuthService.isCustomer()? <ErrorPage/> : (<>
                                <div className="container-fluid"><Link to={"/user/employee/create"} className="btn btn-outline-light" type="button">Add Employee</Link><Link to={"/user/employee"} className="btn btn-outline-light" type="button">Employee List</Link>
                                    <EmployeeUpdate/>
                                </div>
                            </>)
                        }

                    </div>
                </div>
            </div>
            <FooterDashboard/>
        </div>
    </>);
}