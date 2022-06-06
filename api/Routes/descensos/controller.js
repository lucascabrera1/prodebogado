const listardescensos = (req, res) => {
    res.send("obtengo la lista de descensos")
    console.log("descensos")
}

const cargardescensos = (req, res) => {
    res.send("cargo descensos anteriores al uso de la aplicacion")
}

module.exports = {listardescensos, cargardescensos}