import axios from 'axios'

export const RecuperarFechas = async (setState) => {
    const url = 'http://localhost:4500/fechas/vertodas'
    const res = await axios.get(url)
    console.log("fechas recuperadas desde la capa de servicios")
    console.log(res.data)
    setState(res.data)
}

export const RecuperarFecha = async (id, setState, setStatePartidos) => {
    console.log('entra al recuperar fecha del FechaService')
    console.log(`id linea 13: ${id}`)
    const url = `http://localhost:4500/fechas/veruna/${id}`
    const res = await axios.get(url)
    console.log('res data')
    console.log(res.data)
    setState(res.data)
    setStatePartidos(res.data.partidos)
}