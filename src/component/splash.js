import "../css/splash.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

export function Splash() {
  return (
    <div className="splash-container">
      <div className="container-logo"></div>
      <div className="container-button">
        <Link to="/signUpTaxi">
          <button type="button" class="btn btn-success">
          <i class="fa-sharp fa-solid fa-taxi"></i>
          </button>
        </Link>

        <Link to="/signUpUser">
          <button type="button" class="btn btn-success">
          <i class="fa-solid fa-user"></i>          
          </button>
        </Link>
      </div>
    </div>
  );
}
