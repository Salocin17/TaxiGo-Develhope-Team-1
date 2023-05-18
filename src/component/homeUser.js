import { Navbar } from "./navBar";
import Sidebar from "./sidebar";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/homeUser.css";
import SearchCard from "./SearchCard";
import TaxiList from "./TaxiList";
import TaxiProfileCard from "./TaxiProfileCard";
import RideTimer from "./RideTimer";
import FeedbackCard from "./FeedbackCard";
import { MapBox } from "./mapBoxUser";

export function HomeUser() {
  const [active, setActive] = useState(0);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");


  const street = "San Cataldo";
  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`http://federicov.ddns.net:3300/api/location/user/${street}`, {
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
    }).then((response) => response.json())
    .then((data) => {
      setUsername(data.first_name);       
      setName(data.last_name); 

    })
  }, []);

  function handleValueChange(newValue) {
    setActive(newValue);
  }

  return (
    <div className="container">
      <Sidebar />
      <div className="container-right">
        {active === 0 && <SearchCard onValueChange={handleValueChange} />}
        {active === 1 && <TaxiList onValueChange={handleValueChange} />}
        {active === 2 && <TaxiProfileCard onValueChange={handleValueChange} />}
        {active === 3 && (
          <RideTimer onValueChange={handleValueChange} street={street} />
        )}
        {active === 4 && <FeedbackCard onValueChange={handleValueChange} />}

        <div className="container-map">
          <MapBox />
        </div>
      </div>
    </div>
  );
}
