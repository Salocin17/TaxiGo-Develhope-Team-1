import React, { useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import ProfilePicture from "./ProfileIcon";
import { useState } from "react";
import io from "socket.io-client";

const UserList = ({onValueChange}) => {
    const socket = io.connect("http://localhost:3300");

    const [list, setList] = useState([]);

    
    if(!list){
        const token = localStorage.getItem("token1");
        fetch(`http://localhost:3300/api/status`, {
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        }).then((res) => res.json()).then(json => console.log("change"));
    }
      

    useEffect(() => {
        const token = localStorage.getItem("token1");
        fetch(`http://localhost:3300/api/driver`, {
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            const id = data._id
            socket.emit("join_room", id);
          });
    }, [socket]);



 
    
  
    socket.on("receive_message", (data) => {
        console.log(data)
        setList(list => [...list, data])
    });


    // useEffect(() => {
    //     const token = localStorage.getItem("token1")
    //     setInterval(() => {
    //         fetch("http://localhost:3300/api/request", {
    //             method: "GET",
    //             headers: {
    //                 'authorization': `Bearer ${token}`,
    //             }
    //         }).then(res => res.json())
    //             .then(json => setList(json))
    //             .then(console.log(list))
    //     }, 5000)

    // },[])


    const handleSelect = (e) => {
        onValueChange(1, list[e]);
    }

    return (
        <Card className="fixed-bottom list-card">
            <Card.Body>
                <div className="d-flex align-items-center justify-content-center taxi-list-title">
                    <h3 className="fs-3 fw-bold align-self-center" style={{ color: 'green' }}>Richieste Disponibili</h3>
                </div>
                <ListGroup>
                    {list && list.map((item, index) => (
                        <li key={index} className="taxi-list pt-2 pb-2" onClick={()=> handleSelect(index)} style={{ cursor: 'pointer' }}>
                            <div className="d-flex align-items-center justify-content-center gap-3">
                                <ProfilePicture user={true} />
                                <div>
                                    <h6 className="mb-1 fs-6 fw-semibold">Angelo</h6>
                                    <small className="text-muted">{item.destination}</small>
                                </div>
                            </div>
                            <div>
                                <h6 className="mb-1 fs-6 fw-semibold">1 Persona</h6>
                                <small className="text-muted">2 min</small>
                            </div>
                        </li>
                    ))}
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

export default UserList;