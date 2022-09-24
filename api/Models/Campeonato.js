import mongoose from "mongoose";

const campeonatoSchema = new mongoose.Schema ({
    campeon : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    año: {
        type: Number,
        required: true
    },
    nombre:{
        type: String,
        required: true
    },
    fechas : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Fecha",
        required: true
    }]
})

export default mongoose.model('Campeonato', campeonatoSchema)