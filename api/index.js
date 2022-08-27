//requires
import express, { json } from 'express'
const router = express()
import { resolve } from 'path'
import morgan from 'morgan'

//uses
router.use(json())
router.use(logger)
router.use(morgan('dev'))
router.use('public')


//settings
router.set('appName', 'prodebogado')
router.set('port', 4501)
router.set('view engine', 'ejs')

router.listen(router.get('port'), () =>{
    console.log(`aplicacion corriendo en el puerto ${router.get('port')}`)
})

router.all('/pronosticos', (req, res) => {
    console.log("paso por router.all")
    res.send("terminado")
})

function logger (req, res, next){
    console.log(router.get('appName'))
    console.log(`route received: ${req.protocol}:// ${req.get('host')} :// ${req.originalUrl}`)
    next()
}



router.get('/ejs', (req, res) => {
    const data = [
        {nombre: "Lucas", apellido: "Cabrera"}, 
        {nombre : "Luciano", apellido: "Bosso"}, 
        {nombre : "Rodrigo", apellido: "Correa"},
        {nombre: "Juliano", apellido: "Morales"}, 
        {nombre : "Mauricio", apellido: "Vieyra"}, 
        {nombre : "Gaston", apellido: "Gonzalez"}
    ]
    res.render("index.ejs", {people: data})
})

router.get('/empresa', (req, res) => {
    res.sendFile(resolve(__dirname, "empresa.html"))
})

router.get('/contacto', (req, res) => {
    res.sendFile(resolve(__dirname, "contacto.html"))
})


//aca empiezan las operaciones del prode

router.post('/register', (req, res) => {
    console.log(req.body)
    res.send(resolve(__dirname, "contacto.html"))
    res.end("usuario registrado")
}) //se registra





/*const http = require("http")
const fs = require("fs")
const paginaempresa = fs.readFileSync("empresa.html")
const paginaprincipal = fs.readFileSync("index.html")
const paginacontacto = fs.readFileSync("contacto.html")

const server = http.createServer((req, res) => {

    console.log(req.url)

    if (req.url === "/empresa"){
        return res.end(paginaempresa)
    }
    else if (req.url === "/contacto"){
        return res.end(paginacontacto)
    }
    else if (req.url === "/"){
        return res.end(paginaprincipal)
    }
    else {
        res.end(404)
        res.end("bienvenido al servidor de la app del prode bogado")
    }
    
})
server.listen(4000)
*/