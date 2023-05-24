import "../css/setupGps.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import { MdStreetview } from "react-icons/md";
import SearchCard from "./SearchCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export function SetupGpsUser() {

  const [streets, setStreets] = useState()
  const [street, setStreet] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3300/api/getStreet`).then(result => result.json()).then(json => setStreets(json))
  },[])

  const handleClick = (e) =>{
    const token = localStorage.getItem("token");
    fetch(`http://localhost:3300/api/location/user/${street[e.target.value]}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: "change",
      }),
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      navigate(`/homeUser/${street[e.target.value]}`);
    });
  }

  const handleChange = (e) =>{
    const data = []
    streets.street.map(el => {if(el.name.includes(e.target.value)){
      data.push(el.name)
    }}) 
    setStreet(data)
  }

  return (
    <div className="container-gps-user">
      <div className="container-gps-user-header"></div>
      <div className="container-gps-user-body">
        <h2 style={{ fontSize: "34px", fontWeight: "800" }}>Ciao, prenota </h2>
        <h2 style={{ fontSize: "34px", fontWeight: "800" }}>
          subito il tuo taxi!{" "}
        </h2>
        <button type="submit" class="btn buttonGps">
          <p>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.4165 20V8.57202H0L20 0L11.4165 20Z"
                fill="#31C48D"
              />
            </svg>
            Usa la posizione corrente
          </p>
        </button>

        <div>
          <button style={{ textDecoration: "none", color: "white", backgroundColor: "transparent", border: "0px", borderColor: "transparent" }}>
            <u style={{ color: "#F52D56"}}>
              {" "}
              <h4 style={{ fontSize: "17px" }}>Seleziona manualmente</h4>
            </u>
          </button>
          <input type="text" onChange={handleChange}></input>
          
          <select onChange={handleClick}>
          {
            street.map((el,index) => <option value={index}>{el}</option> )
          }
          </select>
        </div>
      </div>
    </div>
  );
}
