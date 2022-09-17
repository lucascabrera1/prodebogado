import mongoose from "mongoose";

const EsquemaDescendidos = new mongoose.Schema({
    usuario : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "User",
        required : true
    }
})

const EsquemaDescenso = new mongoose.Schema({
    año : {
        type: Number,
        required: true,
        unique: false
    }, 
    
    descendidos : [{
        type : mongoose.Schema.Types.ObjectId,
        ref: "User",
        required : true
    }]
})

export default mongoose.model('descenso', EsquemaDescenso)