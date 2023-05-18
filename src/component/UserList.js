import React, { useEffect } from "react";
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



const UserList = ({onValueChange}) => {
    
    useEffect(() => {

        const token = localStorage.getItem("token")

        // setInterval(() => {
        fetch("http://localhost:3300/api/request", {
                method: "GET",
                headers: {
                    'authorization': `Bearer ${token}`,
                }

            }).then(res => res.json())
                .then(json => console.log(json))
        // }, 5000)

    },[])

    const handleSelect = () => {
        onValueChange(1);
    }


    // dati = nome , partenza e arrivo

    return (
        <Card className="fixed-bottom list-card">
            <Card.Body>
                <div className="d-flex align-items-center justify-content-center taxi-list-title taxi-list-title">
                    <h3 className="fs-3 fw-bold align-self-center" style={{ color: 'green' }}>Richieste Disponibili</h3>
                </div>
                <ListGroup variant="flush">
                    {itemList.map((item, index) => (
                        <ListGroup.Item key={index} className="taxi-list" onClick={handleSelect} style={{ cursor: 'pointer' }}>
                            <ProfilePicture Propic={'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'} />
                            <div>
                                <h6 className="mb-1 fs-5 fw-bold">{item.name}</h6>
                                <small className="text-muted">{item.address}</small>
                                <small className="text-muted">{item.destination}</small>
                            </div>
                            <div>
                                <h6 className="fs-5 fw-bold">1 Persona</h6>
                                <small className="text-muted">2 min</small>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

export default UserList;