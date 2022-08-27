import connection from "./connection.js";
import Pronostico from "./Models/Pronostico.js";

async function GuardarPronostico (){
    const pronostico = new Pronostico ({
        "local" : {
            "nombre" : "Racing",
            "goles": 1
        },
        "visitante" : {
            "nombre" : "Independiente",
            "goles": "2"
        }
    })
    const pronosticoguardado = await pronostico.save()
    return pronosticoguardado
}

GuardarPronostico()
.then(pronosticoguardado => console.log(pronosticoguardado))
.catch(err => console.log("error " + err))