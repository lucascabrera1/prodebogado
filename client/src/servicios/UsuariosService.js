import axios from "axios";

export const RecuperarUsuarioPorEmail = async (email) => {
    const url = `http://localhost:4500/usuarios/buscarunoporemail/${email}`
    const res = await axios.get(url)
    console.log(res)
    return res.data.data
}