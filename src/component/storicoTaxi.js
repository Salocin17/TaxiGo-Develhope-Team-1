import React, { useState, useEffect }  from 'react';
import { Navbar } from "./navBar";
import Sidebar from "./sidebar";
import "../css/homeUser.css";
import "../css/storico.css";
import { PaymentHistory } from './paymentHistory';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export function StoricoTaxi() {
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
    }).then((response) => response.json())
    .then((data) => {
      setUsername(data.last_name);       
      setName(data.first_name); 

    })
  }, []);

function handleDateChange(date) {
  setSelectedDate(date);
}

  const [payments, setPayments] = useState([
    { date: '2023-05-07', taxiCompany: 'Yellow Cab', origin: 'JFK Airport', destination: 'Manhattan', price: '50.00', departureTime: '10:00 a.m', arrivalTime: '13:09 p.m' },
    { date: '2023-04-22', taxiCompany: 'Uber', origin: 'LaGuardia Airport', destination: 'Brooklyn', price: '35.00', departureTime: '04:00 a.m', arrivalTime: '10:34 p.m'  },
    { date: '2023-03-10', taxiCompany: 'Lyft', origin: 'Newark Airport', destination: 'Jersey City', price: '45.00' , departureTime: '15:00 p.m', arrivalTime: '22:15 p.m' },
  ]);

  return (
    <div className="container">
    <Sidebar />

    <div className="container-right">
      <Navbar name={name} username={username} />
    <div className="container-box">
    <div className="container-box-nav">
  <h2>Storico</h2>
  <DatePicker
    selected={selectedDate}
    onChange={handleDateChange}
    dateFormat="yyyy-MM-dd"
    isClearable
    placeholderText="Select a date"
   />
</div>
<PaymentHistory payments={payments} selectedDate={selectedDate} />
    </div>
    </div>
</div>
  );
}
