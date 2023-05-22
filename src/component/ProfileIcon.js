import React from "react";
import { Image } from "react-bootstrap";

const ProfilePicture = ({ Propic, onShowSidebar }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center rounded-circle bg-white propic shadow"
      style={{ width: "55px", height: "55px", marginLeft:"0.3rem"}}
      onClick={() => onShowSidebar()}
    >
      <Image src={Propic} alt="Profile Picture" roundedCircle style={{ width: "50px", height: "50px" }}/>
    </div>
  );
};

export default ProfilePicture;
