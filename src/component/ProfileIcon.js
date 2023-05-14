import React from "react";
import { Image } from "react-bootstrap";

const ProfilePicture = ({ Propic, handleclick }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center rounded-circle bg-primary"
      style={{ width: "50px", height: "50px"}}
      onClick={handleclick}
    >
      <Image src={Propic} alt="Profile Picture" roundedCircle style={{ width: "50px", height: "50px",}}/>
    </div>
  );
};

export default ProfilePicture;
