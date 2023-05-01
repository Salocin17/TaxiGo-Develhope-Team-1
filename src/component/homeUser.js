import React, { useState } from 'react';
import {Sidebar} from './sidebar';
import { MapBox } from './mapBox';
import "../css/homeUser.css";


export function HomeUser() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  return (
    <div>
      <header>
        <nav>
          <button onClick={toggleSidebar}>Apri barra laterale</button>
        </nav>
      </header>
      <main>
        <h1>Benvenuti nella pagina Home</h1>
        <MapBox/>
      </main>
      <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
}