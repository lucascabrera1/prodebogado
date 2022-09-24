import { useState, useEffect } from "react";
import { pronosticos as data } from "./Pronosticos-data.js";

console.log(data)

function ListarPronosticos () {
    const [pronosticos, setPronosticos] = useState([])
    useEffect(() => {
        setPronosticos(data)
    }, [])
    
    return (<div>
            {
                pronosticos.map(pron => <div key={pron._id} style ={{backgroundColor : "green"}}>
                    <h2>{pron.local.nombre} vs {pron.visitante.nombre}</h2>
                    <h2>{pron.local.goles} - {pron.visitante.goles}</h2>
                </div>)
            }
    </div>)
}

export default ListarPronosticos