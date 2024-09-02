import React from 'react'
import { postUsers } from '../../services/post'
import { UserForm } from '../../components/Form/UserForm'

export const Register = () => {
    const [usuario, setUsuario] = useState('')
    const [contra, setContra] = useState('')

    const registrarUsuario = () => {
        postUsers(usuario, contra)
    }
    
  return (
    <>
        <UserForm setUsuario={setUsuario} setContra={setContra}/>

        <button onClick={registrarUsuario}>Registrar</button>
    </>
  )
}
