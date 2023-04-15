import {CargarPartidos } from "../Partidos";
import axios from 'axios'
import React, { useEffect, useState } from "react";
import {RecuperarFechas} from '../../servicios/FechasService'

function PartidosForm () {

    const [local, setLocal] = useState('')
    const [visitante, setVisitante] = useState('')
    const [equipos, setEquipos] = useState([])
    const [fechas, setFechas] = useState([])
    const [fechaSeleccionada, setFechaSeleccionada] = useState('')

    async function RecuperarEquipos(){
        const url = 'http://localhost:4500/equipos/vertodos'
        const res = await axios.get(url)
        setEquipos(res.data)
        console.log('equipos antes de llegar al useEffect')
        console.log(equipos)
    }

    
    useEffect( () => {
        
        RecuperarEquipos()
        RecuperarFechas(setFechas)
        console.log('equipos dentro del useEffect')
        console.log(equipos)
        console.log('fechas dentro del useEffect')
        console.log(fechas)
    }, [])
    
    async function EnviarPartido(){
        try {
            const url = 'http://localhost:4500/partidos/agregar'
            let partido = {
                fecha : fechaSeleccionada,
                partido: {
                    local: {
                        equipo: local
                    },
                    visitante: {
                        equipo: visitante
                    }
                }
            }
            if (local == visitante) {
                alert("ningun equipo puede jugar contra sí mismo")
                return false
            }
            const res = await axios.post(url, partido)
            console.log(res)
            alert("partido grabado correctamente")
        } catch (error) {
            console.error(error)
        }
    }

    const optionEquipos = 
        equipos.map(e => (<option
                value={e._id}
                key={e._id}>
                    {e.nombre}
            </option>))

    const optionFechas = fechas.map(f => (<option
        value={f._id} 
        key={f._id}
        >{f.numero}</option>))

    let _local = equipos.find(x=> x._id === local)
    let _visitante = equipos.find(x=> x._id === visitante)
    let _fecha = fechas.find(x=> x._id === fechaSeleccionada)

    return (<div>
        <div style={{border: '1px solid blue', backgroundColor: 'GrayText'}}>
            <h3>Seleccione los equipos para el encuentro</h3>
            <p >
                local: <select
                id= 'localSelect'
                onChange={(e) => {
                    const selectedEquipo = e.target.value
                    setLocal(selectedEquipo)
                }} >
                    {optionEquipos}
                </select>
                vs 
                visitante: <select id='visitanteSelect'
                onChange={(e) => {
                    const selectedEquipo = e.target.value
                    setVisitante(selectedEquipo)
                }}>
                    {optionEquipos}
                </select>
                fecha: <select id="fechaSelect"
                onChange={(e) => {
                    setFechaSeleccionada(e.target.value)
                }}>
                    {optionFechas}
                </select>
            </p>
            
            <div>
                <p>El local es: {_local ? _local.nombre : ''} </p>
                <p>El visitante es: {_visitante ? _visitante.nombre : ''} </p>
                <p>Fecha Seleccionada: {_fecha ? _fecha.nombre : ''}</p>
            </div>
            <button onClick={()=>EnviarPartido()}>Agregar Partido</button>
        </div>
    </div>)
}
export {PartidosForm}