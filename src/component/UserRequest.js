import { Card, Button } from "react-bootstrap";
import { FaArrowLeft } from 'react-icons/fa';
import ProfilePicture from "./ProfileIcon";
import '../css/taxiprofilecard.css';

const UserRequest = ({onValueChange}) => {

    const handleConfirm = () => {
        const token = localStorage.getItem("token")

        fetch("http://localhost:3300/api/route", {
            method: "POST",
            body: {
                id: "_id",
            },
            headers: {
                'authorization': `Bearer ${token}`,
            }
           
        }).then(res => res.json())
            .then(json => console.log(json))
        onValueChange(2);
    }

    const handleReject = () => {
        onValueChange(0);
    }

    return (
        <div className="fixed-bottom ">
            <Card className="taxi-profile-card">
                <Card.Body>
                    <div className="d-flex justify-content-center align-items-center gap-3 mb-3 pb-3 taxi-profile-card-head">
                        <FaArrowLeft size={20} className="ms-4 position-absolute start-0" onClick={() => onValueChange(0)} />
                        <span className="fs-3 fw-bold">La tua richiesta!</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <ProfilePicture Propic={'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'} />
                        <div>
                            <div>
                                <h6 className="mb-1">Destinazione</h6>
                                <span className="ml-2 fs-5 fw-semibold">Via Roma</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h6 className="ml-2">1 Persona</h6>
                                <span className="ml-2">2 min</span>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mt-4 align-items-center justify-content-center gap-3">
                        <Button variant="danger" onClick={handleReject}>Rifiuta</Button>
                        <Button variant="success" onClick={handleConfirm}>Accetta</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default UserRequest;