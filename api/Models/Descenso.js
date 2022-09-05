import mongoose from "mongoose";

const EsquemaDescenso = new mongoose.Schema({
    año : {
        type: Number,
        required: true,
        unique: false
    }, 
    
    descendidos : [{
        nombrereal : {
            type: String,
            unique : true,
            required: true
        },

        documento : {
            type : Number,
            unique: false,
            required: false
        },
    }]
})

export default mongoose.model('descenso', EsquemaDescenso)