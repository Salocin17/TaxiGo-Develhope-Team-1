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
<<<<<<< HEAD
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

        <div className="wrapper-form-sign-in">
        <div class="row">
            <div class="col-4">
            <label for="licenza"><b style={{color: "red"}}>*</b> N. Licenza</label>
              <input
                type="text"
                class="form-control"
                id="licenza"
              />
            </div>
          </div>
          <div class="row">
          <div class="col">
          <label for="nome"><b style={{color: "red"}}>*</b> Nome</label>
              <input
                type="name"
                class="form-control"
                id="nome"
              />
            </div>
            <div class="col">
            <label for="cognome"><b style={{color: "red"}}>*</b> Cognome</label>
              <input
                type="cognome"
                class="form-control"
                id="cognome"
              />
            </div>
            <div className="col-3">
            <label for="gender"><b style={{color: "red"}}>*</b> Sesso</label>
              <select class="form-select" aria-label="Default select example">
                <option value="female">Femmina</option>
                <option value="male">Maschio</option>
              </select>
            </div>
          </div>

          <div class="row">
            <div class="col-8">
            <label for="date"><b style={{color: "red"}}>*</b> Data di nascita</label>
              <input type="date" class="form-control" id="date" />
            </div>
            <div class="col-4">
            <label for="prov"><b style={{color: "red"}}>*</b> Provincia</label>
              <input
                type="text"
                class="form-control"
                id="prov"
              />
            </div>
          </div>
          <div class="row">
            <div class="col">
            <label for="inidirizzo">Inidirizzo</label>
              <input
                type="name"
                class="form-control"
                id="inidirizzo"
              />
            </div>
            <div class="col-2">
            <label for="cognome">CAP</label>
              <input
                type="name"
                class="form-control"
                id="via"
              />
            </div>
            <div class="col">
            <label for="cognome">Cellulare</label>
              <input
                type="telephone"
                class="form-control"
                id="tel"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-12">
            <label for="email"><b style={{color: "red"}}>*</b> Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
              />
            </div>
          </div>
          <div class="row">
            <div class="col">
            <label for="prov"><b style={{color: "red"}}>*</b> Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <div class="col">
            <label for="prov"><b style={{color: "red"}}>*</b> Conferma password</label>
              <input
                type="password"
                class="form-control"
                id="cofPassword"
              />
          </div>
          </div>
          <label for="prov" style={{color: "red", fontSize: "0.7rem"}}>* I campi contrassegnati sono obbligatori</label>

          <button type="submit" class="btn btn-success">
            Sign In
          </button>
        </div>

        <button type="submit" class="btn btn-danger">
          <i class="fab fa-google"></i> Connect with Google
        </button>
      </div>
=======
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
>>>>>>> f689784a6cbb975618d04eecbd8c8f0d495d66f1
    </div>
  );
}