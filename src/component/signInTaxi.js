import "../css/signIn.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export function SignInTaxi() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [licence, setLicence] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    console.log(`
      First Name: ${firstName}
      Last Name: ${lastName}
      Date of Birth: ${dateOfBirth}
      Email: ${email}
      N. licence: ${licence}
      Phone Number: ${phoneNumber}
      Password: ${password}
      Confirm Password: ${confirmPassword}
    `);
  
  };

  return (
    <div className="container-sign-in">
      <div className="container-logo-sign-in">
        <div className="img-sign-in"></div>
      </div>
      <div className="wrapper-sign-in">
        <div className="wrapper-header-sign-in">
          <Link to="/signUpTaxi">
            <a href="Sign Up">Sign Up</a>
          </Link>
          <Link to="/signInTaxi">
            <a href="Sign In" className="underline-link">
              Sign In
            </a>
          </Link>
        </div>

        <form className="wrapper-form-sign-in" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <input
                type="name"
                className="form-control"
                id="firstName"
                placeholder="First name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="lastName"
                className="form-control"
                id="lastName"
                placeholder="Last name"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <input
                type="date"
                className="form-control"
                id="date"
                placeholder="Date of birth"
                value={dateOfBirth}
                onChange={(event) => setDateOfBirth(event.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Your account email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <input
                type="name"
                className="form-control"
                id="licence"
                placeholder="Valid licence"
                value={licence}
                onChange={(event) => setLicence(event.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="telephone"
                className="form-control"
                id="tel"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <input
                type="password"
                className={`form-control ${password !== confirmPassword ? 'is-invalid' : ''}`}
                id="cofPassword"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-success">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}