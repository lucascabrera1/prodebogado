const express = require ('express');
const router = require('./Routes')

const app = express()
const port = 4500

//uses
app.use('/', router)

app.listen(port, () =>{
    console.log(`aplicacion corriendo en localhost puerto ${port}`)
})

