import {SideBar} from "../../components/layout/SideBar";
import {FooterDashboard} from "../../components/layout/FooterDashboard";
import {useEffect} from "react";
import {HeaderDashboard} from "../../components/layout/HeaderDashboard";
import {Link} from "react-router-dom";
import {FeedbackList} from "./FeedbackList";
import AuthService from "../../services/AuthService";
import {FeedbackAdd} from "./FeedbackAdd";

export function FeedbackDashboard() {
    useEffect(() => {
        document.title = "Feedback List";
    }, []);
    return (<>
        <div id="page-top">
            <div id="wrapper" className="d-flex">
                <SideBar/>
                <div className="d-flex flex-column w-100 h-100" id="content-wrapper">
                    <div id="content" style={{background: "#171821"}}>
                        <HeaderDashboard/>
                        <div className="container-fluid">
                            {
                                AuthService.isCustomer() ? <FeedbackAdd/> : <FeedbackList/>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <FooterDashboard/>
        </div>
    </>);
}