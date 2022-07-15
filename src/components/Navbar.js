import React, { Component } from 'react'
import { Navbar, Nav, Container, NavbarBrand, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Navbarpro extends Component {
  render() {
    return (
      <div >
        <Navbar style={{height:'65px'}}>
        <Container >
          <NavbarBrand href="#home" style={{ color : '#444BAB',fontWeight: 'bold'}}><img alt="logo" src={"/images/bplogo.png"} width="40" height="40" /> programing pathashala</NavbarBrand>
          <Nav.Link href="#action1"style={{color : 'black',position:'relative',left:'100px'}}>Renaissance</Nav.Link>
          <Nav.Link href="#action2"style={{color : 'black',position:'relative',left:'110px'}}>Campus Programes</Nav.Link>
          <Nav.Link href="#action3"style={{color : 'black',position:'relative',left:'120px'}}>Hire With Us</Nav.Link>
          <Nav.Link href="#action4"style={{color : 'black',position:'relative',left:'130px'}}>Stories</Nav.Link>
          <Nav.Link href="#action5"style={{color : 'black',position:'relative',left:'140px'}}>Events</Nav.Link>
          <Button class="login" variant="outline-success"style={{borderBlockColor :'blue', color : '#444BAB',fontWeight: 'bold',position:'relative',left:'200px'}}><Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>Log in </Link></Button>
          <Button variant="outline-success" style={{backgroundColor :'blue', color : 'white',fontWeight: 'bold',position:'relative',left:'50px'}} href="/register"> <Link to="/register" style={{ textDecoration: 'none', color: 'black' }}>Start Free Trail </Link></Button>
        </Container>
      </Navbar>
      </div>
    )
  }
}
