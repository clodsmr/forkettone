import {React, useState, useEffect} from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Form, Row, Button, Container } from "react-bootstrap";

export default function BackOffice() {

    const [produttore, setProduttore] = useState({
        nome: "",
        cognome: "",
        email: "",
        nome_azienda: "",
        azienda: "",
        telefono: "",
        p_iva: "",
        via: "",
        cap: "",
        citta: "",
        provincia: "",
        regione: "",
        forma_giuridica: "",
        fatturaElettronica: "",
        consegna: "",

    });

    const handleInput = (propertyName, value) => {
       
        setProduttore({
            ...produttore,
            [propertyName]: value
        })
    }


    const handleSumbit = async (e) => {
        e.preventDefault()
         postProduttore() 
        console.log(produttore)

    }

    const postProduttore = async() => {
        try {
            const response = await fetch("http://localhost:4000/producers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({...produttore})
            });
            console.log(response)
            if(response.ok) {
                alert("Produttore aggiunto con successo")
                setProduttore({
                    nome: "",
                    cognome: "",
            email: "",
            nome_azienda: "",
            azienda: "",
            telefono: "",
            p_iva: "",
            via: "",
            cap: "",
            citta: "",
            provincia: "",
            regione: "",
            forma_giuridica: "",
            fatturaElettronica: "",
            consegna: ""})   }
            else {alert("Errore")}    
        } catch (error) {
            console.log(error)
            
        }
      
    }
 
  
    return(
        <>
        <NavBar />
        <Container fluid style={{marginTop: "200px", marginBottom: "200px"}}>
            <Row className="d-flex justify-content-center"> 
            <Form  style={{width: "30%"}} onSubmit={handleSumbit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Nome</Form.Label>
    <Form.Control type="text" value={produttore.nome} onChange={e => handleInput('nome', e.target.value)}/>
   
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Cognome</Form.Label>
    <Form.Control type="text" value={produttore.cognome} onChange={e => handleInput('cognome', e.target.value)}/>
   
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email"  value={produttore.email} onChange={e => handleInput('email', e.target.value)}/>
   
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>nome_azienda</Form.Label>
    
    <Form.Control type="text"  value={produttore.nome_azienda} onChange={e => handleInput('nome_azienda', e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>azienda</Form.Label>
    
    <Form.Control type="text"  value={produttore.azienda} onChange={e => handleInput('azienda', e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>telefono</Form.Label>
    <Form.Control type="text"  value={produttore.telefono} onChange={e => handleInput('telefono', e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>p.iva</Form.Label>
    <Form.Control type="text"   value={produttore.p_iva} onChange={e => handleInput('p_iva', e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>via</Form.Label>
    <Form.Control type="text"  value={produttore.via} onChange={e => handleInput('via', e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>cap</Form.Label>
    <Form.Control type="text"  value={produttore.cap} onChange={e => handleInput('cap', e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>città</Form.Label>
    <Form.Control type="text"  value={produttore.città} onChange={e => handleInput('città', e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>provincia</Form.Label>
    <Form.Control type="text"   value={produttore.provincia} onChange={e => handleInput('provincia', e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>regione</Form.Label>
    <Form.Control type="text"   value={produttore.regione} onChange={e => handleInput('regione', e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>forma giuridica</Form.Label>
    <Form.Control type="text"   value={produttore.forma_giuridica} onChange={e => handleInput('forma_giuridica', e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>fatt elettronica</Form.Label>
    <Form.Control type="text"  value={produttore.fatturaElettronica} onChange={e => handleInput('fatturaElettronica', e.target.value)}/>

  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="consegna"  value={produttore.consegna} onChange={e => handleInput('consegna', e.target.checked)}/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            </Row>
        </Container>
        <Footer />
        </>
    )
}