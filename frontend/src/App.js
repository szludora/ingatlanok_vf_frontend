import "./App.css";
import DataService from "./model/DataService";
import { useEffect, useState } from "react";
import Ingatlan from "./component/Ingatlan";

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
      <h1>Ajánlataink</h1>
      <Ingatlan lista={ingatlanok}></Ingatlan>
    </div>
  );
}

export default App;
