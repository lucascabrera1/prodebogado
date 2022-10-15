import  '../../ProdeComponents/App.css'

export default function CrearTablaPosiciones(){
    return <div>
        <table className='tablaposiciones'>
            <thead>
                <tr>
                    <th style={{'backgroundColor' : 'goldenrod'}}>participante</th>
                    <th style={{'backgroundColor' : 'goldenrod'}}>puntos</th>
                    <th style={{'backgroundColor' : 'green'}}>3 puntos</th>
                    <th style={{'backgroundColor' : 'yellow'}}>1 punto</th>
                    <th style={{'backgroundColor' : '#ffa'}}>0 puntos</th>
                    <th style={{'backgroundColor' : 'red'}}>partidos no pronosticados</th>
                </tr>
            </thead>
        </table>
    </div>
}