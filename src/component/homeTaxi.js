import { Navbar } from "./navBar";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/homeUser.css";
import { MapBox } from "./mapBoxTaxi";
import UserList from "./UserList";
import UserRequest from "./UserRequest";
import TaxiRideTimer from "./TaxiRideTimer";
import SidebarTaxi from "./sidebarTaxi";



export function HomeTaxi() {

    const [active, setActive] = useState(0)


    const street = "Palermo"

    useEffect(() => {

        const token = localStorage.getItem("token")

        fetch(`http://localhost:3300/api/location/taxiDriver/${street}`, {
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

    function handleValueChange(newValue) {
        setActive(newValue);
    }

    return (
        <div className="container">
            <SidebarTaxi />

            <div className="container-right">
                <Navbar />
                {active === 0 && <UserList onValueChange={handleValueChange} />}
                {active === 1 && <UserRequest onValueChange={handleValueChange} />}
                {active === 2 && <TaxiRideTimer onValueChange={handleValueChange} />}
                
                <div className="container-map" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
                    <MapBox />
                </div>
            </div>
        </div>
    );
}
