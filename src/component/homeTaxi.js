import { Navbar } from "./navBar";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/homeUser.css";
import { MapBox } from "./mapBoxTaxi";
import UserList from "./UserList";
import UserRequest from "./UserRequest";
import TaxiRideTimer from "./TaxiRideTimer";
import SidebarTaxi from "./sidebarTaxi";
import NewNavbar from "./NewNavbar";
import ProfilePicture from "./ProfileIcon";
import '../css/PrincpalBackground.css'

export function HomeTaxi() {
  const [active, setActive] = useState(0);
  const [activeSidebar, setActiveSidebar] = useState(0)
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

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

  useEffect(() => {
    const token = localStorage.getItem("token");
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

  function handleShowSidebar(value) {
    activeSidebar === 0 ? setActiveSidebar(1) : setActiveSidebar(0)
  }

  return (
    <div className="container">
      {active === 0 && <div className="principal-background">
      </div>}
      <NewNavbar/>
      {activeSidebar === 1 && <SidebarTaxi />}
      <div style={{ position: 'absolute', top: '8rem', right: '1rem', 'z-index': '999' }}>
      <ProfilePicture Propic={'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'} onShowSidebar={handleShowSidebar} />
      </div>
      <div className="container-right">
        {active === 0 && <UserList onValueChange={handleValueChange} />}
        {active === 1 && <UserRequest onValueChange={handleValueChange} />}
        {active === 2 && <TaxiRideTimer onValueChange={handleValueChange} />}
        <div className="container-map">
        {active === 1 && <MapBox />}
        </div>
      </div>
    </div>
  );
}
