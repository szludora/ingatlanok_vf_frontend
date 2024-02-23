import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

export default function Urlap(props) {
  const [obj, setObj] = useState({});
  const [csekkolva, setCsekkolva] = useState(0);

  function adatValt(event) {
    // console.log(event.target.value);
    // console.log(event.target.id);

    const masolat = { ...obj };
    masolat[event.target.id] = event.target.value;
    setObj(masolat);

    // ha checkbox akkor külön kell kezelni
    if (event.target.type === "checkbox") {
      // A setState függvény előző állapot alapján frissíti az állapotot
      setCsekkolva((prevCsekkolva) => !prevCsekkolva);
      masolat[event.target.id] = !csekkolva; 
    }
    // ha nincs checkbox akkor el lehet küldeni ezzel az egy sorral is
    else {
      masolat[event.target.id] = event.target.value;
    }
  }

  // átadja a szülőnek az adatokat
  function kuldes(event) {
    event.preventDefault();
    // console.log(obj);
    props.kuldes(obj);
  }

  return (
    <>
      <Container>
        <Col lg={4} md={6} sm={8} className="m-auto mt-5">
          <h2>Új hirdetés elküldése</h2>
          <Form onSubmit={kuldes} className="bg-light rounded pt-5 pb-5">
            <Form.Group className="mb-3 w-75 m-auto">
              <Form.Select
                aria-label="kategoria"
                id="kategoria"
                onChange={adatValt}
              >
                <option disabled>Kérem válasszon</option>
                {props.opciok.map((e, i) => {
                  return (
                    <option key={i} value={i + 1}>
                      {e}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 w-75 m-auto" id="formBasicPassword">
              <Form.Label>Hirdetés dátuma</Form.Label>
              <Form.Control
                type="date"
                id="hirdetesDatuma"
                onChange={adatValt}
                min={1920}
                max={2024}
              />
            </Form.Group>
            <Form.Group className="mb-3 w-75 m-auto">
              <Form.Label>Ingatlan leírása</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={adatValt}
                id="leiras"
              />
            </Form.Group>
            <input
              type="checkbox"
              name="tehermentes"
              id="tehermentes"
              onChange={adatValt}
            />
            <label htmlFor="tehermentes">Tehermentes ingatlan</label>
            <br />
            <Form.Group className="mb-3 w-75 m-auto">
              <Form.Label htmlFor="kepUrl">Fénykép az ingatlanról</Form.Label>
              <Form.Control type="text" id="kepUrl" onChange={adatValt} />
            </Form.Group>
            <Form.Group className="mb-3 w-75 m-auto">
              <Form.Label htmlFor="kepUrl">
                Ingatlan ára (x millió Ft)
              </Form.Label>
              <Form.Control type="text" id="ar" onChange={adatValt} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Container>
    </>
  );
}
