const fs = require('fs')
const form = fs.readFileSync("./Views/campeonatos.html")


const listarcampeones = (req, res) => {
    res.end(form)
}

const cargarcampeones = (req, res) => {
    res.send("aqui cargo los campeones")
}

module.exports = {listarcampeones, cargarcampeones}