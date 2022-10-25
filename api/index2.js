import express from 'express';
import router from './Routes/index.js';
import {connect} from './connection.js'
import cors from 'cors'

connect()

const app = express()
const port = 4500

//uses
app.use(cors())
app.use(express.json())
app.use('/', router)


app.listen(port, () =>{
    console.log(`aplicacion corriendo en localhost puerto ${port}`)
})

