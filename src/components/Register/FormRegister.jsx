import React, { useState } from 'react'
import { PostUsers } from '../../services/post'
import { useNavigate } from 'react-router-dom'

export default function FormRegister() {
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    //Variable de navegación
    const navigate = useNavigate();

    function RegistrarUsuario(e) {
      e.preventDefault()
      console.log('User', user)
      console.log('Email', email)
      console.log('Pass', pass)

      PostUsers(user, email, pass)
      navigate('/login')
    }
  return (
    <div>
      <h1>Registrarse</h1>
      <form>
            <input type='text' placeholder='Usuario' value={user} onChange={((e) => setUser(e.target.value))}/>
            <input type='text' placeholder='Email' value={email} onChange={((e) => setEmail(e.target.value))}/>
            <input type='password' placeholder='Contraseña' value={pass} onChange={(e) => setPass(e.target.value)}/>

            <button onClick={RegistrarUsuario}>Registrar</button>
        </form>
    </div>
  )
}
