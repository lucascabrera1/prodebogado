//logica que va a reaccionar a la request
import Pronostico from '../../Models/Pronostico.js'
import PartidoPronosticado from '../../Models/PartidoPronosticado.js'

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
        let partidospronosticados = []
        for(const elem of req.body.partidospronosticado) {
            const partidopronosticado = new PartidoPronosticado()
            partidopronosticado.partido = elem.partido
            partidopronosticado.resultado = elem.resultado
            const partidopronosticadoguardado = await partidopronosticado.save()
            partidospronosticados.push(partidopronosticadoguardado._id)
        }
        const pronostico = new Pronostico ()
        pronostico.usuario = req.body.usuario
        pronostico.fecha = req.body.fecha
        pronostico.partidospronosticado = partidospronosticados
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