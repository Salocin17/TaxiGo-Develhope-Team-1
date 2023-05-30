import React, { useState, useEffect } from "react";
import { PaymentHistory } from "./paymentHistory";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Storico(props) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`http://localhost:3300/api/user`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUsername(data.last_name);
        setName(data.first_name);
      });
  }, []);

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  function handleClick() {
    navigate(`/homeUser/${props.street}`)
  }

  const [payments, setPayments] = useState([
    {
      date: "2023-05-07",
      taxiCompany: "Yellow Cab",
      origin: "Viale Lunigiana",
      destination: "Via Spoleto",
      price: "50.00",
      departureTime: "10:00",
      arrivalTime: "10:20",
      state: "Confermato",
    },
    {
      date: "2023-04-22",
      taxiCompany: "Uber",
      origin: "Via Roma",
      destination: "Via Lesa",
      price: "35.00",
      departureTime: "08:00",
      arrivalTime: "08:15",
      state: "Cancellato",
    },
    {
      date: "2023-03-10",
      taxiCompany: "Lyft",
      origin: "Via Tonale",
      destination: "Via Delia",
      price: "45.00",
      departureTime: "15:00",
      arrivalTime: "15:15",
      state: "Completato",
    },
  ]);

  return (
    <div className="wrapper-storico">
      <div className="container-nav-storico">
        <div className="nav-back">
            <i class="fa-solid fa-chevron-left fa-lg" onClick={handleClick}></i>
        </div>
        <div className="nav-title-storico">
          <div className="nav-text-storico">
            Storico
          </div>
          <div className="nav-icon">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd"
              isClearable
              placeholderText="Select a date"
              className="dataPicker"
            />
          </div>
        </div>
        
      </div>

      <div className="container-storico">
        <PaymentHistory payments={payments} selectedDate={selectedDate} />
      </div>
    </div>
  );
}
