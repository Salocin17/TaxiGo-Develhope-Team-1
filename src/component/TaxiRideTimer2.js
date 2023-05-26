import { Card, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { MdPlace } from "react-icons/md";
import '../css/ridetimer.css';

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
            <Card.Body >
                <Card.Title className='ride-timer-title fs-4'>Porta {name} a destinazione!</Card.Title>
                <div className='ride-timer-container'>
                    <Card.Text className='fs-4 ride-timer-address d-flex align-items-center'><MdPlace size={20} className="mr-3" />{endAddress}</Card.Text>
                    <Button className='align-self-center' variant="success" onClick={() => onValueChange(0)}>{`${formatTime(time)}`}</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default TaxiRideTimer2;