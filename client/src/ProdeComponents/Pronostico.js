import React from "react";
import {useState } from "react";
import './App.css'
//este componente va a la base de datos, recupera los partidos de la fecha para que el usuario realice el prode
export function Pronostico ({local, visitante, resultado}) {
    const [goleslocal, setGoleslocal] = useState(0)
    const [golesvisitante, setGolesvisitante] = useState(0)

    function actualizarResultado(prop,goles) {
        resultado[prop] = goles
    }

    function aumentarlocal () {
        let goles = goleslocal + 1
        setGoleslocal(goles)
        actualizarResultado("goleslocal",goles)
    }

    function decrementarlocal () {
        if (goleslocal > 0) {
            let goles = goleslocal - 1
            setGoleslocal(goles)
            actualizarResultado("goleslocal",goles)
        } else (alert("la cantidad de goles no puede ser un numero negativo"))
    }

    function aumentarvisitante () {
        let goles = golesvisitante + 1
        setGolesvisitante(goles)
        actualizarResultado("golesvisitante",goles)
    }

    function decrementarvisitante () {
        if (golesvisitante > 0) {
            let goles = golesvisitante -1
            setGolesvisitante(goles)
            actualizarResultado("golesvisitante",goles)
        } else (alert("la cantidad de goles no puede ser un numero negativo"))
    }

    function resetcounter (){
        setGoleslocal(0)
        setGolesvisitante(0)
    }

    return (
        <>
            <h3>Pronostico del partido: {local} vs {visitante}</h3> <br/>
            <div className="App-header">
                <div className="app">
                    <div className="divcounter">
                        <button onClick={ ()=> aumentarlocal()}>+1</button>
                        <p>Goles de {local} : {goleslocal}</p>
                        <button onClick={() => decrementarlocal()}>-1</button>
                    </div>
                    <div className="divcounter">
                        <button onClick={()=> resetcounter()}>Reset</button>
                    </div>
                    <div className="divcounter">
                        <button onClick={()=> aumentarvisitante()}>+1</button>
                        <p>Goles de {visitante}: {golesvisitante}</p>
                        <button onClick={()=> decrementarvisitante()}>-1</button> <br/>
                    </div>
                </div>
            </div>
        </>
    )
}