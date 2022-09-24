import React from "react";
import ReactDOM from "react-dom/client";
import ListarPronosticos from './ProdeComponents/Pronosticos-Lista.js'
import { Pronostico } from "./ProdeComponents/Pronostico.js";
import {ProdeForm} from "./ProdeComponents/ProdeForm.js"
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <div>
    <h1 style = {{color: "red", backgroundColor: "black"}}> Pronosticos de la fecha</h1>
    <ListarPronosticos/> <br/>
    <Pronostico local="San Lorenzo" visitante="River Plate"/>
    <ProdeForm/>
    <button type="submit">Enviar mis pronósticos</button>
  </div>
)
