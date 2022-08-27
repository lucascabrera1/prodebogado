//logica que va a reaccionar a la request
import Pronostico from "../../Models/Pronostico"


const obtenerMisPronosticos = (req, res) => {
    res.send("obtengo mis pronosticos de una fecha")
    console.log("obtengo mis pronosticos de una fecha")
}

const obtenerPronosticosDeUnPartido = (req, res) => {
    res.send("obtengo los pronosticos de los demas participantes para un determinado partido")
    console.log("obtengo los pronosticos de los demas participantes para un determinado partido")
}

const obtenerPronosticosDeOtroParticipanteDeUnaDeterminadaFecha = (req, res) => {
    res.send(`obtengo los pronosticos de otro participante segun la fecha ${req.params.idfecha}`)
<<<<<<< HEAD
    console.log("obtengo los pronosticos de otro participante segun la fecha")
=======
    console.log(`obtengo los pronosticos de otro participante segun la fecha ${req.params.idfecha}`)
>>>>>>> 263ac45f14296bd75f92b2dab7b6d4c29054e583
}

const obtenerResultadosDeOtroParticipante = (req, res) => {
    res.send("obtengo los pronosticos de todas las fechas de otro partipante")
    console.log("obtengo los pronosticos de todas las fechas de otro partipante")
}

const subirPronostico = (req, res) => {
<<<<<<< HEAD
    console.log(req.body)
    const pronostico = await pronostico.save()
    //res.send("subo el pronostico de un partido")
    return res.send(pronostico)
=======
    console.log("subi pronostico/s")
    console.log(req.body)
    res.send("subo el pronostico de un partido")
>>>>>>> 263ac45f14296bd75f92b2dab7b6d4c29054e583
}

const modificarPronostico = (req, res) => {
    console.log(req.body)
    res.send("modifico un pronostico")
}

export default  {
    obtenerMisPronosticos,
    obtenerPronosticosDeOtroParticipanteDeUnaDeterminadaFecha,
    obtenerPronosticosDeUnPartido,
    obtenerResultadosDeOtroParticipante,
    subirPronostico,
    modificarPronostico
}