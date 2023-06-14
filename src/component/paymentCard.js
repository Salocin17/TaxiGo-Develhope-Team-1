import { useState } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faStopCircle,
  faMapMarker,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { BiCoinStack } from "react-icons/bi";

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
          "align-items": 'center',
        }}
      >
        <div className="img"></div>

        <div className="viewDetails d-flex flex-column gap-2">
          <span className="d-flex align-items-center justify-content-between">
            <span className="fs-5 fw-regular">{payment.departure.name}</span> <span className="text-muted fs-6 fw-semibold">{new Date(payment.createdAt).toLocaleTimeString("en-GB", { hour: '2-digit', minute: '2-digit' })}</span>
          </span>
          <span className="d-flex align-items-center justify-content-between">
            <span className="fs-5 fw-regular">{payment.destination}</span> <span className="text-muted fs-6 fw-semibold">{new Date(payment.updatedAt).toLocaleTimeString("en-GB", { hour: '2-digit', minute: '2-digit' })}</span>
          </span>
        </div>
      </Card.Body>
      <div className="container-group">
        <div className="containerCard">
          <BiCoinStack size={20} className="mr-3" />
          <span className="fs-5 fw-semibold">€ {payment.price.toFixed(2)}</span>
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
