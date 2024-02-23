import "./App.css";
import DataService from "./model/DataService";
import { useEffect, useState } from "react";
import Ingatlan from "./component/Ingatlan";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function App() {
  const DS = new DataService();
  const vegpont = "/ingatlanok";

  const [ingatlanok, setIngatlanok] = useState([{}]);

  useEffect(() => {
    DS.getData(vegpont, setIngatlanok);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Szlucska Dóra - Ingatlan vizsgafeladat
      </header>
      <Container fluid>
        <Col>
          <h1>Ajánlataink</h1>
          <Ingatlan lista={ingatlanok}></Ingatlan>
        </Col>
        <Col>asd</Col>
      </Container>
    </div>
  );
}

export default App;
