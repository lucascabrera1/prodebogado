import './task.css'

export function TaskCard({ready, text}){
    return (<div className = "card">
        <h1 className = "title">{text}</h1>
        <span>
            {ready ? <p className='tareafinalizada'>"Tarea finalizada"</p> 
            : <p className='tareapendiente'>"Tarea pendiente"</p>}
        </span>
    </div>)
}