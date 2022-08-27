const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

async function ConnectDB() {
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected with mongodb ", db.connection.name)
    } 
    catch (error) {
        console.error(error)
    }
}

module.exports = {ConnectDB}
