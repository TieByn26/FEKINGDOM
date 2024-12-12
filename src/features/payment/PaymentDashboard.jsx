import {SideBar} from "../../components/layout/SideBar";
import {FooterDashboard} from "../../components/layout/FooterDashboard";
import {useEffect} from "react";
import {PaymentList} from "./PaymentList";
import {HeaderDashboard} from "../../components/layout/HeaderDashboard";
import {Link} from "react-router-dom";
import AuthService from "../../services/AuthService";
import {PaymentListForCustomer} from "./PaymentListForCustomer";

export function PaymentDashboard() {
    useEffect(() => {
        document.title = "Payment Dashboard";
    }, []);
    return (<>
        <div id="page-top">
            <div id="wrapper" className="d-flex">
                <SideBar/>
                <div className="d-flex flex-column w-100 h-100" id="content-wrapper">
                    <div id="content" style={{background: "#171821", paddingBottom: "340px"}}>
                        <HeaderDashboard/>
                        <div className="container-fluid">
                            {AuthService.isCustomer() ? (<PaymentListForCustomer/>) : (<>
                                    <Link to={"/user/payment/create"} className="btn btn-outline-light" type="button">Add
                                        Payment</Link>
                                    <Link to={"/user/payment"} className="btn btn-outline-light" type="button">Payment
                                        List</Link>
                                    <PaymentList/>
                                </>)}
                        </div>
                    </div>
                </div>
            </div>
            <FooterDashboard/>
        </div>
    </>);
}