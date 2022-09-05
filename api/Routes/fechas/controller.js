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
        const response = await fechaSchema.find()
        return res.status(200).json({
            data : response,
            error : false
        })
    }
    catch (err) {
        return res.status(201).json({
            error : true,
            message : err
        })
    }
}

export default {AgregarFecha, ListarFechas}