import mongoose from "mongoose";

const GrupoSchema = new mongoose.Schema({
    letra : {
        type: String,
        required: true
    },
    equipos: [{
        type : mongoose.Schema.Types.ObjectId,
        ref: "Equipo",
        required : true
    }]
})

export default mongoose.model('grupo', GrupoSchema)