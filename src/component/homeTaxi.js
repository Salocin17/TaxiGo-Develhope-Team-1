import { Navbar } from "./navBar";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/homeUser.css";
import { MapBox } from "./mapBox";
import UserList from "./UserList";
import UserRequest from "./UserRequest";
import TaxiRideTimer from "./TaxiRideTimer";
import SidebarTaxi from "./sidebarTaxi";


export function HomeTaxi() {
    return (
        <div className="container">
            <SidebarTaxi/>

            <div className="container-right">
                <Navbar />
                <div className="container-map" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
                    <MapBox />
                </div>
            </div>
        </div>
    );
}
