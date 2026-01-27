import React from 'react'
import { Navigate } from 'react-router-dom';

function ProtectRouter({children}) {
    let token = JSON.parse(localStorage.getItem("token"))
    console.log(token);
    if(!token){
        return <Navigate to={"/login"} replace/>
    }

  return <>{children}</>
}

export default ProtectRouter
