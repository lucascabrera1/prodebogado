import  '../../ProdeComponents/App.css'

export default function TablaDescensos(){
    return <div>
        <table className='tablaposiciones'>
            <thead>
                <tr>
                    <th style={{'backgroundColor' : 'goldenrod'}}>participante</th>
                    <th style={{'backgroundColor' : 'red'}}>Cantidad de descensos</th>
                </tr>
            </thead>
        </table>
    </div>
}