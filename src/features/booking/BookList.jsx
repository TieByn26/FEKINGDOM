import {useEffect, useState} from "react";
import FacilityService from "../../services/FacilityService";

export function BookList(){

    return (
        <>
            <div className="d-flex flex-column" id="content-wrapper">
                <div id="content" style={{background: "#171821"}}>
                    <div className="container-fluid"><button className="btn btn-outline-light" type="button">Add Room</button><button className="btn btn-outline-light" type="button">Add Service</button>
                    </div>
                </div>
            </div>

        </>
    )
}