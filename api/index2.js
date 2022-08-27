import express from 'express';
import router from './Routes/index.js';

const app = express()
const port = 4500

//uses
app.use(express.json())
app.use('/', router)


app.listen(port, () =>{
    console.log(`aplicacion corriendo en localhost puerto ${port}`)
})

