import "./App.css";
import DataService from "./model/DataService";
import { useEffect, useState } from "react";
import Ingatlan from "./component/Ingatlan";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Urlap from "./component/Urlap";

function App() {
  const DS = new DataService();
  const vegpont = "/ingatlanok";
  const vegpontOpciok = "/kategoriak";

  // az opciókat a szerverről kéri le a controllerből
  const [ingatlanok, setIngatlanok] = useState([{}]);
  const [opciok, setOpciok] = useState([]);

  useEffect(() => {
    DS.getData(vegpont, setIngatlanok);
    DS.getOpciok(vegpontOpciok, setOpciok)
  }, []);

  // gombra kattintva egy alert ablak előugrik
  function megnez(e) {
    alert(e.kategoriaNev + "\n" + e.leiras + "\n" + e.hirdetesDatuma + "\n" + (e.tehermentes == 1 ? "tehermentes" : "nem tehermentes") + "\n" + e.ar + " millió ft");
  }

  // elküldi a szerverre és egyből betölti az oldalra
  function kuldes(e){
    console.log(e)
      DS.postData(vegpont, e, ()=>{DS.getData(vegpont, setIngatlanok)});
  }

  return (
    <div className="App">
      <header className="App-header">
        Szlucska Dóra - Ingatlan vizsgafeladat
      </header>
      <Urlap opciok={opciok} kuldes={kuldes}></Urlap>
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
