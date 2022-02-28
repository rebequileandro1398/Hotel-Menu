import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRout = () => {
    const isAuth = localStorage.getItem('tokenHM')
  return (
    isAuth ? <Outlet/> : <Navigate to= '/'/>
  )
}
