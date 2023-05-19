import React, { useState, useEffect } from "react";
import "../css/homeUser.css";
import "../css/storico.css";
import { PaymentHistory } from "./paymentHistory";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

export function Storico() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

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

  const [payments, setPayments] = useState([
    {
      date: "2023-05-07",
      taxiCompany: "Yellow Cab",
      origin: "JFK Airport",
      destination: "Manhattan",
      price: "50.00",
      departureTime: "10:00 a.m",
      arrivalTime: "13:09 p.m",
      state: "Confermato",
    },
    {
      date: "2023-04-22",
      taxiCompany: "Uber",
      origin: "LaGuardia Airport",
      destination: "Brooklyn",
      price: "35.00",
      departureTime: "04:00 a.m",
      arrivalTime: "10:34 p.m",
      state: "Cancellato",
    },
    {
      date: "2023-03-10",
      taxiCompany: "Lyft",
      origin: "Newark Airport",
      destination: "Jersey City",
      price: "45.00",
      departureTime: "15:00 p.m",
      arrivalTime: "22:15 p.m",
      state: "Completato",
    },
  ]);

  return (
    <div className="wrapper-storico">
      <div className="container-nav-storico">
        <div className="nav-back">
          <Link
            to="/homeUser"
            style={{ textDecoration: "none", color: "white" }}
          >
            <i class="fa-solid fa-chevron-left fa-lg"></i>
          </Link>
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
