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

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const client_id = process.env.REACT_APP_AUTH0_CLIENT_ID

console.log(domain, client_id)

root.render(
  <React.StrictMode>
    <Auth0Provider domain={domain} clientId={client_id} redirectUri={window.location.origin}>
      <App/>
    </Auth0Provider>
  </React.StrictMode>
)