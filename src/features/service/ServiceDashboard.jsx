import {SideBar} from "../../components/layout/SideBar";
import {FooterDashboard} from "../../components/layout/FooterDashboard";
import {useEffect} from "react";
import {FacilityList} from "./CustomerList";
import {HeaderDashboard} from "../../components/layout/HeaderDashboard";
import {ServiceList} from "./ServiceList";

export function FacilityDashboard() {
    useEffect(() => {
        document.title = "Profile";
    }, []);
    return (<>
        <div id="page-top">
            <div id="wrapper">
                <SideBar/>
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content" style={{background: "#171821"}}>
                        <HeaderDashboard/>
                        <div className="container-fluid"><button className="btn btn-outline-light" type="button">Add Facility</button><button className="btn btn-outline-light" type="button">Add Service</button>
                            <ServiceList/>
                        </div>
                    </div>
                </div>
            </div>
            <FooterDashboard/>

        </div>
    </>);
}