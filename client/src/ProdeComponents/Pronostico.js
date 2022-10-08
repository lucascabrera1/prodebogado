import React from "react";
import {useState } from "react";
import './App.css'

export function Pronostico ({local, visitante}) {
    const [goleslocal, setGoleslocal] = useState(0)
    const [golesvisitante, setGolesvisitante] = useState(0)

    function aumentarlocal () {
        setGoleslocal(goleslocal + 1)
    }

    function decrementarlocal () {
        if (goleslocal > 0) setGoleslocal(goleslocal - 1)
        else (alert("la cantidad de goles no puede ser un numero negativo"))
    }

    function aumentarvisitante () {
        setGolesvisitante(golesvisitante + 1)
    }

    function decrementarvisitante () {
        if (golesvisitante > 0) setGolesvisitante(golesvisitante - 1)
        else (alert("la cantidad de goles no puede ser un numero negativo"))
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