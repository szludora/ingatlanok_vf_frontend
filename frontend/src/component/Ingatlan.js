import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "./kartya.css"

export default function Ingatlan(props) {
  function megnez(e){
    props.megnez(e)
  }
  return (
      <Row style={{border: "1px solid gray", padding: '2em'}}>
        <Col className="fejlec" lg={2}><p>Kategória</p></Col>
        <Col className="fejlec" lg={2}><p>Leírás</p></Col>
        <Col className="fejlec" lg={2}><p>Hirdetés dátuma</p></Col>
        <Col className="fejlec" lg={2}><p>Tehermentes</p></Col>
        <Col className="fejlec" lg={4}><p>Fénykép</p></Col>
        {props.lista.map((e, i) => {
          return (
            <Col className="kartya" key={i} style={{border: "1px solid gray"}} sm={5} lg={12}>
              <Row>
              <Col className="kategoria" lg={2}><p>{e.kategoriaNev}</p></Col>
              <Col className="leiras" lg={2}><p>{e.leiras}</p></Col>
              <Col className="tartalom" lg={2}><p>{e.hirdetesDatuma}</p></Col>
              <Col className="tartalom" lg={2} style={{ color: e.tehermentes == 0 ? "red" : "green" }}>
                <p>{e.tehermentes === 0 ? "nem" : "igen"}</p>
              </Col>
              <Col className="kep" lg={4}>
                <Image src={e.kepUrl} thumbnail></Image>
              <Button className="gomb" onClick={()=>{megnez(e)}}>Megnéz</Button>
              </Col>
              </Row>
            </Col>
          );
        })}
      </Row>
  );
}
