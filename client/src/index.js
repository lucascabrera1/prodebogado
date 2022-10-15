import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import {Auth0Provider} from '@auth0/auth0-react'
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);


/*
root.render(
  <div>
    <h1 style = {{color: "red", backgroundColor: "black"}}> Pronosticos del mundial, fase de grupos</h1>
    <ProdeForm/>
    <button type="submit">Enviar mis pronósticos</button>
  </div>

) */

//root.render(<App/>)

console.log(process.env.REACT_APP_AUTH0_DOMAIN,
   process.env.REACT_APP_AUTH0_CLIENT_ID)

root.render(
  <React.StrictMode>
    <Auth0Provider>
      <App/>
    </Auth0Provider>
  </React.StrictMode>
)