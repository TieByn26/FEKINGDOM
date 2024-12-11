import {SideBar} from "../../components/layout/SideBar";
import {FooterDashboard} from "../../components/layout/FooterDashboard";
import {useEffect} from "react";
import {ContractList} from "./ContractList";
import {HeaderDashboard} from "../../components/layout/HeaderDashboard";
import {ContractAdd} from "./ContractAdd";
import {Link} from "react-router-dom";
import {ContractUpdate} from "./ContractUpdate";

export function ContractUpdateDashboard() {
    useEffect(() => {
        document.title = "Contract Update";
    }, []);
    return (<>
        <div id="page-top">
            <div id="wrapper">
                <SideBar/>
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content" style={{background: "#171821"}}>
                        <HeaderDashboard/>
                        <div className="container-fluid"><Link to={"/user/contract/create"} className="btn btn-outline-light" type="button">Add Contract</Link><Link to={"/user/contract"} className="btn btn-outline-light" type="button">Contract List</Link>
                            <ContractUpdate/>
                        </div>
                    </div>
                </div>
            </div>
            <FooterDashboard/>
        </div>
    </>);
}