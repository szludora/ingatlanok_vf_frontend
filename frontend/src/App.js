import "./App.css";
import DataService from "./model/DataService";
import { useEffect, useState } from "react";
import Ingatlan from "./component/Ingatlan";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function App() {
  const DS = new DataService();
  const vegpont = "/ingatlanok";

  const [ingatlanok, setIngatlanok] = useState([{}]);

  useEffect(() => {
    DS.getData(vegpont, setIngatlanok);
  }, []);

  function megnez(e) {
    alert(e.kategoriaNev + "\n" + e.leiras + "\n" + e.hirdetesDatuma + "\n" + (e.tehermentes == 1 ? "tehermentes" : "nem tehermentes") + "\n" + e.ar + " millió ft");
  }

  return (
    <div className="App">
      <header className="App-header">
        Szlucska Dóra - Ingatlan vizsgafeladat
      </header>
      <Container fluid>
        <Col>
          <h1>Ajánlataink</h1>
          <Ingatlan lista={ingatlanok} megnez={megnez}></Ingatlan>
        </Col>
      </Container>
    </div>
  );
}

export default App;
