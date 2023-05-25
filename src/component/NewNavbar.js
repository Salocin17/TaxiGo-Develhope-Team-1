import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/NewNavbar.css";
import TapSidebar from "./tapSidebar";

const NewNavbar = (props) => {
  return (
    <div className="navbar fixed-top gradient-navbar">
      <div className="logo-image " />
      <div >
        <TapSidebar Propic={'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'} onShowSidebar={props.onShowSidebar} />
      </div>
    </div>
  );
};

export default NewNavbar;
