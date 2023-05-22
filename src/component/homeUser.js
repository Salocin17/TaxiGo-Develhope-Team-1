import Sidebar from "./sidebar";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/homeUser.css";
import SearchCard from "./SearchCard";
import TaxiList from "./TaxiList";
import TaxiProfileCard from "./TaxiProfileCard";
import RideTimer from "./RideTimer";
import FeedbackCard from "./FeedbackCard";
import { MapBox } from "./mapBoxUser";
import NewNavbar from "./NewNavbar";
import Swal from "sweetalert2";

const slideInVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

export function HomeUser() {
  const [active, setActive] = useState(0);
  const [activeSidebar, setActiveSidebar] = useState(0);
  const [destination, setDestination] = useState(0);
  
  const [TaxiConfirm, setTaxiConfirm] = useState(false);

  const street = "San Cataldo";

  if (active === 3) {
    const startAfterTenSeconds = () => {
      setTimeout(() => {
        setTaxiConfirm(true);
        Swal.fire({
          title: "Prenotazione Confermata",
          text: "A breve sarai a destinazione",
          icon: "success",
          confirmButtonText: "Ottimo!",
          confirmButtonColor: "#31C48D",
        });
      }, 10000);
    };
    startAfterTenSeconds();
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`http://federicov.ddns.net:3300/api/location/user/${street}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: "change",
      }),
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      console.log(res);
    });
  }, []);

  function handleValueChange(newValue) {
    setActive(newValue);
  }

  function handleShowSidebar(value) {
    activeSidebar === 0 ? setActiveSidebar(1) : setActiveSidebar(0);
  }

  function handleSetDestination(value) {
    setDestination(value);
  }
  return (
    <div className="container">
      <NewNavbar onShowSidebar={handleShowSidebar} />

      {active != 0 && (
        <div
          style={{
            position: "absolute",
            top: "12rem",
            right: "1rem",
            "z-index": "999",
          }}
        >
          <div
            className="d-flex justify-content-center align-items-center rounded-circle bg-white propic shadow"
            style={{ width: "50px", height: "50px" }}
            onClick={() => setActive(active - 1)}
          >
          </div>
        </div>
      )}
      {activeSidebar === 1 && <Sidebar />}
      <div className="container-right">
        {active === 0 && (
          <SearchCard
            onValueChange={handleValueChange}
            onShowSidebar={handleShowSidebar}
            onSetDestination={handleSetDestination}
          />
        )}
        {active === 1 && (
          <TaxiList
            onValueChange={handleValueChange}
            destination={destination}
          />
        )}
        {active === 2 && <TaxiProfileCard onValueChange={handleValueChange} />}
        {active === 3 && TaxiConfirm && (
          <RideTimer onValueChange={handleValueChange} street={street} />
        )}
        {active === 4 && <FeedbackCard onValueChange={handleValueChange} />}

        <div className="container-map">
          <MapBox />
        </div>
      </div>
    </div>
  );
}
