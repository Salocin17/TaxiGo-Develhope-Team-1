import { Card, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { MdPlace } from "react-icons/md";
import ProfilePicture from "./ProfileIcon";

function RideTimer({ street, onValueChange }) {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    function changeCard() {
        onValueChange(4);
    }

    return (
        
        <Card className="fixed-bottom ride-timer-card">
            <Card.Body className="taxi-profile-card-body d-flex flex-column justify-content-center gap-2">
                <div className="d-flex justify-content-center align-items-center gap-3 pt-3 pb-3 taxi-profile-card-head">
                    <ProfilePicture taxi={true} />
                    <span className="fs-6 fw-semibold">A breve sarai a destinazione!</span>
                </div>
                <div className='ride-timer-container d-flex justify-content-center align-items-center px-4'>
                    <MdPlace size={25} className="mr-3" style={{ "color": "#31C48D" }} />
                    <Card.Text className='fs-2 fw-bold ride-timer-address d-flex align-items-center gap-2'>{street}</Card.Text>
                </div>
                <Button onClick={changeCard} className='align-self-center mb-3 mt-2' variant="success">{`${formatTime(time)}`}</Button>
            </Card.Body>
        </Card>
    
    );
}

export default RideTimer;

