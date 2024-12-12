import {SideBar} from "../../components/layout/SideBar";
import {FooterDashboard} from "../../components/layout/FooterDashboard";
import {useEffect} from "react";
import {CustomerList} from "./CustomerList";
import {HeaderDashboard} from "../../components/layout/HeaderDashboard";
import {Link} from "react-router-dom";
import AuthService from "../../services/AuthService";
import {ErrorPage} from "../../components/layout/ErrorPage";
import {PaymentAdd} from "../payment/PaymentAdd";

export function CustomerDashboard() {
    useEffect(() => {
        document.title = "Customer List";
    }, []);
    return (<>
        <div id="page-top">
            <div id="wrapper" className="d-flex">
                <SideBar/>
                <div className="d-flex flex-column w-100 h-100" id="content-wrapper">
                    <div id="content" style={{background: "#171821"}}>
                        <HeaderDashboard/>
                        {
                            AuthService.isCustomer()? <ErrorPage/> : (<>
                                <div className="container-fluid"><Link to={"/user/customer"} className="btn btn-outline-light" type="button">Customer List</Link>
                                    <CustomerList/>
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