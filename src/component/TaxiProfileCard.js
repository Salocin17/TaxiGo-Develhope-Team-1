import { Card, Button } from "react-bootstrap";
import ProfilePicture from "./ProfileIcon";
import { RiTaxiFill } from "react-icons/ri";
import { BsFillTelephoneFill, BsStarFill } from "react-icons/bs";
import Swal from "sweetalert2";
import React, { useEffect, useState } from 'react';
import io from "socket.io-client";

// const socket = io.connect("http://localhost:3300");

const TaxiProfileCard = ({ onValueChange, data, destination }) => {

  const [request, setRequest] = useState()
  const [status, setStatus] = useState(false)
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    const newSocket = io.connect('http://localhost:3300')
    setSocket(newSocket)

}, [])

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
        console.log(json)

        const id = data._id
    
        socket.emit("join_room", id);
        socket.emit("send_message", { json, id });

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

  useEffect(() => {
    if (request) {
      const token = localStorage.getItem("token")

      const interval = setInterval(() => {
        fetch(`http://localhost:3300/api/accept/${request.request._id}`, {
          method: "GET",
          headers: {
            'authorization': `Bearer ${token}`,
          },

        }).then(res => res.json())
          .then(json => {

            if (json == "accept") {
              console.log(json)
              clearInterval(interval)
              deleteRequest()
              setStatus(true)
            } else if (json === "declire") {
              clearInterval(interval)
              deleteRequest()
              console.log("declire")
            } else {
              console.log("null")
            }

          })
      }, 3000)
    }
  }, [request])

  useEffect(() => {
    if (status) {
      setTimeout(() => {
        onValueChange(3);
      }, 2000)
    }
  }, [status])

  return (

    <div className="fixed-bottom ">
      <Card className="taxi-profile-card">
        <Card.Body className="taxi-profile-card-body">
          <div className="d-flex justify-content-between align-items-center gap-3 mb-3 pt-3 pb-3 taxi-profile-card-head">
            <div className="d-flex justify-content-center align-items-center gap-3">
              <ProfilePicture taxi={true} />
              <div className="d-flex flex-column justify-content-center align-items-start pb-2 taxi-profile-card-feedback">
                <span className="fs-6 fw-semibold">{data.first_name + " " + data.last_name}</span>
                <div className="d-flex justify-content-center align-items-center gap-2">
                  <div className="rounded-circle d-flex align-items-center justify-content-center text-white" style={{ width: "20px", height: "20px", "background-color": "#eccc11" }}>
                    <BsStarFill size={10} className="mr-3" />
                  </div>
                  <small className="text-muted ">Raccomandato</small>
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
                <span className="ml-2 fs-6 fw-semibold">€15.00</span>
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
