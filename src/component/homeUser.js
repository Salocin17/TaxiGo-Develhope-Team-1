import React from 'react';
import { MapBox } from './mapBox';
import { Navbar } from './navBar';
import "../css/homeUser.css";


export function HomeUser() {


  return (
    <div className='wrapper-home'>
      <Navbar/>
      <main>
        <MapBox/>
      </main>
    </div>
  );
}