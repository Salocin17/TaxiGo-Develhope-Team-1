import Sidebar from "./sidebar";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/homeUser.css";
import SearchCard from "./SearchCard";
import TaxiList from "./TaxiList";
import TaxiProfileCard from "./TaxiProfileCard";
import RideTimer from "./RideTimer";
import FeedbackCard from "./FeedbackCard";
import { MapBox } from "./mapBoxUser";
import NewNavbar from "./NewNavbar";
import ProfilePicture from "./ProfileIcon";
import { FaArrowLeft } from "react-icons/fa";


const slideInVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 }
};


export function HomeUser() {
  const [active, setActive] = useState(0);
  const [activeSidebar, setActiveSidebar] = useState(0)
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");


  const street = "San Cataldo";
  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`http://federicov.ddns.net:3300/api/location/user/${street}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: "change",
      }),
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      console.log(res);
    });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`http://localhost:3300/api/user`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then((response) => response.json())
    .then((data) => {
      setUsername(data.first_name);       
      setName(data.last_name); 

    })
  }, []);

  function handleValueChange(newValue) {
    setActive(newValue);
    console.log(newValue);
  }

  function handleShowSidebar(value) {
    activeSidebar === 0 ? setActiveSidebar(1) : setActiveSidebar(0)
  }

  return (
    <div className="container">
      <NewNavbar/>
      <div style={{ position: 'absolute', top: '8rem', left: '1rem', 'z-index': '999' }}>
        <ProfilePicture Propic={'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'} onShowSidebar={handleShowSidebar} />
      </div>
      {active != 0 && <div style={{ position: 'absolute', top: '12rem', left: '1rem', 'z-index': '999' }}>
        <div
          className="d-flex justify-content-center align-items-center rounded-circle bg-white propic shadow"
          style={{ width: "50px", height: "50px" }}
          onClick={() => setActive(active - 1)}
        >
          <FaArrowLeft size={20} />
        </div>
      </div>}
      {activeSidebar === 1 && <Sidebar/>}
      <div className="container-right">
        {active === 0 && <SearchCard onValueChange={handleValueChange} onShowSidebar={handleShowSidebar} />}
        {active === 1 && <TaxiList onValueChange={handleValueChange} />}
        {active === 2 && <TaxiProfileCard onValueChange={handleValueChange} />}
        {active === 3 && <RideTimer onValueChange={handleValueChange} street={street} />}
        {active === 4 && <FeedbackCard onValueChange={handleValueChange} />}

        <div className="container-map">
          <MapBox />
        </div>
      </div>
    </div>
  );
}
