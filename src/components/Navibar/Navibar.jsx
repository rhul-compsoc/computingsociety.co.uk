import * as React from "react";
import Nav from "react-bootstrap/Nav";
// Load components from React-Bootstrap
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo.svg";

const Navibar = (props) => {
  return (
    <Navbar fixed="top" sticky="top " bg="compsoc" expand="lg">
      <div className="container">
        <Navbar.Brand href="#home">
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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Events</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Our Team</Nav.Link>
            <Nav.Link href="#link">Sponsors</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navibar;
