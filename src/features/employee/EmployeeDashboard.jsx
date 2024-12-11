import {SideBar} from "../../components/layout/SideBar";
import {FooterDashboard} from "../../components/layout/FooterDashboard";
import {useEffect} from "react";
import {EmployeeList} from "./EmployeeList";
import {HeaderDashboard} from "../../components/layout/HeaderDashboard";
import {Link} from "react-router-dom";
import AuthService from "../../services/AuthService";
import {ErrorPage} from "../../components/layout/ErrorPage";
import {PaymentAdd} from "../payment/PaymentAdd";

export function EmployeeDashboard() {
    useEffect(() => {
        document.title = "Employee List";
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
                                    <EmployeeList/>
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