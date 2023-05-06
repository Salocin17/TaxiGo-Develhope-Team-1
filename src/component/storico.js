import React, { useState }  from 'react';
import { Navbar } from "./navBar";
import Sidebar from "./sidebar";
import "../css/homeUser.css";
import "../css/storico.css";
import { PaymentHistory } from './paymentHistory';

export function Storico() {
  const [payments, setPayments] = useState([
    { date: '01-04-2022', taxiCompany: 'Yellow Cab', origin: 'JFK Airport', destination: 'Manhattan', price: '$50.00', departureTime: '10:00 a.m', arrivalTime: '13:09 p.m' },
    { date: '12-09-2021', taxiCompany: 'Uber', origin: 'LaGuardia Airport', destination: 'Brooklyn', price: '$35.00', departureTime: '04:00 a.m', arrivalTime: '10:34 p.m'  },
    { date: '23-12-2019', taxiCompany: 'Lyft', origin: 'Newark Airport', destination: 'Jersey City', price: '$45.00' , departureTime: '15:00 p.m', arrivalTime: '22:15 p.m' },
  ]);

  return (
    <div className="container">
    <Sidebar />

    <div className="container-right">
      <Navbar />
    <div className="container-box">
      <PaymentHistory payments={payments} />
    </div>
    </div>
</div>
  );
}
