export function Greeting({ title, name, married = true }) {
  /*const name = {
        first : "Lucas",
        last: "Cabrera",
        apodo: "Perico"
    }*/

  function add(a, b) {
    return a * b;
  }

  return (
    <div>
      <h1>Hello World from function greeting</h1>
      <h2>
        first name {name.first} {title}
      </h2>
      <h2>
        last name {name.last} {name}
      </h2>
      <h2>apodo : {name.apodo}</h2>
      <h2>estado civil: {married ? "Casado" : "Soltero"}</h2>
      <p> function add {add(9, 6)}</p>
    </div>
  );
}

export function UserCard(props) {
  return (
    <div>
      <h1>User Card</h1>
      <h2>titulo: {props.title}</h2>
      <h2>nombre : {props.name}</h2>
      <h2>numeros : {props.numeros}</h2>
      <p>
        calle: {props.direccion.calle}  <br/>
        numeral : {props.direccion.numeral} <br/>
        localidad: {props.direccion.localidad} 
      </p>
    </div>
  );
}
