import Equipo from '../../Models/Equipo.js'

const ListarEquipos = async (req, res) => {
    try {
        console.log(req.params)
        const equipos = await Equipo.find({})
        let equiposdevueltos = []
        console.log(equipos)
        for (const elem of equipos) {
            let newElem = {
                "_id" : elem._id,
                "nombre" : elem.nombre,
                "localidad" : elem.localidad
            }
            equiposdevueltos.push(newElem)
        }
        return res.json(equiposdevueltos);
    } catch (error) {
        console.log("error.message: ")
        return res.status(500).json({ message: error.message._message })
    }
}

const AgregarEquipo = async (req, res) => {
    try {
        const equipo = new Equipo(req.body)
        console.log(equipo)
        const equipoguardado = await equipo.save()
        return res.json(equipoguardado)
    }
    catch (err) {
        console.error(err)
        return res.status(500).json({message : message.error})
    }
}

export default {AgregarEquipo, ListarEquipos}