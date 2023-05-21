import "../css/setupGps.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export function SetupGpsUser() {
  return (
    <div className="container-gps-user">
      <div className="container-gps-user-header"></div>
      <div className="container-gps-user-body">
        <h2 style={{ fontSize: "34px", fontWeight: "800" }}>Ciao, prenota </h2>
        <h2 style={{ fontSize: "34px", fontWeight: "800" }}>
          subito il tuo taxi!{" "}
        </h2>
        <button type="submit" class="btn buttonGps">
          <p>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.4165 20V8.57202H0L20 0L11.4165 20Z"
                fill="#31C48D"
              />
            </svg>
            Usa la posizione corrente
          </p>
        </button>
        <Link to="/homeUser" style={{ textDecoration: "none", color: "white" }}>
          <u style={{ color: "#F52D56"}}>
            {" "}
            <h4 style={{ fontSize: "17px" }}>Seleziona manualmente</h4>
          </u>
        </Link>
      </div>
    </div>
  );
}
