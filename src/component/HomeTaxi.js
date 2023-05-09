import { Navbar } from "./navBar";
import TaxiSidebar from "./TaxiSidebar";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/homeUser.css";
import { MapBox } from "./mapBox";


export function HomeTaxi() {
    return (
        <div className="container">
            <TaxiSidebar />

            <div className="container-right">
                <Navbar />
                <div className="container-map" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
                    <MapBox />
                </div>
            </div>
        </div>
    );
}
