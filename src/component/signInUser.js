import "../css/signIn.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export function SignInUser() {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [date, setDate] = useState("");
  const [prov, setProv] = useState("");
  const [indirizzo, setIndirizzo] = useState("");
  const [gender, setGender] = useState("");
  const [cellulare, setCellulare] = useState("");
  const [cap, setCap] = useState("");
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

    console.log(`
    Nome: ${nome}
    Cognome: ${cognome}
    Data di nascita: ${date}
    Sesso: ${gender}
    Indirizzo: ${indirizzo}
    CAP: ${cap}
    Cellullare: ${cellulare}
    Email: ${email}
    Password: ${password}
    Confirm Password: ${confirmPassword}
  `);

  };

  return (
    <div className="wrapper">

    <div className="container-sign-in">
      <div className="container-logo-sign-in">
        <div className="img-sign-in"></div>
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
              <div class="row">
                <div class="col">
                  <label for="nome">
                    <b style={{ color: "red" }}>*</b> Nome
                  </label>
                  <input
                    type="name"
                    class="form-control"
                    id="nome"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                  />
                </div>
                <div class="col">
                  <label for="cognome">
                    <b style={{ color: "red" }}>*</b> Cognome
                  </label>
                  <input
                    type="cognome"
                    class="form-control"
                    id="cognome"
                    value={cognome}
                    onChange={(event) => setCognome(event.target.value)}
                  />
                </div>
                <div className="col-3">
                  <label for="gender">
                    <b style={{ color: "red" }}>*</b> Sesso
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    onChange={(event) => setGender(event.target.value)}
                    value={gender}
                  >
                    <option value="female">Femmina</option>
                    <option value="male">Maschio</option>
                  </select>
                </div>
              </div>

              <div class="row">
                <div class="col-8">
                  <label for="date">
                    <b style={{ color: "red" }}>*</b> Data di nascita
                  </label>
                  <input
                    type="date"
                    class="form-control"
                    id="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                  />
                </div>
                <div class="col-4">
                  <label for="prov">
                    <b style={{ color: "red" }}>*</b> Provincia
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="prov"
                    value={prov}
                    onChange={(event) => setProv(event.target.value)}
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
                    value={indirizzo}
                    onChange={(event) => setIndirizzo(event.target.value)}
                  />
                </div>
                <div class="col-2">
                  <label for="cognome">CAP</label>
                  <input
                    type="name"
                    class="form-control"
                    id="via"
                    value={cap}
                    onChange={(event) => setCap(event.target.value)}
                  />
                </div>
                <div class="col">
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
                <div class="col-12">
                  <label for="email">
                    <b style={{ color: "red" }}>*</b> Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col">
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
                  />
                </div>
                <div class="col">
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
                  />
                </div>
              </div>
              <label for="prov" style={{ color: "red", fontSize: "0.7rem" }}>
                * I campi contrassegnati sono obbligatori
              </label>

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
    </div>
    </div>
  );
}

