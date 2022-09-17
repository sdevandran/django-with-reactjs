import logo from './logo.svg';
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom"
import Auth from "./Auth"
import { AuthContext } from "./Auth2";
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';  
import My_tasks from "./my_tasks";



function App() {
  const [authTokens, setAuthTokens] = useState(
    localStorage.getItem("tokens") || ""
  );
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  console.log("authTokens", authTokens);
  const handleLogout = () => {
    localStorage.removeItem("tokens");
    setAuthTokens("");
    console.log("logged out");
    window.location.href = "/login";
  };
  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Navbar style={{position: "sticky"}} fixed="top" bg="primary" expand="md">  
    <Container>  
      <Navbar.Brand href="/">Files</Navbar.Brand>  
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  
      <Navbar.Collapse id="basic-navbar-nav">  
        <Nav className="me-auto">  
          <Nav.Link href="my_tasks">My Tasks</Nav.Link>  
          <Nav.Link href="#link">In Progress</Nav.Link>  
          <Nav.Link href="#link">Completed</Nav.Link>  
          <Nav.Link href="#link">New Process</Nav.Link>  
        </Nav>  
        <Nav>  
        {
        <div>
           {authTokens ? (
                <Nav.Link onClick={handleLogout}> Logout </Nav.Link>
              ) : (
                <Nav.Link href="/login">Login</Nav.Link>  
              )}
              </div>
          }
            </Nav>  
      </Navbar.Collapse>  
    </Container>  
  </Navbar>  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div><br/><h2><center>Welcome</center></h2></div>} />
        <Route path="/login" element={<Auth />} />
        <Route path="/my_tasks" element={<My_tasks />} />
      </Routes>
    </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
