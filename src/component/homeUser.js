import { Navbar } from "./navBar";
import Sidebar from "./sidebar";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/homeUser.css";
import SearchCard from "./SearchCard";
import { MapBox } from "./mapBox";
import TaxiList from './TaxiList'
import TaxiProfileCard from "./TaxiProfileCard";


export function HomeUser() {
  

  return (
    <div className="container">
      <Sidebar />

      <div className="container-right">
        <Navbar />  
        <TaxiList />  
        <div className="container-map" style={{paddingTop:"3rem", paddingBottom:"3rem"}}>
          <MapBox />
        </div>
      </div>
    </div>
  );
}
