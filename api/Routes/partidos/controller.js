import Partido from '../../Models/Partido.js'
import Fecha from '../../Models/Fecha.js'

const AgregarPartido = async (req, res) => {
    try {
        const fecha = await Fecha.findById(req.body.fecha)
        if(fecha == null) {
            return res.status(404).json({message: "no se encontró la fecha solicitada"})
        } else {
            const partido = new Partido(req.body.partido)
            console.log(partido)
            const partidoguardado = await partido.save()
            fecha.partidos.push(partidoguardado)
            const fechaguardada = await fecha.save()
            return res.json(partidoguardado)
        }
        
    }
    catch (err) {
        console.error(err)
        return res.status(500).json({message : err.message})
    }
}

export default {AgregarPartido}