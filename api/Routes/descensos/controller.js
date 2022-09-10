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
    /*      -----primer intento-----

    let body = req.body
    let error;
    console.log("req: " + req)
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
    }*/
    console.log(req.body)
    Descenso.updateOne({_id : req.body._id}, {
        $push : {
            "descendidos" : {
                nombrereal : req.body.nombrereal,
                documento : req.body.documento
            }
        }
    },
    function (error){
        if (error) {
            return res.json ({
                sucess : false,
                msj: "no se pudo agregar",
                error : (error),
            });
        } else {
            return res.json({
                sucess : true,
                msj : "se agrego correctamente"
            })
        }
    })
}

export default {listardescensos, AgregarDescenso, AgregarDescendido}