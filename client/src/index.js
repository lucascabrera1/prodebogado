import React from "react";
import ReactDOM from "react-dom/client";
//import { Pronostico } from "./ProdeComponents/Pronostico.js";
import {ProdeForm} from "../src/ProdeComponents/Views/ProdeForm.js"
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <div>
    <h1 style = {{color: "red", backgroundColor: "black"}}> Pronosticos del mundial, fase de grupos</h1>
    <ProdeForm/>
    <button type="submit">Enviar mis pronósticos</button>
  </div>
)
