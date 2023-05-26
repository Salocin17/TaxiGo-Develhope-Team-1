import "../css/signUp.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export function SignUpUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showSnackbar, setShowSnackbar] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 /* useEffect(() => {
    let timeout;
    if (showSnackbar) {
      timeout = setTimeout(() => {
        setShowSnackbar(false);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [showSnackbar]);*/

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const data = {
      type: true,
      email: email,
      password,
    };
    console.log(data)
    
    fetch("http://localhost:3300/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((json) => {
          localStorage.setItem("token", json.token);
        });
        window.location.href = "/setupUser";
      } else if(res.status === 500){
        setShowSnackbar(true);

      }
    });
  };
  /**/

  return (
    <div className="wrapper-signUp">
      <div className="container-sign-up">
 
        <div className="img-sign-up"></div>
        <div className="wrapper-sign-up">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <i class="fa fa-chevron-circle-left" aria-hidden="true"></i>
            <b> Back</b>
          </Link>
          <div className="wrapper-header-sign-up">
            <Link to="/signInUser">
              <a
                href="Sign Up"
              >
                Registrati
              </a>
            </Link>
            <Link to="/signUpUser">
              <a href="Sign In" className="underline-link">
                Accedi
              </a>
            </Link>
          </div>

          <form className="wrapper-form-sign-up" onSubmit={handleSubmit}>
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
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                onClick={() => setShowSnackbar(false)}
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
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                onClick={() => setShowSnackbar(false)}
              />
                
            </div>
            {showSnackbar && (
              <p className="error-message" style={{color:"red", marginLeft:"0.5rem"}}>Credenziali errate</p>
            )}
            <button
              type="submit"
              class="btn btn-success"
              style={{ width: "100%" }}
            >
              Vai!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
