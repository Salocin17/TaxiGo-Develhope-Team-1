import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import '../css/SearchCard.css'

const SearchCard = () => {
  return (
    <Card className="fixed-bottom search-card">
      <Card.Body>
        <div className="rounded-bar"/>
        <p className="search-title">Dove vuoi andare?</p>
        <Form className="search-form">
          <Form.Group controlId="search">
            <Form.Control type="text" placeholder="La tua destinazione" className="search-bar"/>
          </Form.Group>
          <Button variant="success" type="submit" className="btn-search">
            Vai!
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SearchCard;
