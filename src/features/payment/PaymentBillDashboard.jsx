import {SideBar} from "../../components/layout/SideBar";
import {FooterDashboard} from "../../components/layout/FooterDashboard";
import {useEffect} from "react";
import {HeaderDashboard} from "../../components/layout/HeaderDashboard";
import {Link} from "react-router-dom";
import {PaymentBill} from "./PaymentBill";
import AuthService from "../../services/AuthService";

export function PaymentBillDashboard() {
    useEffect(() => {
        document.title = "Bill Payment";
    }, []);
    return (<>
        <div id="page-top">
            <div id="wrapper">
                <SideBar/>
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content" style={{background: "#171821"}}>
                        <HeaderDashboard/>
                        <div className="container-fluid">
                            {
                                AuthService.isCustomer() ? null : (<>
                                    <Link to={"/user/payment/create"} className="btn btn-outline-light" type="button">Add Payment</Link>
                                    <Link to={"/user/payment"} className="btn btn-outline-light" type="button">Payment List</Link>
                                </>)
                            }

                            <PaymentBill/>
                        </div>
                    </div>
                </div>
            </div>
            <FooterDashboard/>
        </div>
    </>);
}