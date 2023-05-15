import React, { useState, useEffect } from "react";
import "../css/navBar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import ProfilePicture from "./ProfileIcon";

export function Navbar() {
  const [username, setUsername] = useState("");

  const getUsernameFromToken = () => {
    const token = localStorage.getItem("token"); 
    setUsername("Nome utente dal token");
  };

  useEffect(() => {
    getUsernameFromToken();
  }, []);  

  return (
      <div className="navbar-wrapper">
        <div className="navbar-wrapper-link">
            <div className="user-icon-wrapper">
            <div class="card-body text-center" style={{marginRight:"0.5rem"}}>
            <ProfilePicture  Propic={'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'} />
          </div>
              <div>{username}</div>
          </div>
          <Link to="/" style={{textDecoration: "none", color: "black", fontSize: "1.2rem"}}>
          <div  className="user-icon-wrapper"> Esci <FontAwesomeIcon icon={faSignOut} /></div>
          </Link>
        </div>
      </div>
  );
}