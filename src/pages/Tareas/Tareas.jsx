import { useNavigate } from 'react-router-dom'
import { TasksForm } from '../../components/Form/TasksForm'
import { getTasks } from '../../services/get'
import { useEffect, useState } from 'react'

import React from 'react'

export default function Tareas() {
  const [obtenerTareas, setObtenerTareas] = useState([])
  
  useEffect(() =>{
    const obtenerTareas = async () => {
      try {
        const tareas = await getTasks();
        setObtenerTareas(tareas)

      } catch (error) {
        console.log('Error: ', error);
      }
    }
    obtenerTareas()
  }, []);

  const navigate = useNavigate();

  function cerrarSesion() {
    localStorage.removeItem('Autenticado');
    navigate('/');
  };

  return (
    <> 
        <div><TasksForm/></div>
        <div>
          {obtenerTareas.length > 0 ? (
            <ul className='estiloLista'>
              {obtenerTareas.map((tarea, index) => { return (<li key={index}> {tarea.tarea} - {tarea.prioridad} </li>)})}
            </ul> 
          ) : (
            <p>No hay tareas para mostrar</p>
          )} 
        </div>
        
        <button onClick={cerrarSesion}>Cerrar Sesión</button> 

    </>
  )
}

