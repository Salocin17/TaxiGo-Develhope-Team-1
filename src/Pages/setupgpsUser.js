import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useEffect, useState } from "react";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function SetupGpsUser() {
  const [streets, setStreets] = useState();
  const [street, setStreet] = useState([]);
  const [streetInput, setStreetInput] = useState('Viale%20Lunigiana');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isManualSelected, setIsManualSelected] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3300/api/getStreet`)
      .then((result) => result.json())
      .then((json) => setStreets(json));
  }, [street]);

  const handleClick = (e) => {
    const token = localStorage.getItem("token");
    fetch(`http://localhost:3300/api/location/user/${streetInput}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: "change",
      }),
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      navigate(`/homeUser/${streetInput}`);
    });
  };

  const handleChange = (e) => {
    setStreetInput(e.target.value);
    const data = [];
    streets.street.map((el) => {
      if (el.name.includes(e.target.value)) {
        data.push(el.name);
      }
    });
    setStreet(data);
    setIsInputFocused(true);
  };

  const setInputClick = (e) => {
    setStreetInput(e);
  };

  const handleManualSelect = () => {
    setIsManualSelected(true);
  };

  const handlePosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {});
    const token = localStorage.getItem("token");
    fetch(`http://localhost:3300/api/location/user/${streetInput}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: "change",
      }),
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      navigate(`/homeUser/${streetInput}`);
    });
  }

  return (
    <div className="container-gps-user">
      <div className="container-gps-user-header"></div>
      <div className="container-gps-user-body">
        <h2 style={{ fontSize: "34px", fontWeight: "800" }}>Ciao, prenota </h2>
        <h2 style={{ fontSize: "34px", fontWeight: "800" }}>
          subito il tuo taxi!{" "}
        </h2>
        <button type="submit" class="btn buttonGps" onClick={handlePosition}>
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

        <div className="container-gps-user">
          <button
            style={{
              textDecoration: "none",
              color: "white",
              backgroundColor: "transparent",
              border: "0px",
              borderColor: "transparent",
              display: isManualSelected ? "none" : "block",
            }}
            onClick={handleManualSelect}
          >
            <u style={{ color: "#F52D56" }}>
              <h4 style={{ fontSize: "17px" }}>Seleziona manualmente</h4>
            </u>
          </button>

          {isManualSelected && (
            <div className="container-manual">
              <div className="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">
                    🏠
                  </span>
                </div>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Scegli la tua posizione"
                  autoFocus
                  onChange={handleChange}
                  value={streetInput}
                />
                <FontAwesomeIcon
                  icon={faArrowCircleRight}
                  onClick={handleClick}
                  style={{ height: "2rem", color: "#31C48D" }}
                />
              </div>
              <div
                style={{
                  maxHeight: "200px",
                  display: isInputFocused ? "block" : "none",
                  overflowY: "auto",
                }}
              >
                {street.map((el, index) => (
                  <div
                    className="input-hover"
                    value={index}
                    onClick={() => setInputClick(el)}
                    style={{ cursor: "pointer" }}
                  >
                    {el}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
