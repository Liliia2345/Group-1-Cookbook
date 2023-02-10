import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import myLogo from "./logoCookbook.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar
      className="color-nav"
      collapseOnSelect
      expand="lg"
      bg="#C0DEFF"
      variant="light"
      style={{ width: "100%", position: "sticky", top: 0 }}
    >
      <Container>
        <Navbar fixed="top" />
        <Navbar.Brand className="brand-nav" href="#home">
          <img
            src={myLogo}
            style={{ width: 65, marginTop: 2, marginRight: 20 }}
            alt="logo"
          />
          Perfect Burgers
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink href="#about" className="nav-link">
              About Us
            </NavLink>
            <NavDropdown title="Categories" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                TOP Recipes
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Latest Recipes
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link className="nav-link" href="#deets">
              Log In
            </Nav.Link>
            <Nav.Link className="nav-link" eventKey={2} href="#memes">
              Subscribe
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
