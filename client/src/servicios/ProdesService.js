import axios from "axios";

export const GuardarProde = async (idusuario, idfecha, partidos) => {
    const url = 'http://localhost:4500/pronosticos/pronosticos'
    const body = {usuario :idusuario, fecha : idfecha, partidospronosticado: partidos}
    console.log(body)
    const res = await axios.post(url, body)
    if (!res.status === 200) {
        return {
            exito : true,
            msj: "prode guardado exitosamente"
        }
    } else {
        return {
            exito : false,
            msj: res.data.message
        }
    }
}