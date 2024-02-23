import Table from "react-bootstrap/Table";

export default function Ingatlan(props) {
  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>Kategória</th>
          <th>Leírás</th>
          <th>Hirdetés dátuma</th>
          <th>Tehermentes</th>
          <th>Fénykép</th>
        </tr>
      </thead>
      <tbody>
        {props.lista.map((e, i) => {
          let teher = "igen";
          if (e.tehermentes === 1) {
            teher = "nem";
          }
          //   console.log(e.hirdetesDatuma.split("-").join("."));
          return (
            <tr key={i}>
              <td>{e.kategoriaNev}</td>
              <td>{e.leiras}</td>
              <td>{e.hirdetesDatuma}</td>
              <td style={{ color: teher == "nem" ? "red" : "yellowgreen" }}>
                {teher}
              </td>
              <td>
                <img src={e.kepUrl} alt="kép" style={{ width: "10em" }} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
