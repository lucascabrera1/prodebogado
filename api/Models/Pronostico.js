import mongoose from "mongoose";

const pronesquema = new mongoose.Schema ({

    partidospronosticado : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "PartidoPronosticado",
        required: true
    }],
    fecha : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Fecha",
        unique: true,
        required: true
    },
    usuario : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

export default mongoose.model('Pronostico', pronesquema)