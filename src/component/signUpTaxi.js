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
    console.log(formValues);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="wrapper">

    <div className="container-sign-up">
      <div className="container-logo-sign-up">
        <div className="img-sign-up"></div>
      </div>
      <Link to="/"  style={{textDecoration:"none",color:"white"}}>
        <i class="fa fa-chevron-circle-left" aria-hidden="true"></i><b> Back</b>
        </Link>
        <div className="wrapper-header">
          <Link to="/signUpTaxi">
            <a href="Sign Up" className="underline-link">
              Sign Up
            </a>
          </Link>
          <Link to="/signInTaxi">
            <a href="Sign In">Sign In</a>
          </Link>
        </div>

        <form className="wrapper-form" onSubmit={handleSubmit}>
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
          <button type="submit" className="btn btn-success">
            {" "}
            Sign Up{" "}
          </button>
        </form>
      </div>
    </div>
  );
}