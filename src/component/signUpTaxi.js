import "../css/signUp.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

export function SignUpTaxi() {
  return (
    <div className="container-sign-up">
    <div className="container-logo-sign-up">
      <div className="img-sign-up"></div>
    </div>
    <div className="wrapper">
      <div className="wrapper-header">
        <Link to="/signUpTaxi">
        <a href="Sign Up" className="underline-link">Sign Up</a>
        </Link>
        <Link to="/signInTaxi">
          <a href="Sign In">Sign In</a>
        </Link>
      </div>

      <form className="wrapper-form">
      <div class="input-group">

      <div class="input-group-prepend">
            <span class="input-group-text">
              <FontAwesomeIcon icon={faUser} />
            </span>
          </div>
          <input
            type="email"
            class="form-control"
            id="username"
            placeholder="Enter email"
          />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <FontAwesomeIcon icon={faLock} />
            </span>
          </div>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" class="btn btn-success">
          {" "}
          Sign Up{" "}
        </button>
      </form>
    </div>
    </div>
  );
}
