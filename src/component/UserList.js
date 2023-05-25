import React, { useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import '../css/TaxiList.css';
import ProfilePicture from "./ProfileIcon";
import { useState } from "react";


const UserList = ({onValueChange}) => {

    const [list, setList] = useState();

    useEffect(() => {
        const token = localStorage.getItem("token1");
        fetch(`http://localhost:3300/api/status`, {
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        }).then((res) => res.json()).then(json => console.log(json));
      },[])
    
    useEffect(() => {
        const token = localStorage.getItem("token1")
        setInterval(() => {
            fetch("http://localhost:3300/api/request", {
                method: "GET",
                headers: {
                    'authorization': `Bearer ${token}`,
                }
            }).then(res => res.json())
                .then(json => setList(json))
        }, 5000)

    },[])

    const handleSelect = (e) => {
        onValueChange(1, list[e]);
    }

    return (
        <Card className="fixed-bottom list-card">
            <Card.Body>
                <div className="d-flex align-items-center justify-content-center taxi-list-title taxi-list-title">
                    <h3 className="fs-3 fw-bold align-self-center" style={{ color: 'green' }}>Richieste Disponibili</h3>
                </div>
                <ListGroup variant="flush">
                    {list && list.map((item, index) => (
                        <ListGroup.Item key={index} className="taxi-list" onClick={()=> handleSelect(index)} style={{ cursor: 'pointer' }}>
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