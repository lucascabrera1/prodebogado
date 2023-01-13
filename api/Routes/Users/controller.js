import Usuario from '../../Models/User.js'

const AltaUsuario = async (req, res) => {
     try {
        const usuario = new Usuario (req.body)
        console.log(usuario)
        const usuarioguardado = await usuario.save()
        return res.json(usuarioguardado)
    }
    catch (error) {
        console.error(error)
        return res.status(500).json({message: error.message})
    }
}

const ListarTodos = async (req, res) => {
    try {
        console.log(req.params)
        const usuarios = await Usuario.find({})
        let usuariosdevueltos = []
        console.log(usuarios)
        for (const elem of usuarios) {
            let newElem = {
                "_id" : elem._id,
                "nombrereal" : elem.nombrereal,
                "alias" : elem.alias,
                "email" : elem.email,
                "documento" : elem.documento,
                "campeonatos" : elem.campeonatos,
                "copas" : elem.copas,
                "descensos" : elem.descensos
            }
            usuariosdevueltos.push(newElem)
        }
        return res.json(usuariosdevueltos);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const VerUno = async (req, res) => {
    console.log(req.params.userId)
    try {
        const response = await Usuario.findOne({_id : req.params.userId})
        console.log(req.params)
        if (!response || response.length === 0){
            return res.status(404).json({
                error: true,
                message : "User not Found"
            })
        }
        return res.status(200).json({
            data : response,
            error: false
        })
    } catch (error) {
        return res.status(400).json({
            error: true,
            message : error
        })
    }
}

const BuscarUnoPorEmail = async (req, res) => {
    console.log(req.params.email)
    try {
        const response = await Usuario.findOne({email : req.params.email})
        console.log(req.params)
        if (!response || response.length === 0){
            return res.status(404).json({
                error: true,
                message : "User not Found"
            })
        }
        return res.status(200).json({
            data : response,
            error: false
        })
    } catch (error) {
        return res.status(400).json({
            error: true,
            message : error
        })
    }
}

export default {AltaUsuario, ListarTodos, VerUno, BuscarUnoPorEmail}