import { Navbar } from "./navBar";
import Sidebar from "./sidebar";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/homeUser.css";
import SearchCard from "./SearchCard";
import { MapBox } from "./mapBox";
import TaxiList from './TaxiList'
import UserProfileCard from "./TaxiProfileCard";


export function HomeUser() {
  

  return (
    <div className="container">
      <Sidebar />

      <div className="container-right">
        <Navbar />    
        <div className="container-map">
          <MapBox />
        </div>
      </div>
    </div>
  );
}
