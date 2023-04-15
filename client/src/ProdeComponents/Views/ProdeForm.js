import { Pronostico } from "../Pronostico";
import { useState, useEffect } from "react";
import {RecuperarFechas, RecuperarFecha} from '../../servicios/FechasService'
import {GuardarProde} from '../../servicios/ProdesService'

function ProdeForm ({idusuario}) {
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
            <fieldset>
                <select id="fechaselect"
                    onChange={ e => {
                    setIdFecha(e.target.value)
                    console.log(fecha)
                }
                }>{optionsFechas}</select>
            </fieldset>
            <h2>No hay partidos todavia</h2>
        </div>
    }

    const enviarResultados = () => {
        GuardarProde(idusuario, idfecha, partidos.map((item) => {
            return {partido:item._id,resultado:item.resultado}
        }))
    }
    
    return (<div>
        <h1>Bienvenidos a la página del prode</h1>
        fecha: <select id="fechaSelect"
                onChange={(e) => {
                    setIdFecha(e.target.value)
                    setFecha(fechas.find(x=> x._id === idfecha))
                }}>
                    {optionsFechas}
                </select>
                <p>fecha seleccionada: {fecha.numero}</p>
        <div>
            {partidosapronosticar}
        </div>
        <button onClick={enviarResultados}>Enviar mis pronósticos</button>
    </div>)
}
export {ProdeForm}
