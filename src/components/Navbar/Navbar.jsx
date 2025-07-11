import React from 'react'
import './Navbar.css'
import navIcon from '/ReactJs/99x-automation/src/assets/nav-icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav">
        <div className="logo"><img src={navIcon} alt="" /></div>
        <div className="navLinks">
            <Link to = "" >HOME</Link>
            <Link to = "" >ABOUT US</Link>
            <Link to = "" >SERVICES</Link>
            <Link to = "" >FAQ</Link>
        </div>
      </div>
      <div className="btn">
        <button>Sign up</button>
      </div>
    </div>
  )
}

export default Navbar
