import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import{ React, useState, useEffect} from "react";
import Home from "./components/Home";
import BackOffice from "./components/BackOffice";

function App() {

  const [producers, setProducer] = useState([]);
  const [products, setProducts] = useState([]);
  const [produttore, setProduttore] = useState({});

  const getProducers = async () => {
      try {
         
          const response = await  fetch("http://localhost:4000/producers")
          const data = await response.json();
         
          setProducer(data);
          console.log(data)
          
      } catch (error) {
          console.log(error);
          
      }   
  }

  useEffect(() => {
      
      getProducers();
      console.log(producers)
  }, []);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/backOffice" produttore={produttore} element={<BackOffice />} />
    </Routes>
     </BrowserRouter>
    
  );
}

export default App;
