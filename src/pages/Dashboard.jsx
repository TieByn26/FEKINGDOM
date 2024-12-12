import {SideBar} from "../components/layout/SideBar";
import {FooterDashboard} from "../components/layout/FooterDashboard";
import {useEffect} from "react";
import {Profile} from "../features/profile/Profile";
import AuthService from "../services/AuthService";
import {ErrorPage} from "../components/layout/ErrorPage";

export function Dashboard() {
    useEffect(() => {
        document.title = "Profile";
    }, []);
    return (<>
        <div id="page-top" >
            <div id="wrapper" className="d-flex">
                <SideBar/>
                {
                   !AuthService.isAuthenticated() ? <ErrorPage/> : <Profile/>
                }

            </div>
            <FooterDashboard/>

        </div>
    </>);
}