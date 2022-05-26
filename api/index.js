//requires
const express = require ('express')
const router = express()
const path = require ('path')
const morgan = require('morgan')

//uses
router.use(express.json())
router.use(logger)
router.use(morgan('dev'))
router.use(express.static('public'))

//settings
router.set('appName', 'prodebogado')
router.set('port', 4500)
router.set('view engine', 'ejs')

router.listen(router.get('port'), () =>{
    console.log(`aplicacion corriendo en el puerto ${router.get('port')}`)
})

router.all('/pronosticos', (req, res) => {
    console.log("paso por aca")
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
    res.sendFile(path.resolve(__dirname, "empresa.html"))
})

router.get('/contacto', (req, res) => {
    res.sendFile(path.resolve(__dirname, "contacto.html"))
})


//aca empiezan las operaciones del prode

router.post('/register', (req, res) => {
    console.log(req.body)
    res.send(path.resolve(__dirname, "contacto.html"))
    res.end("usuario registrado")
}) //se registra

router.post('/pronosticos', (req, res) => {
    res.send('<h2>pronosticos enviados!</h2>')
}) //envia sus pronosticos

router.put('/pronosticos/:id', (req, res) => {
    console.log(req.body)
    console.log(req.params)
    res.send(`aqui puede modificar el pronostico ${req.params.id}`)
}) //puede reenviar el pronostico de un partido


router.get('/mispronosticos/:idfecha', (req, res) => {
    console.log(req.body)
    console.log(req.params)
    res.send('sus pronosticos de la fecha')
})//pronosticos de la fecha

router.get('/pronosticospartido/:idpartido', (req, res ) => {
    console.log(req.params)
    res.send(`aqui puedo ver que pronosticaron otros resultados para el partido: ${req.params.idpartido} ` )
})

router.get('/pronosticosparticipante/:idparticipante', (req, res) => {
    console.log(req.params)
    res.send(`aqui puedo consultar los pronosticos de la fecha del participante ${req.params.idparticipante}`)
})



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