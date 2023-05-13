import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import '../css/TaxiList.css';
import ProfilePicture from "./ProfileIcon";

const itemList = [
    {
        name: "Mario",
        address: "Via Roma",
        person: "1",
        time: "5 min",
    },
    {
        name: "Giovanni",
        address: "Via Delia",
        person: "1",
        time: "5 min",
    },
];

const UserList = () => {

    const handleSelect = () => {
        console.log('hello');
    }

    return (
        <Card className="fixed-bottom list-card">
            <div className="rounded-bar" />
            <Card.Body>
                <Card.Title className="fs-3 fw-bold">Richieste Disponibili</Card.Title>
                <ListGroup variant="flush">
                    {itemList.map((item, index) => (
                        <ListGroup.Item key={index} className="taxi-list" onClick={handleSelect} style={{ cursor: 'pointer' }}>
                            <ProfilePicture Propic={'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'} />
                            <div>
                                <h6 className="mb-1 fs-5 fw-bold">{item.name}</h6>
                                <small className="text-muted">{item.address}</small>
                            </div>
                            <div>
                                <h6 className="fs-5 fw-bold">{item.person} Persona</h6>
                                <small className="text-muted">{item.time}</small>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

export default UserList;