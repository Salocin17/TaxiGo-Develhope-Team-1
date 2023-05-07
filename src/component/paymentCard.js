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

export function PaymentCard({ payment }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => setShowDetails(!showDetails);
  const closeClick = () => setShowDetails(false);

  return (
    <Card
      style={{
        marginTop: "2rem",
        marginBottom: "2rem",
        color: "black",
        backgroundColor: "rgba(49, 196, 141, 0.3)",
      }}
    >
      <Card.Body>
        <div
          className="d-flex justify-content-between"
          style={{ flexWrap: "wrap" }}
        >
          <div>
            <Card.Title style={{ textAlign: "left" }}>
              {payment.date}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              <FontAwesomeIcon icon={faTaxi} size="sm"style={{marginRight:"0.3rem"}}/>
               {payment.taxiCompany}
            </Card.Subtitle>
          </div>
          {showDetails ? (
            <div
              className="d-flex align-items-center"
              onClick={closeClick}
              style={{ gap: "0.5rem" }}
            >
              <FontAwesomeIcon icon={faEyeSlash} size="lg" className="mr-2" />
              <span>Close</span>
            </div>
          ) : (
            <div
              className="d-flex align-items-center"
              onClick={handleClick}
              style={{ gap: "0.5rem" }}
            >
              <FontAwesomeIcon icon={faEye} size="lg" className="mr-2" />

              <span>Details</span>
            </div>
          )}
        </div>
        {showDetails && (
          <div className="viewDetails">
            <hr />
            <p>
              <FontAwesomeIcon icon={faStopCircle} size="sm" /> Origin
              <br />
              <strong>
                {payment.origin} {payment.departureTime}
              </strong>
            </p>
            <p>
              <FontAwesomeIcon icon={faMapMarker} size="sm" /> Destination
              <br />
              <strong>
                {payment.destination} {payment.arrivalTime}
              </strong>
            </p>
            <h4>
              <strong>Price:</strong> {payment.price}
            </h4>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
