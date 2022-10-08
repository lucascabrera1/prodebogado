import {Schema, Model} from "mongoose";

const partidoSchema = new Schema({
    local: {
        equipo: {
            type : Schema.Types.ObjectId,
            ref: "Equipo",
            required : true
        },
        goles: {
            type: Number,
            required: true
        }
    },
    visitante: {
        equipo: {
            type : Schema.Types.ObjectId,
            ref: "Equipo",
            required : true
        },
        goles: {
            type: Number,
            required: true
        }
    }
})

export default Model('Partido', partidoSchema)