import {SideBar} from "../../components/layout/SideBar";
import {FooterDashboard} from "../../components/layout/FooterDashboard";
import {useEffect} from "react";
import {Book} from "./Book";
import {BookList} from "./BookList";

export function BookingDashboard() {
    useEffect(() => {
        document.title = "Profile";
    }, []);
    return (<>
        <div id="page-top">
            <div id="wrapper">
                <SideBar/>
                {/*{localStorage.getItem('role') === 'ROLE_CUSTOMER' ? <Book/> : <BookList/>}*/}
                <BookList/>
            </div>
            <FooterDashboard/>

        </div>
    </>);
}