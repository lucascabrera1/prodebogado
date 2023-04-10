import { config } from 'dotenv'
config()

const MONGODB_URI = process.env.MONGODB_URI_CLOUD || "mongodb://localhost/prodebogado"
const PORT = process.env.PORT || 4000
export default {MONGODB_URI, PORT}