import React from 'react'
import logo from '../assets/react.svg'
import {NavLink, replace, useNavigate} from "react-router-dom"

const NavBar = () => {
    const getNavClass = ({ isActive }) => (isActive ? "active" : "");
    const navigate = useNavigate()
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul>
            <li><NavLink to='/' className={getNavClass}>Home</NavLink></li>
            <li><NavLink to='/about' className={getNavClass}>About</NavLink></li>
            <li><NavLink to='/products' className={getNavClass}>Product</NavLink></li>
            <li><NavLink to='/contact' className={getNavClass}>Contact</NavLink></li>
            <li><NavLink to='/jobs' className={getNavClass}>Jobs</NavLink></li>
        </ul>
        <button onClick={() => navigate('/about', {replace:true})}>Get Started</button>
    </div>
  )
}

export default NavBar