import mongoose from "mongoose";

const fechaSchema = new mongoose.Schema ({
    numero : {
        type: Number,
        required : true
    },
    partidos: [{
        type: mongoose.Schema.Types.Schema,
        ref: "Partido",
        required: true
    }]
})

export default mongoose.model('fecha', fechaSchema)