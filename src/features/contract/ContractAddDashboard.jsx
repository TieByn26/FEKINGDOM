import {SideBar} from "../../components/layout/SideBar";
import {FooterDashboard} from "../../components/layout/FooterDashboard";
import {useEffect} from "react";
import {HeaderDashboard} from "../../components/layout/HeaderDashboard";
import {ContractAdd} from "./ContractAdd";
import {Link} from "react-router-dom";
import AuthService from "../../services/AuthService";
import {ErrorPage} from "../../components/layout/ErrorPage";
import {PaymentAdd} from "../payment/PaymentAdd";

export function ContractAddDashboard() {
    useEffect(() => {
        document.title = "Employee add";
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
                                <div className="container-fluid"><Link to={"/user/contract/create"} className="btn btn-outline-light" type="button">Add Contract</Link><Link to={"/user/contract"} className="btn btn-outline-light" type="button">Contract List</Link>
                                    <ContractAdd/>
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