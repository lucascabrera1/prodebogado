import Descenso from "../../Models/Descenso.js"
import User from "../../Models/User.js";

const listardescensos = async (req, res) => {
    try {
        const descensos = await Descenso.find({});
        let descensosdevueltos = [];
        console.log(descensos);
        for (const elem of descensos) {
            let descendidos = [];
            for (const el of elem.descendidos) {
                console.log(el);
                let user = await User.findById(el);
                console.log('user ' + user);
                descendidos.push(user);
            }
            console.log(descendidos);
            let newElem = {
                "_id" : elem._id,
                "año" : elem.año,
                "descendidos" : descendidos
            }
            descensosdevueltos.push(newElem);
        }
        return res.json(descensosdevueltos);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
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
            "descendidos" : [req.body.usuario]
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