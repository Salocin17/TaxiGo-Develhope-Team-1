import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MapBoxTaxi } from "./mapBoxTaxi";
import UserList from "../component/UserList";
import UserRequest from "../component/UserRequest";
import TaxiRideTimer from "../component/TaxiRideTimer";
import TaxiRideTimer2 from "../component/TaxiRideTimer2";
import SidebarTaxi from "../component/sidebarTaxi";
import NewNavbar from "../component/NewNavbar";
import { useParams } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa'

import io from "socket.io-client";


export function HomeTaxi({onSetStreet}) {
  const [active, setActive] = useState(0);
  const [activeSidebar, setActiveSidebar] = useState(0)
  const [request, setRequest] = useState()
  const [destination, setDestination] = useState("");

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const { street } = useParams()

<<<<<<< HEAD
  console.log(request);
=======
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    const newSocket = io.connect('http://localhost:3300')
    console.log("ciao" + newSocket)

    const token = localStorage.getItem("token1");
    fetch(`http://localhost:3300/api/driver`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json()).then(json =>{
        newSocket.emit("join_room", json._id);
    });      

    setSocket(newSocket)
}, [])

>>>>>>> Feature/Socket

  useEffect(() => {
    const token = localStorage.getItem("token1");
    fetch(`http://localhost:3300/api/location/taxiDriver/${street}`, {
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
    if(request){
      const token = localStorage.getItem("token1");

      fetch(`http://localhost:3300/api/user/driver`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json" 
        },
        body: JSON.stringify({
          id: request.user
        })
      })
        .then((response) => response.json())
        .then((data) => {
          setUsername(data.last_name);
          setName(data.first_name);
        });
    }
  }, [request]);

  function handleValueChange(newValue) {
    setActive(newValue);
  }
  
  function handleValueChange2(newValue, data) {
    setRequest(data)
    setActive(newValue);
  }
  
  function handleValueChange3(newValue, data) {
    setDestination(data)
    setActive(newValue);
  }

  function handleShowSidebar(value) {
    activeSidebar === 0 ? setActiveSidebar(1) : setActiveSidebar(0);
  }

  function handleShowSidebar(value) {
    activeSidebar === 0 ? setActiveSidebar(1) : setActiveSidebar(0);
  }

  useEffect(() => {
    onSetStreet(street)
  }, []);

  console.log("homeTaxi")

  return (
    <div className="container">
      {active === 0 && <div className="principal-background"></div>}
      <NewNavbar onShowSidebar={handleShowSidebar} />

      {active != 0 && (
        <div
          style={{
            position: "absolute",
            top: "12rem",
            right: "1rem",
            "z-index": "999",
          }}
        >
          <div
            className="d-flex justify-content-center align-items-center rounded-circle bg-white propic shadow"
            style={{ width: "50px", height: "50px" }}
            onClick={() => setActive(active - 1)}
          >
            <FaArrowLeft size={20} />
          </div>
        </div>
      )}
      {activeSidebar === 1 && <SidebarTaxi />}
      <div className="container-right">
        {active === 0 && <UserList onValueChange={handleValueChange2} socket={socket} name={name} />}
        {active === 1 && <UserRequest onValueChange={handleValueChange3} data={request} name={name} />}
        {active === 2 && <TaxiRideTimer onValueChange={handleValueChange} startAddress={destination} name={name}/>}
        {active === 3 && <TaxiRideTimer2 onValueChange={handleValueChange} endAddress={request.destination} name={name}/>}
        <div className="container-map">
        {active === 1 && <MapBoxTaxi center={street}/> }
        {active === 2 && <MapBoxTaxi center={street} destination={destination}/> }
        {active === 3 && <MapBoxTaxi center={destination} destination={request.destination}/> }
        </div>
      </div>
    </div>
  );
}
