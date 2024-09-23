import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetUsers } from '../../services/get'
// import { PostSession } from '../../services/PostSession'

export default function FormLogin() {

    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const navigate = useNavigate()

    // useEffect(() => {
    //   const fetchUsers = async () => {
    //     const data = await GetUsers();
    //     console.log(data)

    //     data.map((user) => {
    //       setUser(user.user)
    //       setEmail(user.email)
    //       setPass(user.pass)
    //     })
    //   }

    //   fetchUsers()
    // }, [])
    
    const ValidarCredenciales = async (e) => {
      e.preventDefault();
      const userData = await GetUsers();

      if(userData){
          const userFound = userData.find((userData) => userData.usuario == user);

          //Si encuentra el usuario va a validar la contraseña del usuario
          if(userFound){
              if(userFound.contra == pass){
                  //Si es correcta lo redirige al inicio
                  localStorage.setItem('Autenticado', 'true')
                  navigate('/tareas');
                
              }else{
                  alert('Wrong password or username ')              }
          }else{
              alert("Username doesn't exist")
          }
      }
  };
  
  return (
    <div>
        <h1>Login</h1>
        <form>
            <input type='text' placeholder='Usuario' value={user} onChange={((e) => setUser(e.target.value))}/>
            {/* <input type='text' placeholder='Usuario' value={email} onChange={((e) => setEmail(e.target.value))}/> */}
            <input type='password' placeholder='Contraseña' value={pass} onChange={((e) => setPass(e.target.value))}/>

            <button onClick={ValidarCredenciales}>Ingresar</button>
        </form>
    </div>
  )
}
