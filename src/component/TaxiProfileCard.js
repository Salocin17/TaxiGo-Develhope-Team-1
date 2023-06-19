import { Card, Button } from "react-bootstrap";
import ProfilePicture from "./ProfileIcon";
import { RiTaxiFill } from "react-icons/ri";
import { BsFillTelephoneFill, BsStarFill } from "react-icons/bs";
import Swal from "sweetalert2";
import React, { useEffect, useState } from 'react';
import { useDistance } from "../hooks/Distance";
import { useParams } from "react-router-dom";

const TaxiProfileCard = ({ onValueChange, data, destination, socket}) => {

  const [request, setRequest] = useState()
  const {street} = useParams()
  const distance = useDistance("", street, true, data.street)
  const distanceRoute = useDistance(street, destination)

  const feedbackValue = [5, 4, 5, 5, 4]

  
  const sum = feedbackValue.reduce((acc, num) => acc + num, 0);
  const average = sum / feedbackValue.length;
  let recommend = '';
  if (average >= 3) {
    recommend = 'raccomandato'
  } else { recommend = 'non raccomandato'}

  
  
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
        const id = data._id
        socket.emit("join_room", {id});
        socket.emit("send_message", { json, id});
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
    })
  }

  useEffect(()=>{
    if(socket && request){ 
      socket.on("receive", (data) => {
        if(data.data._id === request.request._id){
          onValueChange("accept", data.data.user._id);
          const id = data.data.user._id
          console.log(id)

          
          socket.emit("unsubscribe", request.request.taxiDriver)
          socket.emit("join_room", {id});
        }else{
          socket.emit("unsubscribe", request.request.taxiDriver)
          onValueChange("declined");
        }
        deleteRequest()
      });
    }
  },[request])

 return (
    distance && distanceRoute &&
    <div className="fixed-bottom ">
      <Card className="taxi-profile-card">
        <Card.Body className="taxi-profile-card-body">
          <div className="d-flex justify-content-between align-items-center gap-3 mb-3 pt-3 pb-3 taxi-profile-card-head">
            <div className="d-flex justify-content-center align-items-center gap-3">
              <ProfilePicture taxi={true} />
              <div className="d-flex flex-column justify-content-center align-items-start pb-2 taxi-profile-card-feedback">
                <span className="fs-6 fw-semibold">{data.first_name + " " + data.last_name}</span>
                <div className="d-flex justify-content-center align-items-center gap-1">
                   <span className="fw-bold">{average}</span>
                  <div className="rounded-circle d-flex align-items-center justify-content-center text-white" style={{ width: "20px", height: "20px", "background-color": "#eccc11" }}>
                    <BsStarFill size={10} className="mr-3" />
                  </div>
                  <small className="text-muted">{recommend}</small>
                </div>
              </div>
            </div>
            <div className="rounded-circle d-flex align-items-center bg-success justify-content-center text-white" style={{ width: "40px", height: "40px" }}>
              <BsFillTelephoneFill size={20} className="mr-3" />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center px-4">
            <div className="rounded-circle d-flex align-items-center bg-success justify-content-center text-white" style={{ width: "40px", height: "40px" }}>
              <RiTaxiFill size={25} className="mr-3" />
            </div>
            <div>
              <div>
                <h6 className="mb-1 fs-6 text-muted">Distanza</h6>
                <span className="ml-2 fs-6 fw-semibold">{distance} Km</span>
              </div>
            </div>
            <div>
              <div>
                <h6 className="mb-1 fs-6 text-muted">Tempo</h6>
                <span className="ml-2 fs-6 fw-semibold">{(distance / 0.8).toFixed(0)} min</span>
              </div>
            </div>
            <div>
              <div>
                <h6 className="mb-1 fs-6 text-muted">Prezzo</h6>
                <span className="ml-2 fs-6 fw-semibold">€{3 + 1.15*distanceRoute}</span>
               </div>
            </div>
          </div>
          <div className="text-center mt-4 pb-3">
            <Button variant="success" onClick={handleConfirm}>Conferma</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TaxiProfileCard;
