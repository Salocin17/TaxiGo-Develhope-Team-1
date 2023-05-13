import React, { useState } from "react";
import "../css/signUp.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

export function SignUpTaxi() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const data = {
      type: false,
      email: formValues.email,
      password: formValues.password,
    }

    fetch("http://federicov.ddns.net:3300/api/auth/login", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(res => {
      res.json().then(json => {
        localStorage.setItem("token", json.token);
      })
    })




  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="wrapper-signUp">

    <div className="container-sign-up">
      <div className="container-logo-sign-up">
        <div className="img-sign-up"></div>
      </div>
      <Link to="/"  style={{textDecoration:"none",color:"white"}}>
        <i class="fa fa-chevron-circle-left" aria-hidden="true"></i><b> Back</b>
        </Link>
        <div className="wrapper-header-sign-up">
          <Link to="/signUpTaxi">
            <a href="Sign Up" className="underline-link">
              Sign Up
            </a>
          </Link>
          <Link to="/signInTaxi">
            <a href="Sign In">Sign In</a>
          </Link>
        </div>

        <form className="wrapper-form-sign-up" onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faUser} />
              </span>
            </div>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faLock} />
              </span>
            </div>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          
        {/* <Link to="/homeTaxi"> */}
          <button type="submit" className="btn btn-success" style={{width: '100%'}}>
            {" "}
            Sign Up{" "}
          </button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
}