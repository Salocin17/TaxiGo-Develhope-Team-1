import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/homeUser.css";
import { MapBox } from "./mapBoxTaxi";
import UserList from "./UserList";
import UserRequest from "./UserRequest";
import TaxiRideTimer from "./TaxiRideTimer";
import TaxiRideTimer2 from "./TaxiRideTimer2";
import SidebarTaxi from "./sidebarTaxi";
import NewNavbar from "./NewNavbar";
import "../css/PrincpalBackground.css";

export function HomeTaxi() {
  const [active, setActive] = useState(0);
  const [activeSidebar, setActiveSidebar] = useState(0);

  const street = "Palermo";

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`http://federicov.ddns.net:3300/api/location/taxiDriver/${street}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: "change",
      }),
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      console.log(res);
    });
  }, []);

  function handleValueChange(newValue) {
    setActive(newValue);
  }

  function handleShowSidebar(value) {
    activeSidebar === 0 ? setActiveSidebar(1) : setActiveSidebar(0);
  }

  return (
    <div className="container">
      <NewNavbar onShowSidebar={handleShowSidebar} />

      {active != 0 && (
        <div
          style={{
            position: "absolute",
            top: "12rem",
            right: "1rem",
            "z-index": "999",
          }}
        >
          <div
            className="d-flex justify-content-center align-items-center rounded-circle bg-white propic shadow"
            style={{ width: "50px", height: "50px" }}
            onClick={() => setActive(active - 1)}
          ></div>
        </div>
      )}
      {activeSidebar === 1 && <SidebarTaxi />}
      <div className="container-right">
        {active === 0 && <UserList onValueChange={handleValueChange} />}
        {active === 1 && <UserRequest onValueChange={handleValueChange} />}
        {active === 2 && (
          <TaxiRideTimer
            onValueChange={handleValueChange}
            startAddress={"Via Roma"}
          />
        )}
        {active === 3 && (
          <TaxiRideTimer2
            onValueChange={handleValueChange}
            endAddress={"Via Delia"}
          />
        )}
        <div className="container-map">{active && <MapBox />}</div>
      </div>
    </div>
  );
}
