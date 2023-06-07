import React, { useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { MdPlace } from "react-icons/md";
import { FaSearch } from 'react-icons/fa';

const SearchCard = ({ onValueChange, onSetDestination }) => {
  const [data, setData] = useState()
  const [streets, setStreets] = useState();
  const [street, setStreet] = useState([]);
  const [streetInput, setStreetInput] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);


  useEffect(() => {
    fetch(`http://localhost:3300/api/getStreet`)
      .then((result) => result.json())
      .then((json) => setStreets(json));
  }, [street]);

  const handleChange = (e) => {
    setStreetInput(e.target.value);
    const data = [];
    streets.street.map((el) => {
      if (el.name.includes(e.target.value)) {
        data.push(el.name);
      }
    });
    setStreet(data);
    setIsInputFocused(true);
  };

  const setInputClick = (e) => {
    setStreetInput(e);
  };

  return (
    <Card className="search-card fixed-bottom">
      <Card.Body className="p-2">
        {street !=[] && <div
          style={{
            maxHeight: "200px",
            display: isInputFocused ? "block" : "none",
            overflowY: "auto",
            padding: "1rem"
          }}
        >
          {street.map((el, index) => (
            <div
              className="input-hover"
              value={index}
              onClick={() => setInputClick(el)}
              style={{ cursor: "pointer",
              "border-radius": '5px'  }}
            >
              {el}
            </div>
          ))}
        </div>}
        <div className="rounded-bar" />
        <Form className="search-form">
          <Form.Group controlId="search" className="search-bar-container">
            <MdPlace size={45} className="mr-3" style={{ color: 'gray' }} />
            <Form.Control type="text" placeholder="Dove vuoi andare?" className="search-bar" onChange={handleChange} value={streetInput}></Form.Control>
            <Button variant="success" className="btn btn-search" onClick={() => {onValueChange(1); onSetDestination(streetInput)}}>
              <FaSearch className="search-icon" style={{ color: 'white' }} />
            </Button>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SearchCard;
