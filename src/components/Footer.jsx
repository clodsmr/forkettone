import React from "react";
import { Container, Row, Col, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <Container fluid className="footer-color">
        <Row>
          <Col xs={12} md={6}>
            <div style={{ marginLeft: "10vw" }}>
              <div className="d-flex flex-row">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginLeft: "10px" }}
                >
                  <circle cx="20" cy="20" r="20" fill="#4E9525" />
                </svg>
                <p className="sett21" style={{ marginLeft: "15px" }}>
                  The Forkettone
                </p>
              </div>
              <div>
                <Nav>
                  <Nav.Link>Chi siamo</Nav.Link>
                  <Nav.Link>Prodotti</Nav.Link>
                  <Nav.Link>Blog</Nav.Link>
                  <Nav.Link>Diventa Partner</Nav.Link>
                </Nav>
              </div>
              <Button
                className="mail-btn"
                onClick={() =>
                  (window.location = "mailto:info@theforkettone.com")
                }
              >
                <p className="btn-p">
                  <b>Email:</b> info@theforkettone.com
                </p>
              </Button>
            </div>
          </Col>
          <Col className="footer-dx">
            <Row>
              <Col xs={12} md={6}>
                {/*  link per "/prodotti" e "/diventa-partner" */}
                <Link to={"/prodotti"}>
                  <Button className="right-btn">Guarda i prodotti</Button>
                </Link>
              </Col>
              <Col xs={12} md={6}>
                <Link to={"/diventa-partner"}>
                  <Button className="right-btn">Diventa Partner!</Button>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        className="d-flex flex-row justify-content-between"
        style={{
          backgroundColor: "#0B190D",
          paddingLeft: "10vw",
          color: "white",
          paddingTop: "20px",
          paddingRight: "5vw",
        }}
      >
        <p className="quatt16">The forkettone © 2022 P.IVA 41324414325451</p>
        <div className="quatt16 ">
          <a style={{ marginRight: "10px" }}>Cookie policy</a>
          <a>Privacy policy</a>
        </div>
      </Container>
    </>
  );
}
