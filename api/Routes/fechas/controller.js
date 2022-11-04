import Fecha from '../../Models/Fecha.js'

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
                "numero" : elem.numero
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
        const fecha = Fecha.findById(req.params.id)
        let newFecha = {
            "_id" : fecha._id,
            "nombre" : fecha.nombre,
            "numero" : fecha.numero
        }
        return res.json(newFecha)
    } catch (error) {
        return res.status(500).json({
            error : true,
            message : error
        })
    }
}

export default {AgregarFecha, ListarFechas, FindFechaById}