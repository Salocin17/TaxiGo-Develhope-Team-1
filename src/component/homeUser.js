import { MapBox } from "./mapBox";
import { Navbar } from "./navBar";
import { Sidebar } from "./sidebar";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/homeUser.css";

export function HomeUser() {
  

  return (
    <div className="container">
      <div><Sidebar /></div>
      <div className="container-right">
        <Navbar />
        <div className="container-map">
          <MapBox />
        </div>
      </div>
    </div>
  );
}
