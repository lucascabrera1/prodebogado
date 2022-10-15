import mongoose from "mongoose";

const esquemausuario = new mongoose.Schema({
    
    nombrereal : {
        type: String,
        required: true
    },
    alias : {
        type: String,
        required : true
    },
    email : {
        type: String,
        required: true
    },
    password: {
        type: String,
        required : true
    },
    administrador: {
        type: Boolean,
        required: true
    },
    documento : {
        type : Number,
        unique: true,
        required: true
    },
    campeonatos : {
        type: Number,
        required : true
    },
    descensos : {
        type: Number,
        required : true
    },
    copas: {
        type: Number,
        required: true
    }
})

export default mongoose.model('User', esquemausuario)