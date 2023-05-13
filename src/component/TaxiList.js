import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { FaTaxi } from "react-icons/fa";
import '../css/TaxiList.css'
import { useEffect } from "react";

const TaxiList = (List) => {
  
    useEffect(()=>{
        const token = localStorage.getItem("token")
    
        fetch("http://federicov.ddns.net:3300/api/taxi", {
          method: "GET",
          headers: {
              'authorization': `Bearer ${token}`,
          }
         
      }).then(res => res.json())
          .then(json => console.log(json))
   
    },[])

    const handleSelect = () => {
        console.log('hello');
    }

  // return (
  //   <Card className="fixed-bottom list-card">
  //     <div className="rounded-bar" />
  //     <Card.Body>
  //       <Card.Title>Taxi disponibili</Card.Title>
  //       <ListGroup variant="flush">
  //         {List.map((item, index) => (
  //           <ListGroup.Item key={index} className="taxi-list" onClick={handleSelect} style={{cursor: 'pointer'}}>
  //             <FaTaxi size={30} className="mr-3" />
  //             <div>
  //               <h6 className="mb-1 fs-5 fw-bold">{item.name}</h6>
  //               <small className="text-muted">1km</small>
  //             </div>
  //             <div>
  //               <h6 className="fs-5 fw-bold">€15</h6>
  //               <small className="text-muted">2 min</small>
  //             </div>
  //           </ListGroup.Item>
  //         ))}
  //       </ListGroup>
  //     </Card.Body>
  //   </Card>
  // // );
};

export default TaxiList;
