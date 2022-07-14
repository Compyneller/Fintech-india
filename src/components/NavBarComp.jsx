import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBarComp = () => {
  return (
    <Navbar
      style={{
        background: "#5000CA",
        position: "sticky",
        top: "0",
        zIndex: "1000",
      }}
      expand="lg"
    >
      <Container className="text-light" style={{ padding: "0 1rem" }}>
        <Navbar.Brand href="/">
          <h3 className="text-light">Fintech India</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="text-light" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="text-light" href="/about">
              About Us
            </Nav.Link>
            <Nav.Link className="text-light" href="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComp;
