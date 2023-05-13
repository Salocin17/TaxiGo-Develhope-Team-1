import { Navbar } from "./navBar";
import Sidebar from "./sidebar";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/homeUser.css";
import SearchCard from "./SearchCard";
import { MapBox } from "./mapBox";
import TaxiList from './TaxiList'
import TaxiProfileCard from "./TaxiProfileCard";
import RideTimer from "./RideTimer";
import FeedbackCard from "./FeedbackCard";


export function HomeUser() {
  
  return (
    <div className="container">
      <Sidebar />

      <div className="container-right">
        <Navbar />  
        {/* <SearchCard /> */}
        {/* <TaxiList /> */}
        {/* <TaxiProfileCard/> */}
        {/* <RideTimer/> */}
        {/* <FeedbackCard/> */}
        <div className="container-map" style={{paddingTop:"3rem", paddingBottom:"3rem"}}>
          <MapBox />
        </div>
      </div>
    </div>
  );
}
