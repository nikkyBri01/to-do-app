// import React, {useState, useEffect} from 'react';
import { Navigate } from 'react-router-dom';
// import { GetSession } from '../services/GetSession';

//Los componentes de REACT no puede ser asincronos
const ProtectedRoute = ({ children }) => {

  const estaAutenticado = localStorage.getItem('Autenticado') === 'true'; 

    if (!estaAutenticado ) {
       
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;