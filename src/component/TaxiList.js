import React, {useState, useEffect} from "react";
import { Card, ListGroup } from "react-bootstrap";
import { FaTaxi } from "react-icons/fa";
import '../css/TaxiList.css';

const TaxiList = ({onValueChange}) => {

    const [List, setList] = useState([{name: 'Mario'}])
  
    useEffect(()=>{
        const token = localStorage.getItem("token")
    
        fetch("http://localhost:3300/api/taxi", {
          method: "GET",
          headers: {
              'authorization': `Bearer ${token}`,
          }
         
      }).then(res => res.json())
          .then(data => console.log(data))
   
    },[])

    console.log(List);

  

  return (
    <Card className="fixed-bottom list-card ">
      <Card.Body>
        <div className="d-flex align-items-center justify-content-center taxi-list-title" >
        <h3 className="align-self-center fw-bold" style={{color: 'green'}} >Taxi disponibili</h3>
        </div>
        <ListGroup variant="flush">
          {List.map((item, index) => (
            <ListGroup.Item key={index} className="taxi-list " onClick={() => onValueChange(2)} style={{cursor: 'pointer'}}>
                <div className="rounded-circle d-flex align-items-center justify-content-center bg-success text-white" style={{ width: "40px", height: "40px" }}>
                  <FaTaxi size={20} className="mr-3" />
                </div>
                <div>
                <h6 className="mb-1 fs-6 fw-bold">{item.name}</h6>
                <small className="text-muted">1 Km</small>
                </div>    
              <div>
                <h6 className="fs-6 fw-bold">€15</h6>
                <small className="text-muted">2 min</small>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
   );
};

export default TaxiList;
