import Campeonato from '../../Models/Campeonato.js'

const listarcampeonatos = (req, res) => {
    res.send("obtengo la lista de campeonatos")
    console.log("descensos")
}

const AgregarCampeonato = async (req, res) => {
    try {
        const campeonato = new Campeonato (req.body)
        console.log(campeonato)
        const campeonatoguardado = await campeonato.save()
        return res.json(campeonatoguardado)
    }
    catch (error) {
        console.error(error)
        return res.status(500).json({message: error.message})
    }
}

export default {listarcampeonatos, AgregarCampeonato}
