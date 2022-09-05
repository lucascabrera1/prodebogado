import mongoose from "mongoose";

const schemaCopa = new mongoose.Schema ({
    campeon : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required : true,
        unique : true
    },
    nombre : {
        type : String,
        required : true,
        unique: true
    }
})

export default mongoose.model('Copa', schemaCopa)