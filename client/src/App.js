import React from "react";
import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'

import PartidosPage from './ProdeComponents/Pages/ProdePage.js'
import NotFound from "./ProdeComponents/Pages/NotFound.js";
import TablaPosiciones from "./ProdeComponents/Pages/TablaPosicionesPage.js";
import TablaDescensos from "./ProdeComponents/Pages/HistorialDescensosPage.js";
import Login from "./ProdeComponents/Pages/LoginPage.js";

export default function App () {
    return (
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
                <Route path="/" element = {<PartidosPage />} ></Route>
                <Route path="/prode" element={<PartidosPage/>}></Route>
                <Route path="/historialdescensos" element={<TablaDescensos/>}></Route>
                <Route path="/tablaposiciones" element={<TablaPosiciones/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </Router>
    )
}