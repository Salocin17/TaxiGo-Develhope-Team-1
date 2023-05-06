import "../css/signIn.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

export function SignInTaxi() {
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
    </div>
  );
}
