import React, { useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import '../css/SearchCard.css';
import { MdPlace } from "react-icons/md";
import { FaSearch } from 'react-icons/fa';
import ProfilePicture from './ProfileIcon.js'

const SearchCard = ({ onValueChange, onSetDestination }) => {
  const [data, setData] = useState()

  return (
    <Card className="search-card fixed-bottom">
      <Card.Body className="p-2">
        <div className="rounded-bar" />
        <Form className="search-form">
          <Form.Group controlId="search" className="search-bar-container">
            <MdPlace size={45} className="mr-3" style={{ color: 'gray' }} />
            <Form.Control type="text" placeholder="Dove vuoi andare?" className="search-bar" onChange={(e) => setData(e.target.value)}></Form.Control>
            <Button variant="success" className="btn btn-search rounded-circle" onClick={() => {onValueChange(1); onSetDestination(data)}}>
              <FaSearch className="search-icon" style={{ color: 'white' }} />
            </Button>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SearchCard;
