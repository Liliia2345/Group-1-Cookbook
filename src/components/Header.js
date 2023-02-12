import React from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import myLogo from './logoCookbook.png'

function Header() {
  return (
    <Navbar className="color-nav" collapseOnSelect expand="lg" bg="#C0DEFF" variant="light" style={{ width: "100%", position: "sticky", top: 0 }}
    >
      <Container>
      <Navbar fixed="top" />
        <Navbar.Brand className= "brand-nav" href="#home">
        <img src={myLogo} style={{width:65, marginTop: 2, marginRight: 20}}/>
            Perfect Burgers
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/home">Home</Link>
            <Link className="nav-link" to="/about">About Us</Link>
            <NavDropdown title="Categories" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">TOP Recipes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Latest Recipes
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link className="nav-link" to="/login">Log In</Link>
            <Link className="nav-link" to="/subscribe">Subscribe</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header