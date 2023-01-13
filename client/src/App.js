import React, { useState } from "react";
import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'

import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./ProdeComponents/Views/Profile.js";
import LoginButton from "./ProdeComponents/Views/LoginButton.js";
import LogoutButton from "./ProdeComponents/Views/LogoutButton.js";
import PartidosPage from './ProdeComponents/Pages/ProdePage.js'
import NotFound from "./ProdeComponents/Pages/NotFound.js";
import {ProdeForm} from "./ProdeComponents/Views/ProdeForm.js";
import TablaPosiciones from "./ProdeComponents/Pages/TablaPosicionesPage.js";
import TablaDescensos from "./ProdeComponents/Pages/HistorialDescensosPage.js";
import Login from "./ProdeComponents/Pages/LoginPage.js";
import { PartidosForm } from "./ProdeComponents/Views/PartidosForm.js";
import { useEffect } from "react";
import { RecuperarUsuarioPorEmail } from "./servicios/UsuariosService.js";

export default function App () {
    const {user, isAuthenticated, isLoading} = useAuth0()
    const [usuario, setUsuario] = useState(null)
    console.log("isAuthenticated: " + isAuthenticated)
    console.log("isLoading: " + isLoading)
    useEffect( ()=> {
        const llamada =async () => {
            const res = await RecuperarUsuarioPorEmail(user.email)
            setUsuario(res)
        }
        if (user && user.email) {
            llamada()
        }
    } ,[user])
    console.log(usuario)
    
    if (isLoading) return <h1>Cargando la Página, espere...</h1>
    return (<div>
        {isAuthenticated ? <div><LogoutButton/></div> : <LoginButton/>}
        <Profile/>
        <Router>
            <NavLink/>
            <Routes>
                {/* 
                <Route path="/About" element = {<AbputPage/>} ></Route>
                <Route path="/Users" element = {<UsersPage/>} ></Route>
                <Route path="/Usuarios" element={<Navigate replace to="/Users" />}></Route>
                <Route path="/Users/:id" element={<UserPage/>}></Route>
                <Route path="/Users/new" element={<p>new user</p>}></Route>
                <Route path="/dashboard/*" element={<Dashboard/>} >
                    <Route path='welcome' element={<p>welcome</p>}></Route>
                    <Route path='goodbye' element={<p>goodbye</p>}></Route>
                </Route>*/}
                <Route path="*" element= {<NotFound/>}></Route>
                <Route path="/" element = {<Login />} ></Route>
                <Route path="/prode" element={<ProdeForm idusuario={usuario == null ? null : usuario._id }/>}></Route>
                <Route path="/historialdescensos" element={<TablaDescensos/>}></Route>
                <Route path="/tablaposiciones" element={<TablaPosiciones/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/partidos" element={<PartidosForm/>}></Route>
            </Routes>
        </Router>
    </div>
    )
}