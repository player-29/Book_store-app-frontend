//to prevent random user to checkout the cart this part of code redirects the user to tyhe login page


import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const PrivateRoute = ({children}) => {
  const{currentUser, loading}=useAuth();

  if(loading){
    return <div>Loading...</div>
  }
  if(currentUser){
    return children;
  }
  return (
    <Navigate to="/login" replace/>
  )
}

export default PrivateRoute

