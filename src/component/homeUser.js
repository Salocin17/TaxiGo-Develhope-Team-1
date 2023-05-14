import { Navbar } from "./navBar";
import Sidebar from "./sidebar";
import React, {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/homeUser.css";
import SearchCard from "./SearchCard";
import TaxiList from './TaxiList'
import TaxiProfileCard from "./TaxiProfileCard";
import RideTimer from "./RideTimer";
import FeedbackCard from "./FeedbackCard";
import { MapBox } from "./mapBoxUser";


export function HomeUser() {

  const street = "San Cataldo"

  useEffect(() => {

    const token = localStorage.getItem("token")

    fetch(`http://federicov.ddns.net:3300/api/location/user/${street}`, {
      method: 'PATCH',
      body: JSON.stringify({
        title: 'change',
      }),
      headers: {
        'authorization': `Bearer ${token}`,
      }
    }).then(res => {
      console.log(res)
    })

  }, [])

  
  return (
    <div className="container">
      <Sidebar />

      <div className="container-right">
        <Navbar />  
        {/* <SearchCard /> */}
        {/* <TaxiList /> */}
        <TaxiProfileCard/>
        {/* <RideTimer/> */}
        {/* <FeedbackCard/> */}
        <div className="container-map" style={{paddingTop:"3rem", paddingBottom:"3rem"}}>
          <MapBox />
        </div>
      </div>
    </div>
  );
}
