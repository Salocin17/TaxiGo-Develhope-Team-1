import React, { useState } from "react";
import { Sidebar } from './sidebar';
import "../css/navBar.css";

export function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    function toggleSidebar() {
      setIsSidebarOpen(!isSidebarOpen);
    }
  
    function closeSidebar() {
      setIsSidebarOpen(false);
    }

  return (
    <div className="wrapper-navbar">
      <div className="wrapper-navbar-container">
        <div className="wrapper-navbar-container-logo"></div>
        <div className="wrapper-navbar-container-sidebar">
          <nav>
            <ul className="link-web">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Wallet</a>
              </li>
              <li>
                <a href="#">Storico</a>
              </li>
              <li>
                <a href="#">Notifiche</a>
              </li>
              <li className="dropdown">
                <a href="#" >
                  Account
                  <i className="fa fa-caret-down" style={{margin:'0 0 0 0.8rem'}}></i>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">Mio profilo</a>
                  </li>
                  <li>
                    <a href="#">Impostazioni</a>
                  </li>
                  <li>
                    <a href="#">Esci</a>
                  </li>
                </ul>
              </li>
              <li>
            
              </li>
            </ul>
          </nav>
          <button className="navbar-toggler" onClick={toggleSidebar} style={{padding: "0.5rem"}}>
              <i className="fa fa-bars" style={{color: "white"}}></i>
            </button>
          
        </div>
       
          <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      </div>
    </div>
  );
}