import { Navbar } from "./navBar";
import Sidebar from "./sidebarTaxi";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/homeUser.css";

export function HomeTaxi() {
  

  return (
    <div className="container">
      <Sidebar />

      <div className="container-right">
        <Navbar />  
      </div>
    </div>
  );
}
