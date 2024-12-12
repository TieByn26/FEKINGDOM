import {SideBar} from "../../components/layout/SideBar";
import {FooterDashboard} from "../../components/layout/FooterDashboard";
import {useEffect} from "react";
import {HeaderDashboard} from "../../components/layout/HeaderDashboard";
import {Link} from "react-router-dom";
import {PaymentUpdate} from "./PaymentUpdate";
import AuthService from "../../services/AuthService";
import {ErrorPage} from "../../components/layout/ErrorPage";

export function PaymentUpdateDashboard() {
    useEffect(() => {
        document.title = "Payment Update";
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
                                <div className="container-fluid"><Link to={"/user/payment/create"} className="btn btn-outline-light" type="button">Add Payment</Link><Link to={"/user/payment"} className="btn btn-outline-light" type="button">Payment List</Link>
                                    <PaymentUpdate/>
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