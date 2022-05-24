import{ React, useState, useEffect} from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

import NavBar from "./NavBar";

import Marketplace from "./Marketplace";
import Footer from "./Footer";

export default function Home() {
   
    return(
    <>
    <NavBar />
    <Container fluid style={{ padding: "0px" }}>
      <Row className="firstRow">
        <Col xs={12} md={6}>
          <svg
            className="tratteggio"
            width="257"
            height="411"
            viewBox="0 0 257 411"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-108.66 408.656C-151.496 386.298 -238.558 305.085 -119.747 175.936C14.3735 30.1451 179.131 97.0268 254.869 1.6299"
              stroke="#FF5C00"
              stroke-width="5"
              stroke-dasharray="35 35"
            />
          </svg>
          <div className="div-titolo">
            <p className="titolo">
              C'è tutto quello che offre la nostra terra!
            </p>
            <p className="sottotitolo">
              Cerca i prodotti naturali dei nostri rivenditori italiani!{" "}
            </p>
            <a href="/ciao">
              <Button className="green-btn">Scopri di più</Button>
            </a>
          </div>
        </Col>
        <Col xs={12} md={6} className="d-flex flex-column-reverse">
          <img
            src="https://i.ibb.co/51FB1kb/Group-28-2x.png"
            
            alt="Group-5"
            border="0"
            style={{ marginBottom: "-100px" }}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={0} md={6}>
          <img
            src="https://i.ibb.co/ryqyJjW/Group-16.png"
            
            alt="image-1"
            border="0"
          />
        </Col>
        <Col xs={12} md={6}>
          <Container style={{ marginTop: "180px" }}>
            <p className="sett36">Chi siamo</p>
            <p className="sei20v">
              Vogliamo portare i prodotti della nostra terra ovunque!
            </p>
            <p className="testo">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </p>
            <a className="sei20v">Leggi di più ---</a>
          </Container>
        </Col>
      </Row>
      <Container
        className="yellow-row d-flex"
       /*  style={{ marginTop: "150px" }} */
        fluid
      >
        <Container className="mrk-container">
          <Row
            className="d-flex flex-row justify-content-between"
            style={{ marginBottom: "50px" }}
          >
            <Col className="d-flex flex-column">
              <p className="sett36">Visita il nostro marketplace</p>
              <p className="sei20v" style={{ marginTop: "-15px" }}>
                Troverai solo prodotti italiani, freschi e di qualità
              </p>
            </Col>
            <Col className="d-flex justify-content-end">
              <a>
                <Button className="btn-black">
                  Guarda la lista completa
                </Button>
              </a>
            </Col>
          </Row>
          <Row>
            <Marketplace />
          </Row>
        </Container>
      </Container>
      <Container className="green-row" fluid style={{ position: "relative" }}>
        <svg
          className="figura1"
          width="127"
          height="166"
          viewBox="0 0 127 166"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-11.3374 70.6826C-25.3693 19.367 39.3639 -17.5086 75.3015 9.48359C111.239 36.4758 101.818 57.6533 119.912 75.5742C142.529 97.9754 105.733 140.707 73.8586 160.831C41.9842 180.954 6.20253 134.827 -11.3374 70.6826Z"
            fill="#EDF0C7"
          />
        </svg>
        <svg
          className="figura2"
          width="50"
          height="59"
          viewBox="0 0 50 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.889427 25.4357C-3.99545 7.57146 18.5399 -5.2659 31.0506 4.13078C43.5614 13.5274 40.2816 20.8999 46.5805 27.1386C54.4542 34.937 41.6446 49.813 30.5483 56.8186C19.452 63.8241 6.99552 47.766 0.889427 25.4357Z"
            fill="#EDF0C7"
          />
        </svg>
        <Container fluid>
          <Row>
            <Col xs={12} md={6} style={{ paddingTop: "15vh", paddingBottom: "20vh", paddingLeft: "10vw" }}>
              <p className="sett36">
                Sei un produttore e vuoi far parte della nostra vetrina?
              </p>
              <p className="sei20">
                Ed entrare nel network di produttori italiani del futuro?
                compila il form e diventa nostro partner!
              </p>
              <a>
                <Button className="btn-black">Diventa Partner!</Button>
              </a>
            </Col>
            <Col xs={0} md={6} className="sopraFooter ">
              <div className="img-footer"></div>
            {/* <img
            style={{position: "absolute", right: "0px", width: "100%", bottom: "-90px"}}
           
            src="https://i.ibb.co/51FB1kb/Group-28-2x.png"
            alt="Group-5"
            border="0"
            
          /> */}
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </Container>
    </>
    )
}