import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
const RouteLayout = () => {
  return (
    <div>
        <NavBar/>
        <div className="container">
            <Outlet/>
        </div>
    </div>
  )
}

export default RouteLayout