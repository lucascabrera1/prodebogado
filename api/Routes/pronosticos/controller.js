//logica que va a reaccionar a la request
import Pronostico from '../../Models/Pronostico.js'
import PartidoPronosticado from '../../Models/PartidoPronosticado.js'
import Partido from '../../Models/Partido.js'
import Equipo from '../../Models/Partido.js'
import { ObjectId as ID} from 'mongoose'




const RecuperarMiProde = async (req, res) => {
    try {
        const proderecuperado = await Pronostico.findOne({fecha: req.params.fecha})
        /* console.log('params')
        console.log(req.params)
        console.log('parámetro req.params.fecha')
        console.log(req.params.fecha)
        console.log('prode recuperado')
        console.log(proderecuperado) */
       
        let partidosfecha = []

        for (let elem of proderecuperado.partidospronosticado) {
            console.log('elem: ' + elem)
            let pp = await PartidoPronosticado.findOne({_id: elem})
            console.log('----------------------------comienzo---------------------------------------')
            console.log('pp: ' + pp)
            let partidoreal = await Partido.findOne({_id: pp.partido})
            let local = await Equipo.findOne({
                local:{
                    equipo: {_id: partidoreal.local.equipo}
                }
            })
            console.log('local: ' + local)
            /* console.log('console log linea 24 local: ' + local)
            let equipolocal = await Equipo.findOne({_id: local})
            console.log('equipo local clg linea 26: ' + equipolocal)
            
            let visitante = await Equipo.findOne({_id: partidoreal.visitante.equipo._id})
            console.log('console log linea 29 visitante: ' + visitante) */


            console.log('partido real: ' + partidoreal)
            console.log('partidoreal.local.equipo._id: ' + (partidoreal.local.equipo._id))
            console.log('partidoreal.visitante.equipo: ' + (partidoreal.visitante.equipo._id))
            console.log('--------------------------------fin-----------------------------------')
            /* console.log('partido real')
            console.log(partidoreal)
            console.log('fin partido real')
            console.log(pp)
            console.log('elem')
            console.log(elem)
            console.log('fin elem') */
            let newPP = {
                "_id": elem,
                "partido": pp,
                "local": pp.resultado.goleslocal
            }
            /* console.log('newPP')
            console.log(newPP)
            console.log('fin newPP') */
            partidosfecha.push(elem)
        }
        /* console.log('partidos de la fecha')
        console.log(partidosfecha) */
        res.json(proderecuperado)
        
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: error.message });
    }
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
    RecuperarMiProde,
    obtenerPronosticosDeOtroParticipanteDeUnaDeterminadaFecha,
    obtenerPronosticosDeUnPartido,
    obtenerResultadosDeOtroParticipante,
    subirPronostico,
    modificarPronostico
}