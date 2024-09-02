import React from 'react'
import { postTasks } from '../../services/post' 
import { useState } from 'react'

export const TasksForm = () => {
    const [tarea, setTarea] = useState('')
    const [prioridad, setPrioridad] = useState('')

    const agregarTareas = () => {
        postTasks(tarea, prioridad)
    }


  return (    
    <>
        <form>
            <input type='text' placeholder='Tarea' onChange={(e) => setTarea(e.target.value)}/>
            <select value={prioridad} onChange={(e) => setPrioridad(e.target.value)}>
                <option value="">Seleccione</option>
                <option value="baja">Baja</option>
                <option value="media">Media</option>
                <option value="alta">Alta</option>
            </select>

            <button onClick={agregarTareas}>Agregar tarea</button>
        </form>
    </>
  )
}
