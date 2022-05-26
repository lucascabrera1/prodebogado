//logica que va a reaccionar a la request

const obtenerMisPronosticos = (req, res) => {
    res.send("obtengo mis pronosticos de una fecha")
}

const obtenerPronosticosDeUnPartido = (req, res) => {
    res.send("obtengo los pronosticos de los demas participantes para un determinado partido")
}

const obtenerPronosticosDeOtroParticipanteDeUnaDeterminadaFecha = (req, res) => {
    res.send("obtengo los pronosticos de otro participante segun la fecha")
}

const obtenerResultadosDeOtroParticipante = (req, res) => {
    res.send("obtengo los pronosticos de todas las fechas de otro partipante")
}

const subirPronostico = (req, res) => {
    console.log(req.body)
    res.send("subo el pronostico de un partido")
}

const modificarPronostico = (req, res) => {
    console.log(req.body)
    res.send("modifico un pronostico")
}

export default {
    obtenerMisPronosticos,
    obtenerPronosticosDeOtroParticipanteDeUnaDeterminadaFecha,
    obtenerPronosticosDeUnPartido,
    obtenerResultadosDeOtroParticipante,
    subirPronostico,
    modificarPronostico
}