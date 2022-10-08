import { Pronostico } from "../Pronostico";
function ProdeForm () {
    return (<div>
        <div>
            <h2>Grupo A</h2>
            <Pronostico local="Qatar" visitante="Ecuador"/>
            <Pronostico local="Senegal" visitante="Paises Bajos"/>
            <Pronostico local="Qatar" visitante="Senegal"/>
            <Pronostico local="Países Bajos" visitante="Ecuador"/>
            <Pronostico local="Paises Bajos" visitante="Qatar"/>
            <Pronostico local="Ecuador" visitante="Senegal"/>
        </div>
        <div>
            <h2>Grupo B</h2>
            <Pronostico local="Inglaterra" visitante="Irán"/>
            <Pronostico local="Estados Unidos" visitante="Gales"/>
            <Pronostico local="Gales" visitante="Irán"/>
            <Pronostico local="Inglaterra" visitante="Estados Unidos"/>
            <Pronostico local="Gales" visitante="Inglaterra"/>
            <Pronostico local="Irán" visitante="Estados Unidos"/>
        </div>
        <div>
            <h2>Grupo C</h2>
            <Pronostico local="Argentina" visitante="Arabia Saudita"/>
            <Pronostico local="México" visitante="Polonia"/>
            <Pronostico local="Polonia" visitante="Arabia Saudita"/>
            <Pronostico local="Argentina" visitante="México"/>
            <Pronostico local="Polonia" visitante="Argentina"/>
            <Pronostico local="Arabia Saudita" visitante="México"/>
        </div>
        <div>
            <h2>Grupo D</h2>
            <Pronostico local="Dinamarca" visitante="Túnez"/>
            <Pronostico local="Francia" visitante="Australia"/>
            <Pronostico local="Túnez" visitante="Australia"/>
            <Pronostico local="Francia" visitante="Dinamarca"/>
            <Pronostico local="Túnez" visitante="Francia"/>
            <Pronostico local="Australia" visitante="Dinamarca"/>
        </div>
        <div>
            <h2>Grupo E</h2>
            <Pronostico local="Alemania" visitante="Japón"/>
            <Pronostico local="España" visitante="Costa Rica"/>
            <Pronostico local="Japón" visitante="Costa Rica"/>
            <Pronostico local="España" visitante="Alemania"/>
            <Pronostico local="Japón" visitante="España"/>
            <Pronostico local="Costa Rica" visitante="Alemania"/>
        </div>
        <div>
            <h2>Grupo F</h2>
            <Pronostico local="Marruecos" visitante="Croacia"/>
            <Pronostico local="Bélgica" visitante="Canadá"/>
            <Pronostico local="Bélgica" visitante="Marruecos"/>
            <Pronostico local="Croacia" visitante="Canadá"/>
            <Pronostico local="Croacia" visitante="Bélgica"/>
            <Pronostico local="Canadá" visitante="Marruecos"/>
        </div>
        <div>
            <h2>Grupo G</h2>
            <Pronostico local="Suiza" visitante="Camerún"/>
            <Pronostico local="Brasil" visitante="Serbia y Montenegro"/>
            <Pronostico local="Camerún" visitante="Serbia y Montenegro"/>
            <Pronostico local="Brasil" visitante="Suiza"/>
            <Pronostico local="Camerún" visitante="Brasil"/>
            <Pronostico local="Serbia y Montenegro" visitante="Suiza"/>
        </div>
        <div>
            <h2>Grupo H</h2>
            <Pronostico local="Uruguay" visitante="Corea del Sur"/>
            <Pronostico local="Portugal" visitante="Ghana"/>
            <Pronostico local="Corea del Sur" visitante="Ghana"/>
            <Pronostico local="Portugal" visitante="Uruguay"/>
            <Pronostico local="Corea" visitante="Portugal"/>
            <Pronostico local="Ghana" visitante="Uruguay"/>
        </div>
    </div>)
}
export {ProdeForm}
