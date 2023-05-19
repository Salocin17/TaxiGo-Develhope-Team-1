import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faBars } from "@fortawesome/free-solid-svg-icons";
import ProfilePicture from "./ProfileIcon";
import Sidebar from "./sidebar";

export function Navbar({ name, username }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    console.log("Logout");
  };

  return (
    <div className="navbar-wrapper">
      <div className="navbar-wrapper-link">
        <div className="user-icon-wrapper" onClick={toggleSidebar}>
          <ProfilePicture Propic={"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"} />
        </div>
        <div className="user-icon-wrapper" onClick={handleLogout}>
          Esci <FontAwesomeIcon icon={faSignOut} />
        </div>
      </div>
      {isSidebarOpen && <Sidebar />}
    </div>
  );
}