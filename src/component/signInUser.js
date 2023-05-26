import "../css/signIn.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export function SignInUser() {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [date, setDate] = useState("");
  const [prov, setProv] = useState("");
  const [citta, setCitta] = useState("");
  const [gender, setGender] = useState("");
  const [cellulare, setCellulare] = useState("");
  const [cap, setCap] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showSuccessSnackbar, setShowSuccessSnackbar] = useState(false);
  const [showErrorSnackbar, setShowErrorSnackbar] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    const data = {
      email,
      password,
      first_name: nome,
      last_name: cognome,
      birth: date,
      city: citta,
      province: cap,
      number: cellulare,
    };

 /* useEffect(() => {
      let timeout;
      if (showSuccessSnackbar || showErrorSnackbar ) {
        timeout = setTimeout(() => {
          setShowErrorSnackbar(false);
          setShowSuccessSnackbar(false);
        }, 2000);
      }
      return () => clearTimeout(timeout);
    }, [showSuccessSnackbar, showErrorSnackbar]);*/

    fetch("http://localhost:3300/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 500) {
        setShowErrorSnackbar(true);
      } else if (res.status === 201) {
        setShowSuccessSnackbar(true);
        window.location.href = "/signUpUser";
      }
    });
  };

  return (
    <div className="wrapper">
      <div className="container-sign-in">
        {showSuccessSnackbar && (
          <div
            className={`alert alert-success alert-dismissible fade show${
              showSuccessSnackbar ? " slide-down" : " hidden"
            }`}
            role="alert"
            style={{
              width: "53%",
              position: "fixed",
              top: "2rem",
              zIndex: 9999,
            }}
          >
            Registrazione completata con successo!
            <FontAwesomeIcon
              icon={faClose}
              style={{ float: "right", marginTop: "0.3rem" }}
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
              onClick={() => setShowSuccessSnackbar(false)}
            />
          </div>
        )}

        {showErrorSnackbar && (
          <div
            className={`alert alert-danger alert-dismissible fade show${
              showErrorSnackbar ? " slide-down" : " hidden"
            }`}
            role="alert"
            style={{
              width: "53%",
              position: "fixed",
              top: "2rem",
              zIndex: 9999,
            }}
          >
            Si è verificato un errore durante la registrazione, utente già presente
            <FontAwesomeIcon
              icon={faClose}
              style={{ float: "right", marginTop: "0.3rem" }}
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
              onClick={() => setShowErrorSnackbar(false)}
            />
          </div>
        )}
        <div className="img-sign-in"></div>
        <div className="wrapper-sign-in">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <i class="fa fa-chevron-circle-left" aria-hidden="true"></i>
            <b> Back</b>
          </Link>
          <div className="wrapper-header-sign-in">
            <Link to="/signInUser">
              <a href="Sign Up" className="underline-link">
                Registrati
              </a>
            </Link>
            <Link to="/signUpUser">
              <a
                href="Sign In"
              >
                Accedi
              </a>
            </Link>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="wrapper-form-sign-in">
              <div class="row">
                <div class="col-auto">
                  <label for="nome">
                    <b style={{ color: "red" }}>*</b> Nome
                  </label>
                  <input
                    type="name"
                    class="form-control"
                    id="nome"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                    required
                  />
                </div>
                <div class="col-auto">
                  <label for="cognome">
                    <b style={{ color: "red" }}>*</b> Cognome
                  </label>
                  <input
                    type="cognome"
                    class="form-control"
                    id="cognome"
                    value={cognome}
                    onChange={(event) => setCognome(event.target.value)}
                    required
                  />
                </div>
                <div className="col-auto">
                  <label for="gender">
                    <b style={{ color: "red" }}>*</b> Sesso
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    onChange={(event) => setGender(event.target.value)}
                    value={gender}
                    required
                  >
                    <option value="female">Femmina</option>
                    <option value="male">Maschio</option>
                  </select>
                </div>
              </div>

              <div class="row">
                <div class="col-auto">
                  <label for="date">
                    <b style={{ color: "red" }}>*</b> Data di nascita
                  </label>
                  <input
                    type="date"
                    class="form-control"
                    id="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                    required
                  />
                </div>
                <div class="col-auto">
                  <label for="prov">
                    <b style={{ color: "red" }}>*</b> Provincia
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="prov"
                    value={prov}
                    onChange={(event) => setProv(event.target.value)}
                    required
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-auto">
                  <label for="citta">Comune residenza</label>
                  <input
                    type="name"
                    class="form-control"
                    id="citta"
                    value={citta}
                    onChange={(event) => setCitta(event.target.value)}
                  />
                </div>
                <div class="col-auto">
                  <label for="cognome">CAP</label>
                  <input
                    type="name"
                    class="form-control"
                    id="via"
                    value={cap}
                    onChange={(event) => setCap(event.target.value)}
                  />
                </div>
                <div class="col-auto">
                  <label for="cognome">Cellulare</label>
                  <input
                    type="telephone"
                    class="form-control"
                    id="tel"
                    value={cellulare}
                    onChange={(event) => setCellulare(event.target.value)}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-auto">
                  <label for="email">
                    <b style={{ color: "red" }}>*</b> Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-auto">
                  <label for="prov">
                    <b style={{ color: "red" }}>*</b> Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />
                </div>
                <div class="col-auto">
                  <label for="prov">
                    <b style={{ color: "red" }}>*</b> Conferma password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    className={`form-control ${
                      password !== confirmPassword ? "is-invalid" : ""
                    }`}
                    id="cofPassword"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    required
                  />
                </div>
              </div>
              <label for="prov" style={{ color: "red", fontSize: "0.7rem" }}>
                * I campi contrassegnati sono obbligatori
              </label>

              <button type="submit" class="btn btn-success">
                Registrati
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
