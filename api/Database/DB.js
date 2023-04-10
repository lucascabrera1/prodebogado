import { connect } from 'mongoose'
import { config } from 'dotenv'

config()

async function ConnectDB() {
    try {
        const db = await connect(process.env.MONGODB_URI_CLOUD)
        console.log("connected with mongodb ", db.connection.name)
    } 
    catch (error) {
        console.error(error)
    }
}

export default {ConnectDB}
