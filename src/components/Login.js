import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Navbar,NavbarBrand, Button } from 'react-bootstrap'

import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <Navbar style={{height:'60px',width:'100%'}}>
          <NavbarBrand href="#home" style={{ color : '#444BAB',fontSize :'22px',fontWeight: 'bold',position:'relative',left:'600px'}}><img alt="logo" src={"/images/bplogo.png"} width="45" height="45" /> programing pathashala</NavbarBrand>
      </Navbar>
      <hr style={{marginTop:'0px'}}/>
      <div className="Login">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <a href="/Homepage"><Button className="btn" block="true" size="lg" type="submit" disabled={!validateForm()}>
            Login
          </Button></a>
        </Form>
      </div>
    </div>
  );
}

export default Login;