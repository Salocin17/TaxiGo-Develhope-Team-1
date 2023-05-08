import React from "react";
import { Navbar } from "./navBar";
import TaxiSidebar from "./TaxiSidebar";

export const TaxiAccount = () => {
  return (
    <div className="container">
      <TaxiSidebar />

      <div className="container-right">
        <Navbar />
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
                        <h5 class="my-3">John Smith</h5>
                        <p class="text-muted mb-1">ID User</p>
                        <p class="text-muted mb-4">
                          Bay Area, San Francisco, CA
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
                            <p class="text-muted mb-0">Johnatan Smith</p>
                          </div>
                        </div>
                        <hr />
                        <div class="row">
                          <div class="col-sm-3">
                            <p class="mb-0">Email</p>
                          </div>
                          <div class="col-sm-9">
                            <p class="text-muted mb-0">example@example.com</p>
                          </div>
                        </div>
                        <hr />
                        <div class="row">
                          <div class="col-sm-3">
                            <p class="mb-0">Phone</p>
                          </div>
                          <div class="col-sm-9">
                            <p class="text-muted mb-0">(097) 234-5678</p>
                          </div>
                        </div>
                        <hr />
                        <div class="row">
                          <div class="col-sm-3">
                            <p class="mb-0">Date of birth</p>
                          </div>
                          <div class="col-sm-9">
                            <p class="text-muted mb-0">01/01/2000</p>
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
                              Bay Area, San Francisco, CA
                            </p>
                          </div>
                        </div>
                        <hr />
                        <div class="row">
                          <div class="col-sm-3">
                            <p class="mb-0">Password</p>
                          </div>
                          <div class="col-sm-9">
                            <p class="text-muted mb-0">Password00!</p>
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
