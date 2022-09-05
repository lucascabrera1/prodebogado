import mongoose from "mongoose";

const fechaSchema = new mongoose.Schema ({
    numero : {
        type: Number,
        required : true
    }
})

export default mongoose.model('fecha', fechaSchema)