import { Pronostico } from "../Pronostico";
import { RecuperarProde } from "../../servicios/ProdesService";
import { useState, useEffect } from "react";
import {RecuperarFechas, RecuperarFecha} from '../../servicios/FechasService'

export default function MisProdes ({idusuario}) {
    const [idfecha, setIdFecha] = useState("")
    const [fechas, setFechas] = useState([]) 
    const [fecha, setFecha] = useState("")
    const [prode, setProde] = useState([])

    setIdFecha(Object("643657ae9af3f5b7bc2c105a"))

    /* useEffect( () => {
        RecuperarFechas(setFechas)
        console.log('fechas')
        console.log(fechas)
    }, []) */

    

    useEffect(({idfecha}) => {

        if (idfecha !== ""){
            console.log(fecha)
            RecuperarFecha(idfecha, setFecha, setProde)
            console.log('idfecha: ' + idfecha)
        }
    }, [idfecha])

    const RecuperarProdeSeleccionado = idfecha => {
        console.log(idfecha)
        const proderecuperado = RecuperarProde(idfecha)
        console.log(proderecuperado)
    } 

    return <div>
        <h1>Algo</h1>
        <option>option</option>
        {RecuperarProdeSeleccionado(idfecha)}
    </div>
}