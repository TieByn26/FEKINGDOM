import {SideBar} from "../../components/layout/SideBar";
import {FooterDashboard} from "../../components/layout/FooterDashboard";
import {useEffect} from "react";
import {HeaderDashboard} from "../../components/layout/HeaderDashboard";
import {ReportList} from "./ReportList";
import AuthService from "../../services/AuthService";
import {ReportAdd} from "./ReportAdd";

export function ReportDashboard() {
    useEffect(() => {
        document.title = "Report List";
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
                                !AuthService.isAdmin() ? <ReportAdd/> : <ReportList/>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <FooterDashboard/>
        </div>
    </>);
}