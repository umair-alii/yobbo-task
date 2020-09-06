import React from "react";

// import bootstrap components
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import logo from "../../../assets/images/logo.png";
import { Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <div className="container">
      <div className="navbar-wrapper">
        <div className="main-navbar">
          <Navbar expand="md">
            <Navbar.Brand href="/">
              <img src={logo} className="img-fluid" alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home" className="navbar-links">
                  Work
                </Nav.Link>
                <Nav.Link href="#link" className="navbar-links">
                  Service
                </Nav.Link>
                <Nav.Link href="#link" className="navbar-links">
                  Team
                </Nav.Link>
                <Nav.Link href="/detail" className="navbar-links">
                  Detail
                </Nav.Link>
              </Nav>
              <Button variant="success">Get in Touch</Button>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
