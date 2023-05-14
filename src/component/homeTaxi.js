import { Navbar } from "./navBar";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/homeUser.css";
import { MapBox } from "./mapBoxTaxi";
import UserList from "./UserList";
import UserRequest from "./UserRequest";
import TaxiRideTimer from "./TaxiRideTimer";
import SidebarTaxi from "./sidebarTaxi";
import { useEffect } from "react";


export function HomeTaxi() {

    const street = "Palermo"

    useEffect(() => {

        const token = localStorage.getItem("token")

        fetch(`http://federicov.ddns.net:3300/api/location/taxiDriver/${street}`, {
            method: 'PATCH',
            body: JSON.stringify({
                title: 'change',
            }),
            headers: {
                'authorization': `Bearer ${token}`,
            }
        }).then(res => {
            console.log(res)
        })

    }, [])

    return (
        <div className="container">
            <SidebarTaxi />

            <div className="container-right">
                <Navbar />
                <UserRequest />
                <div className="container-map" style={{ paddingTop: "3rem", paddingBottom: "3rem", width:"100%" }}>
                    <MapBox />
                </div>
            </div>
        </div>
    );
}
