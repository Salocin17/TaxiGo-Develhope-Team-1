import React, { useState, useEffect, useParams } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { RiTaxiFill } from "react-icons/ri";
import { useDistance } from "../hooks/Distance";
import ProfilePicture from "./ProfileIcon";

const TaxiList = ({ onValueChange, data, destination }) => {

  const [list, setList] = useState([])

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
      <Card.Body className="taxi-list-body">
        <div className="d-flex align-items-center justify-content-center taxi-list-title" >
          <h3 className="align-self-center fw-bold" style={{ color: 'green' }} >Taxi disponibili</h3>
        </div>
        {list !== [] && <ListGroup >
          {list.map((el, index) => {
            return (<li key={index} value={index} onClick={() => handleChange(index)} className="taxi-list pt-2" style={{ cursor: 'pointer' }}>
              <div className="d-flex gap-3 justify-content-center align-items-center">
                <ProfilePicture taxi={true}/>
                <div className="d-flex flex-column align-items-center justify-content-center taxi-list-item">
                  <p className="fs-6 fw-semibold d-inline">{el.first_name} {el.last_name}</p>
                </div>
              </div>
              <div>
                <small className="text-muted">A 1 km da te!</small>
              </div>
            </li>)
          })}
        </ListGroup>}
      </Card.Body>
    </Card>
  );
};

export default TaxiList;
