//logica que va a reaccionar a la request
import Pronostico from '../../Models/Pronostico.js'

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
    console.log("obtengo los pronosticos de otro participante segun la fecha")
}

const obtenerResultadosDeOtroParticipante = (req, res) => {
    res.send("obtengo los pronosticos de todas las fechas de otro partipante")
    console.log("obtengo los pronosticos de todas las fechas de otro partipante")
}

const subirPronostico = async (req, res) => {
    try {
        const pronostico = new Pronostico (req.body)
        console.log(pronostico)
        const pronosticoguardado = await pronostico.save()
        return res.json(pronosticoguardado)
    }
    catch (error) {
        console.error(error)
        return res.status(500).json({message: error.message})
    }
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