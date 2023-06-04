import React, { useState, useEffect } from "react";
import ProfilePicture from "./ProfileIcon";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const TaxiAccount = (props) => {
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [date, setDate] = useState("");
  const [citta, setCitta] = useState("");
  const [cellulare, setCellulare] = useState("");
  const [cap, setCap] = useState("");
  const [email, setEmail] = useState("");

  const [modifiedNome, setModifiedNome] = useState("");
  const [modifiedCognome, setModifiedCognome] = useState("");
  const [modifiedEmail, setModifiedEmail] = useState("");
  const [modifiedCompleanno, setModifiedCompleanno] = useState("");
  const [modifiedTelefono, setModifiedTelefono] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`http://localhost:3300/api/driver`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setId(data._id);
        setNome(data.first_name);
        setCognome(data.last_name);
        setEmail(data.email);
        setCellulare(data.number);
        setCitta(data.city);
        setCap(data.province);
        setDate(data.birth);
      });
  }, []);

  const saveChanges = () => {
    setNome(modifiedNome?modifiedNome:nome);
    setCognome(modifiedCognome?modifiedCognome:cognome);
    setEmail(modifiedEmail?modifiedEmail:email);
    setDate(modifiedCompleanno?modifiedCompleanno:date);
    setCellulare(modifiedTelefono?modifiedTelefono:cellulare);

    const token = localStorage.getItem("token");
    fetch(`http://localhost:3300/api/update/driver`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        first_name: modifiedNome,
        last_name: modifiedCognome,
        email: modifiedEmail,
        number: modifiedTelefono,
        birth: modifiedCompleanno,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    setModifiedNome("");
    setModifiedCognome("");
    setModifiedEmail("");
    setModifiedCompleanno("");
    setModifiedTelefono("");
  };

  function handleClick() {
    navigate(`/homeTaxi/${props.street}`)
  }

  return (
    <div className="wrapper-account">
      <div className="container-nav">
        <div className="nav-back">
        <i class="fa-solid fa-chevron-left fa-lg" onClick={handleClick}></i>
        </div>
        <div className="nav-title">
          <div className="nav-text-account">
            <h3><b>Il mio account</b></h3>
          </div>
          <div className="nav-icon">
            <ProfilePicture
              taxi={true}
            />
          </div>
        </div>
      </div>

      <div className="container-account" style={{ width: "100%" }}>
        <section>
          <div class="container-profile py-2" style={{ minHeight: "0%" }}>
            <div class="row" style={{ justifyContent: "center" }}>
              <div
                class="col"
                style={{ marginLeft: "1rem", marginRight: "1rem" }}
              >
                <div class="card mb-4">
                  <div class="card-body">
                    <div class="row" style={{ alignItems: "center" }}>
                      <div class="col-auto">
                        <p class="mb-0">Name</p>
                      </div>
                      <div class="col">
                        {modifiedNome !== "" ? (
                          <input
                            style={{ width: "90%" }}
                            type="text"
                            value={modifiedNome}
                            onChange={(e) => setModifiedNome(e.target.value)}
                          />
                        ) : (
                          <p class="text-muted mb-0">
                            {nome}
                          </p>
                        )}
                      </div>
                      <div class="col-auto">
                        {modifiedNome !== "" ? (
                          <button
                            type="button"
                            class="btn btn-success"
                            onClick={saveChanges}
                          >
                            🗸
                          </button>
                        ) : (
                          <i
                            class="fa-solid fa-pencil"
                            onClick={() => setModifiedNome(nome)}
                          ></i>
                        )}
                      </div>
                    </div>
                    <hr />
                    <div class="row" style={{ alignItems: "center" }}>
                      <div class="col-auto">
                        <p class="mb-0">Cognome</p>
                      </div>
                      <div class="col">
                        {modifiedCognome !== "" ? (
                          <input
                            style={{ width: "90%" }}
                            type="text"
                            value={modifiedCognome}
                            onChange={(e) => setModifiedCognome(e.target.value)}
                          />
                        ) : (
                          <p class="text-muted mb-0">
                            {cognome}
                          </p>
                        )}
                      </div>
                      <div class="col-auto">
                        {modifiedCognome !== "" ? (
                          <button
                            type="button"
                            class="btn btn-success"
                            onClick={saveChanges}
                          >
                            🗸
                          </button>
                        ) : (
                          <i
                            class="fa-solid fa-pencil"
                            onClick={() => setModifiedCognome(cognome)}
                          ></i>
                        )}
                      </div>
                    </div>
                    <hr />
                    <div class="row" style={{ alignItems: "center" }}>
                      <div class="col-auto">
                        <p class="mb-0">Email</p>
                      </div>
                      <div class="col">
                        {modifiedEmail !== "" ? (
                          <input
                            style={{ width: "90%" }}
                            type="text"
                            value={modifiedEmail}
                            onChange={(e) => setModifiedEmail(e.target.value)}
                          />
                        ) : (
                          <p class="text-muted mb-0">
                            {email}
                          </p>
                        )}
                      </div>
                      <div class="col-auto">
                        {modifiedEmail !== "" ? (
                          <button
                            type="button"
                            class="btn btn-success"
                            onClick={saveChanges}
                          >
                            🗸
                          </button>
                        ) : (
                          <i
                            class="fa-solid fa-pencil"
                            onClick={() => setModifiedEmail(nome)}
                          ></i>
                        )}
                      </div>
                    </div>
                    <hr />
                    <div class="row" style={{ alignItems: "center" }}>
                      <div class="col-auto">
                        <p class="mb-0">Compleanno</p>
                      </div>
                      <div class="col">
                        {modifiedCompleanno !== "" ? (
                          <input
                            style={{ width: "90%" }}
                            type="text"
                            value={modifiedCompleanno}
                            onChange={(e) => setModifiedCompleanno(e.target.value)}
                          />
                        ) : (
                          <p class="text-muted mb-0">
                            {date}
                          </p>
                        )}
                      </div>
                      <div class="col-auto">
                        {modifiedCompleanno !== "" ? (
                          <button
                            type="button"
                            class="btn btn-success"
                            onClick={saveChanges}
                          >
                            🗸
                          </button>
                        ) : (
                          <i
                            class="fa-solid fa-pencil"
                            onClick={() => setModifiedCompleanno(date)}
                          ></i>
                        )}
                      </div>
                    </div>
                    <hr />
                    <div class="row" style={{ alignItems: "center" }}>
                      <div class="col-auto">
                        <p class="mb-0">Telefono</p>
                      </div>
                      <div class="col">
                        {modifiedTelefono !== "" ? (
                          <input
                            style={{ width: "90%" }}
                            type="text"
                            value={modifiedTelefono}
                            onChange={(e) => setModifiedTelefono(e.target.value)}
                          />
                        ) : (
                          <p class="text-muted mb-0">
                            {cellulare}
                          </p>
                        )}
                      </div>
                      <div class="col-auto">
                        {modifiedTelefono !== "" ? (
                          <button
                            type="button"
                            class="btn btn-success"
                            onClick={saveChanges}
                          >
                            🗸
                          </button>
                        ) : (
                          <i
                            class="fa-solid fa-pencil"
                            onClick={() => setModifiedTelefono(cellulare)}
                          ></i>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
