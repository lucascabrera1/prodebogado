import {CargarPartidos } from "../Partidos";
import axios from 'axios'
import React, { useEffect, useState } from "react";

function PartidosForm () {

    const [local, setLocal] = useState('')
    const [visitante, setVisitante] = useState('')
    const [equipos, setEquipos] = useState([{}])
    
    useEffect( () => {
        async function RecuperarEquipos(){
            const url = 'http://localhost:4500/equipos/vertodos'
            const res = await axios.get(url)
            setEquipos(res.data)
            console.log('equipos dentro del useeffect ')
            console.log(equipos)
        }
        RecuperarEquipos()
    }, [])
    console.log('equipos fuera del useeffect ')
    console.log(equipos)

    async function EnviarPartido(){
        try {
            const url = 'http://localhost:4500/partidos/agregar'
            const res = await axios.post(url)
            
        } catch (error) {
            console.error(error)
        }
    } 

    return (<div>
        <div style={{border: '1px solid blue', backgroundColor: 'GrayText'}}>
            <h3>Seleccione los equipos para el encuentro</h3>
            <p >
                local: <select 
                id= 'localSelect'
                onChange={(e) => {
                    const selectedEquipo = e.target.value
                    setLocal(selectedEquipo)
                    console.log('Equipo seleccionado local : ')
                    console.log(local)
                }} >{
                equipos.map(e => (<option 
                        value={e._id}
                        key={e._id}>
                            {e.nombre}
                    </option>))}
                </select>
                vs 
                visitante: <select id='visitanteSelect'
                onChange={(e) => {
                    const selectedEquipo = e.target.value
                    setVisitante(selectedEquipo)
                    console.log('Equipo seleccionado visitante : ')
                    console.log(visitante)
                }}>{
                        equipos.map(e => (<option 
                            key={e._id} 
                            value={e._id}>
                                {e.nombre}
                    </option>))}
                </select>
            </p>
            <p>El local es: {local} </p>
            <p>El visitante es: {visitante} </p>
            <button>Agregar Partido</button>
        </div>
    </div>)
}
export {PartidosForm}