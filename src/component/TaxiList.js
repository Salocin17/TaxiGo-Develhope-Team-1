import React, { useState, useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { RiTaxiFill } from "react-icons/ri";

const TaxiList = ({ onValueChange }) => {

  const [list, setList] = useState([])

  console.log(list)

  if(list.length === 0){      
      const token = localStorage.getItem("token")

      fetch("http://localhost:3300/api/taxi", {
        method: "GET",
        headers: {
          'authorization': `Bearer ${token}`,
        }
      }).then(res => res.json()).then(data => {
        if(data){
          setList(data)
        }
      })
  }

  function handleChange(e) {

    onValueChange(2, list[e])
  }

  return (
    <Card className="fixed-bottom list-card ">
      <Card.Body>
        <div className="d-flex align-items-center justify-content-center taxi-list-title" >
          <h3 className="align-self-center fw-bold" style={{ color: 'green' }} >Taxi disponibili</h3>
        </div>
        {list !== [] && <ListGroup >
          {list.map((el, index) => {
            return (<li key={index} value={index} onClick={() => handleChange(index)} className="taxi-list" style={{ cursor: 'pointer' }}>
              <div className="d-flex gap-3 justify-content-center align-items-center">
                <div className="rounded-circle d-flex align-items-center justify-content-center bg-success text-white" style={{ width: "40px", height: "40px", "background-color": '#31C48D' }}>
                  <RiTaxiFill size={25} className="mr-3" />
                </div>
                <div className="d-flex flex-column align-items-start justify-content-center taxi-list-item">
                  <p className="fs-6 fw-bold d-inline">{el.first_name}</p>
                  <p className="text-muted d-inline">1 Km</p>
                </div>
              </div>
              <div>
                <h6 className="fs-6 fw-bold">€15</h6>
                <small className="text-muted">2 min</small>
              </div>
            </li>)
          })}
        </ListGroup>}
      </Card.Body>
    </Card>
  );
};

export default TaxiList;
