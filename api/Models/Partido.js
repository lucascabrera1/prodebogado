import {Schema, model} from "mongoose";

const partidoSchema = new Schema({
    local: {
        equipo: {
            type : Schema.Types.ObjectId,
            ref: "Equipo",
            required : true
        },
        goles: {
            type: Number,
            required: false
        },
        definicionporpenales: {
            type: Number,
            required: false
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
            required: false
        },
        definicionporpenales: {
            type: Number,
            required: false
        }
    }
})

export default model('Partido', partidoSchema)