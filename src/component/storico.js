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


  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`http://localhost:3300/api/route`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.length)
        setPayments(data)
      });
  }, []);


  function handleDateChange(date) {
    setSelectedDate(date);
  }

  function handleClick() {
    navigate(`/homeUser/${props.street}`)
  }

  const [payments, setPayments] = useState([]);

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
        {payments && payments.length>0 &&
        <PaymentHistory payments={payments} selectedDate={selectedDate} />
        }
      </div>
    </div>
  );
}
