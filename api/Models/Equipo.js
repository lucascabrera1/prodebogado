import mongoose from "mongoose";

const equipoSchema = new mongoose.Schema({
    nombre : {
        type: String,
        required : true,
        unique: true
    },
    localidad : {
        type: String,
        required: false,
        unique: false
    }
})

export default mongoose.model('Equipo', equipoSchema)