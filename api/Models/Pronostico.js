import mongoose from "mongoose";

const pronesquema = new mongoose.Schema ({
    local: {
        nombre: String,
        goles: Number
    },
    visitante: {
        nombre: String,
        goles: Number
    }
})

export default mongoose.model('esquema', pronesquema)