import { Button } from "react-bootstrap";
import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="20" fill="#4E9525" />
          </svg>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="sett21" style={{ color: "white" }}>
              The Forkettone
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Chi siamo</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Prodotti
            </Nav.Link>

            <Nav.Link eventKey={3} href="#memes">
              Contatti
            </Nav.Link>
            <Nav.Link eventKey={4} href="#memes">
              Blog
            </Nav.Link>
          </Nav>
          <Link to={"/backOffice"}>
            <Button className="nav-btn" style={{ marginLeft: "30px" }}>
              Back Office
            </Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
