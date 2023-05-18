import React, {useEffect, useState} from "react";
import { Card, Form, Button } from "react-bootstrap";
import '../css/SearchCard.css';
import { MdPlace } from "react-icons/md";
import { FaSearch } from 'react-icons/fa';
import ProfilePicture from './ProfileIcon.js'

const SearchCard = ({onValueChange}) => {

  function changeCard() {
    onValueChange(1);
  }

  return (

    <div className="search-card-container fixed-top">
    <Card className="search-card">
      <Card.Body className="p-2">
        <div className="rounded-bar"/>
        <Form className="search-form">
          <Form.Group controlId="search" className="search-bar-container">
            <MdPlace size={40} className="mr-3" style={{color: 'green'}}/>
            <Form.Control type="text" placeholder="Dove vuoi andare?" className="search-bar"></Form.Control>
            <Button variant="success" className="btn-search" onClick={changeCard}>
              <FaSearch  style={{ color: 'white' }} />
            </Button>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
      <ProfilePicture Propic={'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'} />
   </div>
    
   
  );
};

export default SearchCard;
