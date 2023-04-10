import mongoose from "mongoose";
//import env from './Database/.env'

const uri = "mongodb://127.0.0.1:27017/prodebogado"

const db = mongoose.connection

export async function connect(){
    try {
        const db = await mongoose.connect(uri)
        console.log("connected with ", db.connection.name)
    } catch (error) {
        console.error(error)
    }
}

db.once('open', _ => {
    console.log("database connected with: " + uri)
})

db.on('error', err => {
    console.log(err)
})