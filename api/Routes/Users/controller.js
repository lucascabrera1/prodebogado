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

export default {AltaUsuario}