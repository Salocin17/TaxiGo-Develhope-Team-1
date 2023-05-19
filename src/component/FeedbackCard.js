import { Card, Button, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import ProfilePicture from './ProfileIcon';
import '../css/Feedback.css';
import Swal from "sweetalert2"

function FeedbackCard({ nome, onValueChange }) {
    const [rating, setRating] = useState(null);

    

    const handleRatingChange = (event) => {
        setRating(Number(event.target.value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        Swal.fire({
            title: "Grazie!",
            text: "La tua opinione è importante.",
            icon: "success",
            confirmButtonText: "Chiudi",
            confirmButtonColor: '#31C48D'
        });

        onValueChange(0);
    };

    return (
       
        <Card className='fixed-bottom feedback-card'>
            <Card.Body className='d-flex-column feedback-container'>
                <ProfilePicture Propic={'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'} />
                <Card.Text className='fs-4 fw-semibold'>Valuta il tuo viaggio con {nome}</Card.Text>
                <Form onSubmit={handleSubmit} className='feedback-form'>
                    <Form.Group controlId="rating">
                        <div className='d-flex gap-3 justify-content-center'>
                            {[1, 2, 3, 4, 5].map((value) => (
                                <Form.Check
                                    type="radio"
                                    id={`star${value}`}
                                    key={value}
                                    label={value}
                                    value={value}
                                    checked={rating === value}
                                    onChange={handleRatingChange}
                                />
                            ))}
                        </div>
                    </Form.Group>
                    <Button type="submit" variant='success' disabled={rating === null}>Invia</Button>
                </Form>
            </Card.Body>
        </Card>
        
    );
}

export default FeedbackCard;
