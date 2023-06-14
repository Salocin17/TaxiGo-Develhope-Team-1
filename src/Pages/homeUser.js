import Sidebar from "../component/sidebar";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchCard from "../component/SearchCard";
import TaxiList from "../component/TaxiList";
import TaxiProfileCard from "../component/TaxiProfileCard";
import RideTimer from "../component/RideTimer";
import FeedbackCard from "../component/FeedbackCard";
import { MapBoxUser } from "./mapBoxUser";
import NewNavbar from "../component/NewNavbar";
import Swal from "sweetalert2";
import { Routes, Route, useParams, createMemoryRouter } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'

const slideInVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

export function HomeUser({onSetStreet}) {
  const [active, setActive] = useState(0);
  const [activeSidebar, setActiveSidebar] = useState(0);
  const [destination, setDestination] = useState(0);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [TaxiConfirm, setTaxiConfirm] = useState(false)
  const { street } = useParams();
  const [center, setCenter] = useState()
  const [coordinate, setCoordinate] = useState()
  const [distance, setDistance] = useState()
  const [driver, setDriver] = useState()


  useEffect(()=>{
    console.log("1")

    async function data(){
      const name = street.split(" ")
      let responce1
      switch(name.length){
        case 2: responce1 = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${name[0]}%20${name[1]}%2020124.json?access_token=pk.eyJ1IjoiY2FtZWxpYTk3IiwiYSI6ImNsaDU3Y3dodjA2NW4zZXBlbHluMXByc3AifQ.DRw1llh3YM_HfCOFpSGgHg` ); break;
        case 3: responce1 = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${name[0]}%20${name[1]}%20${name[2]}%2020124.json?access_token=pk.eyJ1IjoiY2FtZWxpYTk3IiwiYSI6ImNsaDU3Y3dodjA2NW4zZXBlbHluMXByc3AifQ.DRw1llh3YM_HfCOFpSGgHg` ); break;
        case 4: responce1 = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${name[0]}%20${name[1]}%20${name[2]}%20${name[3]}%2020124.json?access_token=pk.eyJ1IjoiY2FtZWxpYTk3IiwiYSI6ImNsaDU3Y3dodjA2NW4zZXBlbHluMXByc3AifQ.DRw1llh3YM_HfCOFpSGgHg` ); break;
        case 5: responce1 = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${name[0]}%20${name[1]}%20${name[2]}%20${name[3]}%20${name[4]}%2020124.json?access_token=pk.eyJ1IjoiY2FtZWxpYTk3IiwiYSI6ImNsaDU3Y3dodjA2NW4zZXBlbHluMXByc3AifQ.DRw1llh3YM_HfCOFpSGgHg` ); break;
        case 6: responce1 = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${name[0]}%20${name[1]}%20${name[2]}%20${name[3]}%20${name[4]}%20${name[5]}%2020124.json?access_token=pk.eyJ1IjoiY2FtZWxpYTk3IiwiYSI6ImNsaDU3Y3dodjA2NW4zZXBlbHluMXByc3AifQ.DRw1llh3YM_HfCOFpSGgHg` ); break;
      }

      const place1 = await responce1.json()
      setCenter(place1.features[0].center)
    }
    data()
  },[])

  useEffect(()=>{
    console.log("13")

    async function data(){
      const name = destination.split(" ")
      let responce1
      switch(name.length){
        case 2: responce1 = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${name[0]}%20${name[1]}%2020124.json?access_token=pk.eyJ1IjoiY2FtZWxpYTk3IiwiYSI6ImNsaDU3Y3dodjA2NW4zZXBlbHluMXByc3AifQ.DRw1llh3YM_HfCOFpSGgHg` ); break;
        case 3: responce1 = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${name[0]}%20${name[1]}%20${name[2]}%2020124.json?access_token=pk.eyJ1IjoiY2FtZWxpYTk3IiwiYSI6ImNsaDU3Y3dodjA2NW4zZXBlbHluMXByc3AifQ.DRw1llh3YM_HfCOFpSGgHg` ); break;
        case 4: responce1 = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${name[0]}%20${name[1]}%20${name[2]}%20${name[3]}%2020124.json?access_token=pk.eyJ1IjoiY2FtZWxpYTk3IiwiYSI6ImNsaDU3Y3dodjA2NW4zZXBlbHluMXByc3AifQ.DRw1llh3YM_HfCOFpSGgHg` ); break;
        case 5: responce1 = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${name[0]}%20${name[1]}%20${name[2]}%20${name[3]}%20${name[4]}%2020124.json?access_token=pk.eyJ1IjoiY2FtZWxpYTk3IiwiYSI6ImNsaDU3Y3dodjA2NW4zZXBlbHluMXByc3AifQ.DRw1llh3YM_HfCOFpSGgHg` ); break;
        case 6: responce1 = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${name[0]}%20${name[1]}%20${name[2]}%20${name[3]}%20${name[4]}%20${name[5]}%2020124.json?access_token=pk.eyJ1IjoiY2FtZWxpYTk3IiwiYSI6ImNsaDU3Y3dodjA2NW4zZXBlbHluMXByc3AifQ.DRw1llh3YM_HfCOFpSGgHg` ); break;
      }

      const place1 = await responce1.json()
      setCoordinate(place1.features[0].center)
    }
    data()
  },[])


  if (TaxiConfirm) {
    const startAfterTenSeconds = () => {
        Swal.fire({
          title: "Prenotazione Confermata",
          text: "A breve sarai a destinazione",
          icon: "success",
          confirmButtonText: "Ottimo!",
          confirmButtonColor: '#31C48D'
        });
    };
    startAfterTenSeconds();
  }

  const handleConfirm = () =>{
    console.log("12")

    setActive(3)
    setTaxiConfirm(true)
  }

  useEffect(() => {
    console.log("11")

    onSetStreet(street)
  }, []);

  useEffect(() => {
    console.log("10")

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
    console.log("1")
    setActive(newValue);
  }

  function handleShowSidebar(value) {
    activeSidebar === 0 ? setActiveSidebar(1) : setActiveSidebar(0);
  }

  function handleSetDestination(value) {
    console.log("2")
    setDestination(value);
  }

  function handleDistance(value){
    console.log("3")

    setDistance(value)
  }

  function handleValueChange2(newValue, data) {
    console.log("4")

    setActive(newValue);
    setDriver(data)
  }

  function handleValueChange3(newValue, data) {    
    console.log("5")


    setTaxiConfirm(false);
    setActive(newValue);
  }

  console.log("homeuser")
  return (
    <div className="container">
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
            <FaArrowLeft size={20}/>
          </div>
        </div>
      )}
      {activeSidebar === 1 && <Sidebar />}
      <div className="container-right">
        {active === 0 && <SearchCard onValueChange={handleValueChange} onShowSidebar={handleShowSidebar} onSetDestination={handleSetDestination} />}
        {active === 1 && <TaxiList onValueChange={handleValueChange2} destination={destination}/>}
        {active === 2 && <TaxiProfileCard onValueChange={handleConfirm} data={driver} destination={destination}/>}
        {TaxiConfirm && <RideTimer onValueChange={handleValueChange3} street={destination} />}
        {active === 4 && <FeedbackCard onValueChange={handleValueChange} data={driver} onSetDestination={setCoordinate}/>}

        {center && active < 1 && <div className="container-map"><MapBoxUser street={center}/></div>}
        {active > 0 && <div className="container-map"><MapBoxUser street={center} destination={coordinate}/></div>}

       
      </div>
    </div>
  );
}
