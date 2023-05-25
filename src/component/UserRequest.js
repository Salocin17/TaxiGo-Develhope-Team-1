import { Card, Button } from "react-bootstrap";
import ProfilePicture from "./ProfileIcon";
import '../css/taxiprofilecard.css';
import { useEffect, useState } from "react";

const UserRequest = ({onValueChange, data}) => {

    const [departure, setDeparture] = useState()

    const handleConfirm = () => {
        const token = localStorage.getItem("token1")

        fetch("http://localhost:3300/api/route", {
            method: "POST",
            body: JSON.stringify({
                id: data._id,
            }),
            headers: {
                'authorization': `Bearer ${token}`,
                "Content-Type": "application/json"
            }
           
        }).then(res => res.json())
            .then(json => console.log(json))
        onValueChange(2, departure);
    }

    useEffect(() =>{
        fetch(`http://localhost:3300/api/aStreet/${data.departure}`, {
            method: "GET",
        })
        .then(result => result.json())
        .then(json => setDeparture(json.street.name))
    })


    return (
        <div className="fixed-bottom ">
            <Card className="taxi-profile-card">
                <Card.Body>
                    <div className="d-flex justify-content-center align-items-center gap-3 mb-3 pb-3 taxi-profile-card-head">
                        <ProfilePicture Propic={'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'} />
                        <span className="fs-3 fw-bold">La tua richiesta!</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <div>
                                <h6 className="mb-1 text-muted">Partenza</h6>
                                <span className="ml-2 fw-semibold">{departure}</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h6 className="mb-1 text-muted">Destinazione</h6>
                                <span className="ml-2 fw-semibold">{data.destination}</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h6 className="ml-2 text-muted">1 Persona</h6>
                                <span className="ml-2 text-muted">2 min</span>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mt-4 align-items-center justify-content-center gap-3">
                        <Button variant="danger" onClick={() => onValueChange(0)}>Rifiuta</Button>
                        <Button variant="success" onClick={handleConfirm}>Accetta</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default UserRequest;