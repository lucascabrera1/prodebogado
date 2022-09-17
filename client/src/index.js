import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./Button";
import { Greeting, UserCard } from "./Greeting";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Posts } from "./Posts";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const handleChange = (event) => {
  let value = event.target.value;
  console.log(value);
};

const Users = [
  {
    id: 1,
    name: "Riley Reid",
    image: 'https://robohash.org/1'
  },
  {
    id:2,
    name:"Nicole Aniston",
    image: 'https://robohash.org/2'
  }
]

root.render(
  <>
    {/* <Greeting title="hello peri" name="one" />
    <Greeting title="hello zulatto" name="two" married={false} />  */}
    <Greeting title="hello schiaves" name="three" married={false} />
    {/* <UserCard
      title="titulo del usercard"
      name="nombre del u.c."
      numeros={[0, 3, 1, 7]}
      direccion={{
        calle: "Moreno",
        numeral: "998",
        localidad: "Coronel Bogado",
      }}
    />
    <UserCard
      title="hello usercard"
      name="name usercard"
      numeros={[2, 3, 4]}
      direccion={{ 
        calle: "Rioja", 
        numeral: "1845", 
        localidad: "Rosario" 
      }}
    /> */}
    <UserCard
      title="hello usercard 2"
      name="name usercard 2"
      numeros={[2, 3, 4, 10]}
      direccion={{
        calle: "Belgrano",
        numeral: "321",
        localidad: "Coronel Bogado",
      }}
    />
    <input id="inputboton" onChange={handleChange} />
    <Button text="Boton 1" />
    <Button text="Boton 2" name="" />
    <TaskCard ready={true} text="primer tarea" /> <br></br>
    <TaskCard ready={false} text="segunda tarea" />
    <Saludar></Saludar>
    <form
      onSubmit={(event) => {
        event.preventDefault()
        console.log("sending data form");
      }}
    >
      <button>Send...</button>
      <h1>Registro de usuarios</h1>
    </form>
    <Posts text = "primera publicacion"/>
    {Users.map( (user, index) => {
      console.log(index)
      return <div key={index}>
        <h2>{user.name}</h2>
        <img src={user.image}></img>
      </div> 
    })}
  </>
);
