import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar
      bg="light"
      style={{
        height: "60px",
      }}
    >
      <Container
        style={{
          display: "flex",
          alignItems: "center", 
          justifyContent: "space-between", 
          padding: "0 20px",
        }}
      >
        <Navbar.Brand as={Link} to="/home">
          <img
            src="https://cdn.imweb.me/thumbnail/20230116/f28aaa7daa44c.png"
            height="30"
            alt="Logo"
          />
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/simulation">
            Simulation
          </Nav.Link>
          <Nav.Link as={Link} to="/dashboard">
            Dashboard
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
