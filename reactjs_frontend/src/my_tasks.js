import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Files from "./Files";
import axios from "axios";
import {Container, Row} from 'react-bootstrap';  

export default function (props) {
    const [isLoggedIn, setLoggedIn] = useState(
        localStorage.getItem("tokens") || ""
      );
  const [my_tasks, setmy_tasks] = useState([]);
  if (isLoggedIn=="") {
    console.log("login to view");
  return <Navigate to="/login" />;
}
useEffect(() => {
  fetch("http://127.0.0.1:4000/my_tasks/") 
    .then(resp => resp.json())
    .then(data => {setmy_tasks(data);console.log(data)})
}, []);

  return (
    <Container>
    <br/>
    <Files files={my_tasks} />
  </Container>
  )
}