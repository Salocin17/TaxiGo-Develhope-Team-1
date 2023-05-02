import React from 'react';
import { Navbar } from './navBar';
import "../css/homeUser.css";
import { useState } from 'react';
import { PaymentHistory } from './paymentHistory';

export function History() {
  const [payments, setPayments] = useState([
    { date: '2022-04-01', taxiCompany: 'Yellow Cab', origin: 'JFK Airport', destination: 'Manhattan', price: '$50.00' },
    { date: '2022-04-02', taxiCompany: 'Uber', origin: 'LaGuardia Airport', destination: 'Brooklyn', price: '$35.00' },
    { date: '2022-04-03', taxiCompany: 'Lyft', origin: 'Newark Airport', destination: 'Jersey City', price: '$45.00' },
  ]);

  return (
    <div className='wrapper-home'>
      <Navbar/>
      <PaymentHistory payments={payments} />
    </div>
  );
}
