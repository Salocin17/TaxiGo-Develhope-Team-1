import { Navbar } from "./navBar";
import Sidebar from "./sidebar";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/homeUser.css";
import SearchCard from "./SearchCard";
import { MapBox } from "./mapBox";

export function HomeUser() {
  

  return (
    <div className="container">
      <Sidebar />

      <div className="container-right">
        <Navbar />
        <SearchCard />
        <div className="container-map">
          <MapBox />
        </div>
      </div>
    </div>
  );
}
