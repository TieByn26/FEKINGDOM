import {HeaderDashboard} from "../../components/layout/HeaderDashboard";
import "../../assets/css/placeholder.css";
import "../../assets/css/ButtonProfile.css";
import {Infomation} from "./Infomation";
import {Password} from "./Password";
import wal from "sweetalert2";
export function Profile() {
    function comingSoon() {
        wal.fire({
            icon: 'info',
            title: 'Coming soon',
            text: 'This feature is coming soon'
        }
        )
    }
    return(
        <>
            <div className="d-flex flex-column w-100 h-100 " id="content-wrapper">
                <div id="content" className="flex-1" style={{background: "#171821", flex: "1 0 0"}}>
                    <HeaderDashboard />

                    <div className="container-fluid">
                        <h3 className="mb-4" style={{color: "rgb(255,255,255)",fontFamily: "Aboreto, serif"}}>Infomation</h3>
                        <div className="row mb-3">
                            <div className="col-lg-4">
                                <div className="card mb-3">
                                    <div className="card-body text-center shadow" style={{background: "rgba(23,24,33,0.88)",display: "block"}}><img alt={"vatar"} className="rounded-circle mb-3 mt-4" src="https://imgcdn.stablediffusionweb.com/2024/11/12/3a76ea03-959f-4266-a211-c4849b2e65c8.jpg" width="160" height="160" style={{display: "inline"}}/><button className="btn btn-outline-light" onClick={() => comingSoon()} type="button" style={{color: "#f2f5f8",borderRadius: "17px",margin:" 0px 5px",borderWidth: "0.8px"}}>Change avatar</button></div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col">
                                        <Infomation/>
                                        <Password/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}