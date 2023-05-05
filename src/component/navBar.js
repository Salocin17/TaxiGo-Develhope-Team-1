import React, { useState } from "react";
import "../css/navBar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEur, faSignOut } from "@fortawesome/free-solid-svg-icons";

export function Navbar() {
  return (
      <div className="navbar-wrapper">
        <div className="navbar-wrapper-link">
            <div className="user-icon-wrapper">
              <div>Nome utente</div>
          </div>
          <div  className="user-icon-wrapper"> Esci <FontAwesomeIcon icon={faSignOut} /></div>

           
        </div>
      </div>
  );
}