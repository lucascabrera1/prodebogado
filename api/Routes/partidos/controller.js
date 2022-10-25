import Partido from '../../Models/Partido.js'

const AgregarPartido = async (req, res) => {
    try {
        const partido = new Partido(req.body)
        console.log(partido)
        const partidoguardado = await partido.save()
        return res.json(partidoguardado)
    }
    catch (err) {
        console.error(err)
        return res.status(500).json({message : err.message})
    }
}

export default {AgregarPartido}