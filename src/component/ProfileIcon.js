import React from "react";
import { Image } from "react-bootstrap";

const ProfilePicture = ({ user, taxi, onShowSidebar }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center rounded-circle bg-white propic shadow"
      style={{ marginLeft:"0.3rem"}}
      onClick={() => onShowSidebar()}
    >
      {user && <Image src={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2380&q=80"} alt="Profile Picture" roundedCircle style={{ width: "50px", height: "50px" }}/>}
      {taxi && <Image src={"https://images.unsplash.com/photo-1514501259756-f4b6fbeffa67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2380&q=80"} alt="Profile Picture" roundedCircle style={{ width: "50px", height: "50px" }} />}
    </div>
  );
};

export default ProfilePicture;
