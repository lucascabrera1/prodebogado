import {Schema, model} from "mongoose";
const SchemaUser = new Schema({
    alias : {
        type: String,
        required : true
    },
    email : {
        type: String,
        required: true
    }
})

export default model('User', new SchemaUser)