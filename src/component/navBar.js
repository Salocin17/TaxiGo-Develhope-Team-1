import React, { useState } from "react";
import "../css/navBar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCaretDown, faSignOut } from "@fortawesome/free-solid-svg-icons";

export function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
      <div className="navbar-wrapper">
        <div className="navbar-wrapper-link">
          <div className="user-dropdown">
          <div className="user-icon-wrapper" onClick={toggleDropdown}>
            <div>Nome utente</div>
            <div><FontAwesomeIcon icon={faCaretDown} /></div>
          </div>
          {dropdownOpen && (
            <div className="user-dropdown__menu">
              <a href="#"><FontAwesomeIcon icon={faUser} /> Il mio profilo</a>
              <a href="#"><FontAwesomeIcon icon={faSignOut} /> Esci</a>
            </div>
          )}
          </div>
        </div>
      </div>
  );
}