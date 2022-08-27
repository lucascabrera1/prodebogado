<<<<<<< HEAD
const listarcampeonatos = (req, res) => {
    res.send("obtengo la lista de campeonatos")
    console.log("descensos")
}

export default {listarcampeonatos}
=======
const fs = require('fs')
const form = fs.readFileSync("./Views/campeonatos.html")


const listarcampeones = (req, res) => {
    res.end(form)
}

const cargarcampeones = (req, res) => {
    res.send("aqui cargo los campeones")
}

module.exports = {listarcampeones, cargarcampeones}
>>>>>>> 263ac45f14296bd75f92b2dab7b6d4c29054e583
