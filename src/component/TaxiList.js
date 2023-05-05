import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { FaTaxi } from "react-icons/fa";
import '../css/TaxiList.css'

const itemList = [
    {
      name: 'Mario',
      distance: '0.2 Km',
      price: '25.00',
      time: '5 min'
    }
  ];

const TaxiList = () => {

    const handleSelect = () => {
        console.log('hello');
    }

  return (
    <Card className="fixed-bottom list-card">
      <div className="rounded-bar" />
      <Card.Body>
        <Card.Title>Taxi disponibili</Card.Title>
        <ListGroup variant="flush">
          {itemList.map((item, index) => (
            <ListGroup.Item key={index} className="taxi-list" onClick={handleSelect} style={{cursor: 'pointer'}}>
              <FaTaxi size={40} className="mr-3" />
              <div>
                <h6 className="mb-1 fs-3 fw-bold">{item.name}</h6>
                <small className="text-muted">{item.distance}</small>
              </div>
              <div>
                <h6 className="fs-3 fw-bold">€{item.price}</h6>
                <small className="text-muted">{item.time}</small>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default TaxiList;
