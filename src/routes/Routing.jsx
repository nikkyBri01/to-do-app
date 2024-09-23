import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Register from '../pages/Registro/Register'
import ProtectedRoute from './Protected_Routes'
import Login from '../pages/Login/Login'
import Tareas from '../pages/Tareas/Tareas'

export default function Routing() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/registro' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/tareas' element={<ProtectedRoute><Tareas/></ProtectedRoute> }/>

      </Routes>
    </Router>
  )
}
