import Descenso from "../../Models/Descenso.js"

const listardescensos = (req, res) => {
    res.send("obtengo la lista de descensos")
    console.log("descensos")
}

const AgregarDescenso = async (req, res) => {
    console.log("req" + req)
    console.log("req.body " + req.body)
    try {
        const descenso = new Descenso (req.body)
        console.log(descenso)
        const descensoguardado = await descenso.save()
        return res.json(descensoguardado)
    }
    catch (error) {
        console.error(error)
        return res.status(500).json({message: error.message})
    }
}

const AgregarDescendido = (req, res) => {
    let body = req.body
    let error;
    console.log("req: " + req)
    console.log("req.body: " + req.body)
    console.log("body: "  + body)
    let descendidos = JSON.parse(body.descendidos)
    console.log(descendidos)
    descendidos.array.foreach(element => {
        Descenso.updateOne( {_id : body._id}, {
            $push : {
                "descendidos" : {
                    User : element
                }
            }
        }, 
        (error) => {
        if (error) {
            error = error
        }})
    });
    if (error) {
        res.json({
            success : false,
            message: "no se pudo agregar los descensos",
            error
        })
    } else {
        return res.json({
            success : true,
            message : "se agregaron los descensos de forma correcta"
        })
    }
}

export default {listardescensos, AgregarDescenso, AgregarDescendido}
