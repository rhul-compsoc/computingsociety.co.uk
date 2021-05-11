import React from "react";
import { Link } from 'gatsby'
import Nav from "react-bootstrap/Nav";
// Load components from React-Bootstrap
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo.svg";

const Navibar = (props) => {
  return (
    <Navbar fixed="top" sticky="top " bg="compsoc" expand="lg">
      <div className="container">
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="120"
            height="30"
            className="d-inline-block align-top"
            alt="Computing Society"
          />
        </Navbar.Brand>{" "}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/#home">Home</Nav.Link>
            <Nav.Link as={Link} to="/#events_section">Events</Nav.Link>
            <Nav.Link as={Link} to="/#about_section">About</Nav.Link>
            <Nav.Link as={Link} to="/#team_section">Our Team</Nav.Link>
            <Nav.Link as={Link} to="/#link">Sponsors</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navibar;
