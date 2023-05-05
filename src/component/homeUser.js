import { MapBox } from "./mapBox";
import { Navbar } from "./navBar";
import { Sidebar } from "./sidebar";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/homeUser.css";
import SearchCard from "./SearchCard";
import TaxiList from "./TaxiList";

export function HomeUser() {
  

  return (
    <div className="container">
      <div><Sidebar /></div>
      <div className="container-right">
        <Navbar />
        <TaxiList/>
        <div className="container-map">
          <MapBox />
        </div>
      </div>
    </div>
  );
}
