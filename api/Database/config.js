const dotenv = require('dotenv')
dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/prodebogado"
const PORT = process.env.PORT || 4000
module.exports = {MONGODB_URI, PORT}