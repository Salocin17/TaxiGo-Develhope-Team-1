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
            <div class="card-body text-center">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
              class="rounded-circle img-fluid" style={{width: "45px"}}/>
          </div>
              <div>Nome utente</div>
          </div>
          <div  className="user-icon-wrapper"> Esci <FontAwesomeIcon icon={faSignOut} /></div>

           
        </div>
      </div>
  );
}