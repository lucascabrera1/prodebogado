const express = require ('express')
const  Routes = require ('../Routes')
const  { ConnectDB } = require ('./DB.js')
const {PORT} = require('./config.js')
const morgan = require('morgan')

const app = express()

ConnectDB()

app.use(morgan('dev'))
app.use("express")
app.use(Routes)
app.listen(PORT)
console.log("base de datos corriendo en el puerto 4000")