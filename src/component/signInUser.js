import "../css/signIn.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

export function SignInUser() {
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

      <div className="wrapper-form-sign-in">
        <div class="row">
          <div class="col">
            <input
              type="name"
              class="form-control"
              id="firstName"
              placeholder="First name"
            />
          </div>
          <div class="col">
            <input
              type="lastName"
              class="form-control"
              id="lastName"
              placeholder="Last name"
            />
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <input
              type="date"
              class="form-control"
              id="date"
              placeholder="Date of birth"
            />{" "}
          </div>
        </div>
        <div class="row">
          <div class="col">
            <input
              type="name"
              class="form-control"
              id="city"
              placeholder="City"
            />
          </div>
          <div class="col">
            <input
              type="telephone"
              class="form-control"
              id="tel"
              placeholder="Phone number"
            />
          </div>
        </div>
        
        <div class="row">
          <div class="col-12">
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Your account email"
            />{" "}
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
            />{" "}
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <input
              type="password"
              class="form-control"
              id="cofPassword"
              placeholder="Confirm your password"
            />{" "}
          </div>
        </div>

        <button type="submit" class="btn btn-success">
          {" "}
          Sign In{" "}
        </button>
      </div>

      <button type="submit" class="btn btn-danger">
        {" "}
        <i class="fab fa-google"></i> Connect with Google
      </button>
    </div>
    </div>
    
  );
}
