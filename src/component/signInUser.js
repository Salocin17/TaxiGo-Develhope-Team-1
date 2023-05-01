import "../css/signIn.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export function SignInUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [email, setEmail] = useState("");
  const [emailExists, setEmailExists] = useState(false);

  /* useEffect(() => {
    if (email !== "") {
      //API
        .then(response => {
          setEmailExists(response.data.exists);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [email]);*/

  const handleSubmit = (event) => {
    /*event.preventDefault();
    if (!emailExists) {
      // Invia i dati di registrazione al server
    } else {
      // Visualizza un messaggio di errore
    }*/
    event.preventDefault();
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    const data = {
      name: firstName,
      surname: lastName,
      date: dateOfBirth,
      citta: city,
      number: phoneNumber,
      email: email,
      password: password,
    };

    const jsonData = JSON.stringify(data);

    fetch("http://federicov.ddns.net:3300/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: jsonData,
      mode: 'cors',
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });

    console.log(data);
  };

  return (
    <div className="container-sign-in">
      <div className="container-logo-sign-in">
        <div className="img-sign-in"></div>
      </div>
      <div className="wrapper-sign-in">
        <div className="wrapper-header-sign-in">
          <Link to="/signUpUser">
            <a href="Sign Up">Sign Up</a>
          </Link>
          <Link to="/signInUser">
            <a href="Sign In" className="underline-link">
              Sign In
            </a>
          </Link>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="wrapper-form-sign-in">
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
              <div className="col">
                <input
                  type="name"
                  className="form-control"
                  id="city"
                  placeholder="City"
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
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
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your account email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <input
                  type="password"
                  className={`form-control ${
                    password !== confirmPassword ? "is-invalid" : ""
                  }`}
                  id="cofPassword"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
              </div>
            </div>

            <button type="submit" class="btn btn-success">
              Sign In
            </button>
          </div>
        </form>
        <button type="submit" class="btn btn-danger">
          <i class="fab fa-google"></i> Connect with Google
        </button>
      </div>
    </div>
  );
}
