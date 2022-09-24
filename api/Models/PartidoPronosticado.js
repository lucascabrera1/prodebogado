import mongoose, { MongooseError } from "mongoose";

const schemaPartidoPronosticado = new mongoose.Schema({
    partido : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Partido",
        required: true
    },
    resultado : {
        goleslocal : {type: Number},
        golesvisitante : {type: Number}
    }
})

export default mongoose.Schema('PartidoPronosticado', schemaPartidoPronosticado)