import {SideBar} from "../../components/layout/SideBar";
import {FooterDashboard} from "../../components/layout/FooterDashboard";
import {useEffect} from "react";
import {ContractList} from "./ContractList";
import {HeaderDashboard} from "../../components/layout/HeaderDashboard";
import {Link} from "react-router-dom";
import AuthService from "../../services/AuthService";
import {ErrorPage} from "../../components/layout/ErrorPage";
import {ContractAdd} from "./ContractAdd";
import {ContractListForCustomer} from "./ContractListForCustomer";

export function ContractDashboard() {
    useEffect(() => {
        document.title = "Contract List";
    }, []);
    return (<>
        <div id="page-top">
            <div id="wrapper">
                <SideBar/>
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content" style={{background: "#171821"}}>
                        <HeaderDashboard/>                        {
                        AuthService.isCustomer()? (
                            <>

                                <div className="container-fluid"><Link to={"/user/contract"} className="btn btn-outline-light" type="button">Contract List</Link>
                                    <ContractListForCustomer/>
                                </div>
                            </>
                        ) : (<>

                                <div className="container-fluid"><Link to={"/user/contract/create"} className="btn btn-outline-light" type="button">Add Contract</Link><Link to={"/user/contract"} className="btn btn-outline-light" type="button">Contract List</Link>
                                    <ContractList/>
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