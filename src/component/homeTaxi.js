import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/homeUser.css";
import { MapBoxTaxi } from "./mapBoxTaxi";
import UserList from "./UserList";
import UserRequest from "./UserRequest";
import TaxiRideTimer from "./TaxiRideTimer";
import TaxiRideTimer2 from "./TaxiRideTimer2";
import SidebarTaxi from "./sidebarTaxi";
import NewNavbar from "./NewNavbar";
import ProfilePicture from "./ProfileIcon";
import '../css/PrincpalBackground.css'
import { useParams } from "react-router-dom";

export function HomeTaxi() {
  const [active, setActive] = useState(0);
  const [activeSidebar, setActiveSidebar] = useState(0)
  const [request, setRequest] = useState()
  const [destination, setDestination] = useState("");

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const { street } = useParams()

  useEffect(() => {
    const token = localStorage.getItem("token1");
    fetch(`http://localhost:3300/api/location/taxiDriver/${street}`, {
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

  useEffect(() => {
    const token = localStorage.getItem("token1");

    fetch(`http://localhost:3300/api/user`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUsername(data.last_name);
        setName(data.first_name);
      });
  }, []);

  function handleValueChange(newValue) {
    setActive(newValue);
  }
  function handleValueChange2(newValue, data) {
    setRequest(data)
    setActive(newValue);
  }
  
  function handleValueChange3(newValue, data) {
    setDestination(data)
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
        {active === 0 && <UserList onValueChange={handleValueChange2} />}
        {active === 1 && <UserRequest onValueChange={handleValueChange3} data={request}/>}
        {active === 2 && <TaxiRideTimer onValueChange={handleValueChange} startAddress={destination}/>}
        {active === 3 && <TaxiRideTimer2 onValueChange={handleValueChange} endAddress={request.destination}/>}
        <div className="container-map">
        {active === 1 && <MapBoxTaxi center={street}/> }
        {active === 2 && <MapBoxTaxi center={street} destination={destination}/> }
        {active === 3 && <MapBoxTaxi center={destination} destination={request.destination}/> }

        </div>
      </div>
    </div>
  );
}
