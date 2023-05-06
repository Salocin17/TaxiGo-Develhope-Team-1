import "../css/splash.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

export function Splash() {
  return (
    <div className="wrapper-splash">
      <div className="splash-container">
        <div className="container-logo"></div>
          <div class="row">
            <div class="col">
              <Link to="/signUpUser">
                <button type="button" className="btn btn-success" style={{width:"100%"}}>
                  <i className="fas fa-user"></i><br/> Area Utenti
                </button>
              </Link>
            </div>
            <div class="col">
              <Link to="/signUpTaxi">
                <button type="button" className="btn btn-success" style={{width:"100%"}}>
                  <i className="fas fa-taxi"></i><br/> Area Conducenti
                </button>
              </Link>
            </div>
          </div>
         
      </div>
    </div>
  );
}
