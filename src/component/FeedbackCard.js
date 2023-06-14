import { Card, Button, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import ProfilePicture from './ProfileIcon';
import Swal from "sweetalert2";

function FeedbackCard({ data, onValueChange }) {
    const [rating, setRating] = useState(null);

    const handleRatingChange = (value) => {
        setRating(value);
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
                <ProfilePicture taxi={true} />
                <Card.Text className='fs-5 fw-semibold mt-3'>Come è stato il tuo viaggio? </Card.Text>
                <p className='text-muted px-5 text-center'>Il tuo feedback aiuta a migliorare la tua esperienza</p>
                <Form onSubmit={handleSubmit} className='feedback-form'>
                    <Form.Group controlId="rating">
                        <div className='d-flex gap-3 justify-content-center mb-3 mt-2'>
                            {[1, 2, 3, 4, 5].map((value) => (
                                <i
                                    className={`fa fa-star ${rating >= value ? 'filled' : ''}`}
                                    key={value}
                                    onClick={() => handleRatingChange(value)}
                                ></i>
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

