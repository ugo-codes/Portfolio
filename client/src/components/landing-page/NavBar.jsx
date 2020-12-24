
import React from "react";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavBar() {

  return (
    <Navbar bg="#28ABB9" expand="sm" sticky="top">
      <Navbar.Brand href=""></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#intro"><span className="white-text-color">Intro</span></Nav.Link>
          <Nav.Link href="#skills"><span className="white-text-color">Skills</span></Nav.Link>
          <Nav.Link href="#freelance"><span className="white-text-color">Freelance</span></Nav.Link>
          <Nav.Link href="#contact"><span className="white-text-color">Contact</span></Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
  );

}

export default NavBar;
