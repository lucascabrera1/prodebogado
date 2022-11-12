import Fecha from '../../Models/Fecha.js'
import Partido from '../../Models/Partido.js'

const AgregarFecha = async (req, res) => {
    try {
        const fecha = new Fecha (req.body)
        console.log(fecha)
        const fechaguardada = await fecha.save()
        return res.json(fechaguardada)
    }
    catch (err) {
        console.error(err)
        return res.status(500).json({message : message.error})
    }
}

const ListarFechas = async (req, res) => {
    try{
        const fechas = await Fecha.find({})
        let fechasdevueltas = []
        console.log(fechas)
        for (const elem of fechas) {
            let newElem = {
                "_id" : elem._id,
                "nombre" : elem.nombre,
                "numero" : elem.numero,
                "fechacomienzo" : elem.fechacomienzo
            }
            fechasdevueltas.push(newElem)
        }
        return res.json(fechasdevueltas);
    }
    catch (err) {
        return res.status(500).json({
            error : true,
            message : err
        })
    } 
}

const FindFechaById = async (req, res) => {
    try {
        console.log('llega al findfechabyid')
        const fecha = await Fecha.findById(req.params.id)
        console.log(fecha)
        let partidos = []
        for (const elem in fecha.partidos){
            let newPartido = {
                "_id": elem._id
            }
            partidos.push(newPartido)
        }
        let newFecha = {
            "_id" : fecha._id,
            "nombre" : fecha.nombre,
            "numero" : fecha.numero,
            "fechacomienzo" : fecha.fechacomienzo,
            "partidos" : fecha.partidos
        }
        console.log('partidos de la fecha: ')
        console.log(fecha.partidos)
        return res.json(newFecha)
    } catch (error) {
        console.log('error: ')
        console.error(error)
        return res.status(500).json({
            error : true,
            message : error
        })
    }
}

export default {AgregarFecha, ListarFechas, FindFechaById}