import React from "react";
import { Image } from "react-bootstrap";

const ProfilePicture = ({ Propic, onShowSidebar }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center rounded-circle bg-primary propic"
      style={{ width: "50px", height: "50px", 'box-shadow': 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'}}
      onClick={() => onShowSidebar()}
    >
      <Image src={Propic} alt="Profile Picture" roundedCircle style={{ width: "50px", height: "50px" }}/>
    </div>
  );
};

export default ProfilePicture;
