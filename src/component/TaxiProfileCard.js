import { Card, Button } from "react-bootstrap";
import ProfilePicture from "./ProfileIcon";
import '../css/taxiprofilecard.css';
import { FaTaxi } from "react-icons/fa";
import Swal from "sweetalert2";
import React, {useEffect, useState} from 'react';

const TaxiProfileCard = ({onValueChange, data, destination}) => {

  const [request, setRequest] = useState()
  const [status, setStatus] = useState(false) 

  const handleConfirm = () => {
    Swal.fire({
      title: "Prenotazione in attesa",
      text: `Attendi la conferma di ${data.first_name} `,
      icon: "info",
      confirmButtonText: "Ok",
      confirmButtonColor: '#31C48D'
    })

  const token = localStorage.getItem("token")
    
  fetch("http://localhost:3300/api/requests", {
    method: "POST",
    headers: {
        'authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
      destination: destination,
      id: data._id
    })
   
  }).then(res => res.json())
    .then(json => {
      setRequest(json)
    })
  }

  const deleteRequest = () => {
    const token = localStorage.getItem("token")

    fetch(`http://localhost:3300/api/delete`, {
      method: "PATCH",
      headers: {
        'authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: request.request._id,
      }), 
    }).then(res => res.json())
      .then(json => {   
        console.log(json)
      })
  }

useEffect(()=>{
  if(request){
    const token = localStorage.getItem("token")

    const interval = setInterval(()=>{
      fetch(`http://localhost:3300/api/accept/${request.request._id}`, {
      method: "GET",
      headers: {
          'authorization': `Bearer ${token}`,
      },
    
    }).then(res => res.json())
      .then(json => {

        if(json == "accept"){
          console.log(json)
          clearInterval(interval)
          deleteRequest()
          setStatus(true)
        }else if(json === "declire"){
          clearInterval(interval)
          deleteRequest()
          console.log("declire")
        }else {
          console.log("null")
        }

      })
    }, 3000)
  }
},[request])

useEffect(()=>{
  if(status){
    setTimeout(()=>{
      onValueChange(3);
    },2000)  
  }
},[status])

  return (
    
    <div className="fixed-bottom ">
      <Card className="taxi-profile-card">
        <Card.Body>
          <div className="d-flex justify-content-center align-items-center gap-3 mb-3 pb-3 taxi-profile-card-head">
              <ProfilePicture  Propic={'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'}/>
              <span>{data.first_name+" "+data.last_name}</span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="rounded-circle d-flex align-items-center justify-content-center bg-success text-white" style={{ width: "40px", height: "40px" }}>
              <FaTaxi size={20} className="mr-3" />
            </div>
            <div>
              <div>
                <h6 className="mb-1 fs-6 text-muted">Distanza</h6>
                <span className="ml-2 fs-6 fw-semibold">0.5 Km</span>
              </div>
            </div>
            <div>
              <div>
                <h6 className="mb-1 fs-6 text-muted">Tempo</h6>
                <span className="ml-2 fs-6 fw-semibold">2 min</span>
              </div>
            </div>
            <div>
              <div>
                <h6 className="mb-1 fs-6 text-muted">Prezzo</h6>
                <span className="ml-2 fs-6 fw-semibold">€25.00</span>
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
