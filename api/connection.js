import mongoose from "mongoose";

const uri = "mongodb://127.0.0.1:27017/prodebogado"
const db = mongoose.connection

const connect = mongoose.connect(uri, {
    useNewUrlParser : true,
    useUnifiedTopology: true
})
.catch(err => console.log(err))

db.once('open', _ => {
    console.log("database connected with: " + uri)
})

db.on('error', err => {
    console.log(err)
})

export default connect