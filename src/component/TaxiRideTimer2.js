import { Card, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import ProfilePicture from "./ProfileIcon";
import { MdPlace, MdMyLocation } from "react-icons/md";

function TaxiRideTimer2({ endAddress, onValueChange, name }) {
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

    return (
        <Card className="fixed-bottom ride-timer-card">
            <Card.Body className="taxi-profile-card-body d-flex flex-column justify-content-center gap-2">
                <div className="d-flex justify-content-center align-items-center gap-3 pt-3 pb-3 taxi-profile-card-head">
                    <ProfilePicture user={true} />
                    <span className="fs-6 fw-semibold">Porta {name} a destinazione</span>
                </div>
                <div className='ride-timer-container d-flex justify-content-center align-items-center px-4'>
                    <MdPlace size={25} className="mr-3" style={{ "color": "#31C48D" }} />
                    <Card.Text className='fs-2 fw-bold ride-timer-address d-flex align-items-center gap-2'>{endAddress}</Card.Text>
                </div>
                <Button className='align-self-center mb-3 mt-2' variant="success" onClick={() => onValueChange(0)}>{`${formatTime(time)}`}</Button>
            </Card.Body>
        </Card>
    );
}

export default TaxiRideTimer2;