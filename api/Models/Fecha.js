import mongoose from "mongoose";

const fechaSchema = new mongoose.Schema ({
    numero : {
        type: Number,
        required : true
    },
    fechacomienzo: {
        type: Date,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    partidos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Partido",
        required: true
    }]
})

export default mongoose.model('Fecha', fechaSchema)