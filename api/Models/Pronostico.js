import mongoose from "mongoose";

const pronesquema = new mongoose.Schema ({
    local: {
        nombre: {
            type : String,
            required : true
        },
        goles: {
            type: Number,
            required: true
        }
    },
    visitante: {
        nombre: {
            type : String,
            required : true
        },
        goles: {
            type: Number,
            required: true
        }
    },
    fecha : {
        type : Number,
        ref : "Fecha",
        unique: true,
        required: true
    },
    usuario : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    campeonato: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Campeonato",
        required : true
    },
    copa : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Copa",
        required: true
    }
})

export default mongoose.model('esquema', pronesquema)