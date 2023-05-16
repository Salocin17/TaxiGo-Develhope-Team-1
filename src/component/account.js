import React, { useState, useEffect } from "react";
import { Navbar } from "./navBar";
import Sidebar from "./sidebar";

export const Account = () => {
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [date, setDate] = useState("");
  const [citta, setCitta] = useState("");
  const [cellulare, setCellulare] = useState("");
  const [cap, setCap] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`http://localhost:3300/api/user`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then((response) => response.json())
    .then((data) => {
      console.log(data)
      setId(data._id);
      setNome(data.first_name);       
      setCognome(data.last_name);
      setEmail(data.email);  
      setCellulare(data.number);
      setCitta(data.city)
      setCap(data.province)
      setDate(data.birth)

    })
  }, []);

  return (
    <div className="container">
      <Sidebar />

      <div className="container-right">
        <Navbar name={nome} username={cognome} />
        <div className="container-account" style={{ width: "100%" }}>
          <section>
            <div class="container-profile py-2" style={{ minHeight: "0%" }}>
              <div class="row" style={{ minWidth: "100%" }}>
                <div class="col"></div>
                <div class="col-lg-7">
                  <div class="row-md-4" style={{ minWidth: "100%" }}>
                    <div
                      class="card"
                      style={{ backgroundColor: "transparent", border: "none" }}
                    >
                      <div class="card-body text-center">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                          alt="avatar"
                          class="rounded-circle img-fluid"
                          style={{ width: "150px" }}
                        />
                        <h5 class="my-3">{nome}</h5>
                        <p class="text-muted mb-1">ID: {id}</p>
                        <p class="text-muted mb-4">
                          {citta} - {cap}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="row-lg-8">
                    <div class="card mb-4">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-sm-3">
                            <p class="mb-0">Full Name</p>
                          </div>
                          <div class="col-sm-9">
                            <p class="text-muted mb-0">{nome} {cognome}</p>
                          </div>
                        </div>
                        <hr />
                        <div class="row">
                          <div class="col-sm-3">
                            <p class="mb-0">Email</p>
                          </div>
                          <div class="col-sm-9">
                            <p class="text-muted mb-0">{email}</p>
                          </div>
                        </div>
                        <hr />
                        <div class="row">
                          <div class="col-sm-3">
                            <p class="mb-0">Phone</p>
                          </div>
                          <div class="col-sm-9">
                            <p class="text-muted mb-0">{cellulare}</p>
                          </div>
                        </div>
                        <hr />
                        <div class="row">
                          <div class="col-sm-3">
                            <p class="mb-0">Date of birth</p>
                          </div>
                          <div class="col-sm-9">
                            <p class="text-muted mb-0">{date}</p>
                          </div>
                        </div>
                        <hr />
                        <div class="row">
                          <div class="col-sm-3">
                            <p class="mb-0">Place of birth</p>
                          </div>
                          <div class="col-sm-9">
                            <p class="text-muted mb-0">Torino</p>
                          </div>
                        </div>
                        <hr />
                        <div class="row">
                          <div class="col-sm-3">
                            <p class="mb-0">CF</p>
                          </div>
                          <div class="col-sm-9">
                            <p class="text-muted mb-0">AAABBB09E49C345O</p>
                          </div>
                        </div>
                        <hr />
                        <div class="row">
                          <div class="col-sm-3">
                            <p class="mb-0">Address</p>
                          </div>
                          <div class="col-sm-9">
                            <p class="text-muted mb-0">
                              {citta}, {cap}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col"></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
