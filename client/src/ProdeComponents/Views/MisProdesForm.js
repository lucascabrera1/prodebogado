import { Pronostico } from "../Pronostico";
import { RecuperarProde } from "../../servicios/ProdesService";
import { useState, useEffect } from "react";
import {RecuperarFechas, RecuperarFecha} from '../../servicios/FechasService'

export function MisProdes ({idusuario}) {
    const [idfecha, setIdFecha] = useState("")
    const [fechas, setFechas] = useState([]) 
    const [fecha, setFecha] = useState("")
    const [partidos, setPartidos] = useState([])

    useEffect( () => {
        RecuperarFechas(setFechas)
    }, [])
    useEffect(() => {
        if (idfecha !== ""){
            console.log(fecha)
            RecuperarFecha(idfecha, setFecha, setPartidos)
        }
    }, [idfecha])

    return <div>
        <h1>Algo</h1>
        <RecuperarProde/>
        <pre><Pronostico/></pre>
    </div>
}