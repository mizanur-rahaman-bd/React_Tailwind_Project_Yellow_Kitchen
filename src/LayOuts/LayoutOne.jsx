import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar/NavBar'

const LayoutOne = () => {
  return (
    <>
    <NavBar />
    
    <Outlet />
    
    
    </>
  )
}

export default LayoutOne