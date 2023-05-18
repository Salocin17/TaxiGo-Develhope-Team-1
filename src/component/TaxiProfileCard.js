import { Card, Button } from "react-bootstrap";
import ProfilePicture from "./ProfileIcon";
import '../css/taxiprofilecard.css';
import { FaTaxi, FaArrowLeft } from "react-icons/fa";
import Swal from "sweetalert2";
import React, {useEffect, useState} from 'react';

const TaxiProfileCard = ({onValueChange}) => {

  

const handleConfirm = () => {
  Swal.fire({
    title: "Prenotazione Confermata",
    text: "Il tuo Taxi saràa presto da te",
    icon: "success",
    confirmButtonText: "Ottimo!",
  });

  const token = localStorage.getItem("token")
    
  fetch("http://localhost:3300/api/request", {
    method: "POST",
    headers: {
        'authorization': `Bearer ${token}`,
    },
    body: {
      destination: "destinazione",
      _id: "taxi id"
    }
   
  }).then(res => res.json())
      .then(json => console.log(json))


  onValueChange(3);
}

  return (
    
    <div className="fixed-bottom ">
      <Card className="taxi-profile-card">
        <Card.Body>
          <div className="d-flex justify-content-center align-items-center gap-3 mb-3 pb-3 taxi-profile-card-head">
              <FaArrowLeft size={20} className="ms-4 position-absolute start-0" onClick={() => onValueChange(1)} /> 
              <ProfilePicture  Propic={'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'}/>
              <span>John Doe</span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <FaTaxi size={40} className="mr-3"/>
            <div>
              <div>
                <h6 className="mb-1 fs-5 fw-bold">Distanza</h6>
                <span className="ml-2">0.2 Km</span>
              </div>
            </div>
            <div>
              <div>
                <h6 className="mb-1 fs-5 fw-bold">Tempo</h6>
                <span className="ml-2">2 min</span>
              </div>
            </div>
            <div>
              <div>
                <h6 className="mb-1 fs-5 fw-bold">Prezzo</h6>
                <span className="ml-2">€25.00</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <Button variant="success" onClick={handleConfirm}>Conferma</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TaxiProfileCard;
