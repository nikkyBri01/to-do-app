import React from 'react'
import { useState } from 'react'

export const UserForm = (setUsuario, setContra) => {
  return (
    <>
        <form>
            <input type='text' placeholder='Usuario' onChange={((e) => setUsuario(e.target.value))}/>
            <input type='password' placeholder='Contraseña' onChange={(e) => setContra(e.target.value)}/>

            <button onClick={registrarUsuario}>Enter</button>
        </form>
    </>
  )
}
