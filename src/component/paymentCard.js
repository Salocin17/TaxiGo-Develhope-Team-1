import { useState } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/paymentCard.css";
import {
  faEye,
  faEyeSlash,
  faStopCircle,
  faMapMarker,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

export function PaymentCard({ payment }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => setShowDetails(!showDetails);
  const closeClick = () => setShowDetails(false);

  return (
    <Card
      style={{
        marginTop: "2rem",
        color: "black",
        boxShadow: "1px 1px 3px rgba(0,0,0,.1)",
        border: "none",
      }}
    >
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "1rem 0rem 0rem 1rem",
        }}
      >
        <div className="img"></div>

        <div className="viewDetails">
          <p>
            {payment.origin} {payment.departureTime}
          </p>
          <p>
            {payment.destination} {payment.arrivalTime}
          </p>
        </div>
      </Card.Body>
      <div className="container-group">
        <div className="containerCard">
          <div className="img2"></div>
          <h5 style={{ fontSize: "1.2rem" }}>
            {" "}
            $ <strong>{payment.price}</strong>
          </h5>
        </div>
        <div className={`confermato ${payment.state}`}>
          <strong>
            <h5>{payment.state}</h5>
          </strong>
        </div>
      </div>
    </Card>
  );
}
