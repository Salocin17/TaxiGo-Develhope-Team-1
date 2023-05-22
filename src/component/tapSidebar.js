import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const ProfilePicture = ({ onShowSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    onShowSidebar();
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center rounded-circle bg-white propic shadow"
      style={{ width: "50px", height: "50px" }}
      onClick={handleClick}
    >
      {isOpen ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
    </div>
  );
};

export default ProfilePicture;
