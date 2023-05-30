import React, {useState, useEffect} from "react";
import { Card, ListGroup } from "react-bootstrap";
import { FaTaxi } from "react-icons/fa";
import * as turf from "@turf/turf"

import { MdDataArray } from "react-icons/md";

const TaxiList = ({onValueChange}) => {

    const [list, setList] = useState([])
    const [interval, setInterval] = useState()
  
    useEffect(()=>{
      const interval = setInterval(()=>{

        const token = localStorage.getItem("token")
    
        fetch("http://localhost:3300/api/taxi", {
          method: "GET",
          headers: {
              'authorization': `Bearer ${token}`,
          }
          }).then(res => res.json()).then(data => {
            
            setList(data)})
            // data.map(el => {
            //   console.log(el.street)
            //   const information = {
            //     street: el.street
            //   }
            //   console.log(information)
            //   fetch(`http://localhost:3300/api/aStreet/${el.street}`, {
            //     method: "GET",
            //     headers: {
            //         'authorization': `Bearer ${token}`,
            //     },
                
            //     }).then(result => result.json()). then(json => console.log(json))})

            // })
            
      },2000)
    },[])

  function handleChange(e){

    onValueChange(2, list[e])
    clearInterval(interval)
  }
  
  return (
    <Card className="fixed-bottom list-card ">
      <Card.Body>
        <div className="d-flex align-items-center justify-content-center taxi-list-title" >
        <h3 className="align-self-center fw-bold" style={{color: 'green'}} >Taxi disponibili</h3>
        </div>
        {list !== [] && <ListGroup variant="flush" >
          {list.map((el, index) => {
              return (<ListGroup.Item key={index} value={index} onClick={()=>handleChange(index)} className="taxi-list " style={{cursor: 'pointer'}}>
                <div className="rounded-circle d-flex align-items-center justify-content-center bg-success text-white" style={{ width: "40px", height: "40px" }}>
                  <FaTaxi size={20} className="mr-3" />
                </div>
                <div>
                <h6 className="mb-1 fs-6 fw-bold">{el.first_name}</h6>
                <small className="text-muted">1 Km</small>
                </div>    
              <div>
                <h6 className="fs-6 fw-bold">€15</h6>
                <small className="text-muted">2 min</small>
              </div>
            </ListGroup.Item>)
          })}
        </ListGroup>}
      </Card.Body>
    </Card>
   );
};

export default TaxiList;
