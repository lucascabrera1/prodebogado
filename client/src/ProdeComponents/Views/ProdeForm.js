import { Pronostico } from "../Pronostico";
import { useState, useEffect } from "react";
import {RecuperarFechas, RecuperarFecha} from '../../servicios/FechasService'
import {GuardarProde} from '../../servicios/ProdesService'

function ProdeForm ({idusuario}) {
    console.log('id de usuario: ')
    console.log(idusuario)
    const [idfecha, setIdFecha] = useState("")
    const [fechas, setFechas] = useState([]) 
    const [fecha, setFecha] = useState({})
    const [partidos, setPartidos] = useState([])


    useEffect( () => {
        console.log('entra al use effect')
        RecuperarFechas(setFechas)
    }, [])

    useEffect(() => {
        if (idfecha !== ""){
            RecuperarFecha(idfecha, setFecha, setPartidos)
        }
    }, [idfecha])

    const opVacio = (<option value="" key="">Seleccione</option>)

    const optionFechas = fechas.map(f => (<option
        value={f._id} 
        key={f._id}
    >{f.numero}</option>))

    let optionsFechas = [opVacio]
    optionsFechas = optionsFechas.concat(optionFechas)

    let partidosapronosticar = <div>Seleccione una fecha</div>
    if (partidos.length>0) {
        partidosapronosticar = partidos.map((elem, index) => {
            elem.resultado = {
                goleslocal : 0,
                golesvisitante : 0
            }
            return <Pronostico 
                key={index} 
                local={elem.local.equipo.nombre} 
                resultado={elem.resultado}
                visitante={elem.visitante.equipo.nombre} 
            />
        }) 
    } else {
        return <div>
            <h2>No hay partidos todavia</h2>
        </div>
        
    }

    const enviarResultados = () => {
        console.log(partidos)
        GuardarProde(idusuario, idfecha, partidos.map((item) => {return {partido:item._id,resultado:item.resultado}}))
    }
    
    return (<div>
        <h1>Bienvenidos a la página del prode</h1>
        fecha: <select id="fechaSelect"
                onChange={(e) => {
                    setIdFecha(e.target.value)
                    setFecha(fechas.find(x=> x._id === idfecha))
                    console.log('fecha')
                    console.log(fecha)
                }}>
                    {optionsFechas}
                </select>
        {/* 
        <div>
            <h2>Grupo G</h2>
            <Pronostico local="Suiza" visitante="Camerún"/>
            <Pronostico local="Brasil" visitante="Serbia y Montenegro"/>
            <Pronostico local="Camerún" visitante="Serbia y Montenegro"/>
            <Pronostico local="Brasil" visitante="Suiza"/>
            <Pronostico local="Camerún" visitante="Brasil"/>
            <Pronostico local="Serbia y Montenegro" visitante="Suiza"/>
        </div> */}
        <div>
            {partidosapronosticar}
        </div>
        <button onClick={enviarResultados}>Enviar mis pronósticos</button>
    </div>)
}
export {ProdeForm}
