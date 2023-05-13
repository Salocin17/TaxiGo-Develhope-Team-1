import { Card, Button } from "react-bootstrap";
import ProfilePicture from "./ProfileIcon";
import '../css/taxiprofilecard.css';

const UserRequest = () => {

    const handleConfirm = () => {
        
    }

    return (
        <div className="fixed-bottom ">
            <Card className="taxi-profile-card">
                <Card.Body>
                    <div className="d-flex justify-content-center align-items-center gap-3 mb-3 pb-3 taxi-profile-card-head">
                        <span className="fs-3 fw-bold">Hai una nuova richiesta!</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <ProfilePicture Propic={'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'} />
                        <div>
                            <div>
                                <h6 className="mb-1">Indirizzo</h6>
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
                        <Button variant="success" onClick={handleConfirm}>Accetta</Button>
                        <Button variant="danger">Rifiuta</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default UserRequest;