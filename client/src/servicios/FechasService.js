import axios from 'axios'

export const RecuperarFechas = async (setState) => {
    const url = 'http://localhost:4500/fechas/vertodas'
    const res = await axios.get(url)
    setState(res.data)
}

export const RecuperarFecha = async (id, setState, setStatePartidos) => {
    const url = `http://localhost:4500/fechas/veruna/${id}`
    const res = await axios.get(url)
    setState(res.data)
    setStatePartidos(res.data.partidos)
}