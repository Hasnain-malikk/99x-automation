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
            <Link to = "/" >HOME</Link>
            <Link to = "/aboutus" >ABOUT US</Link>
            <Link to = "/services" >SERVICES</Link>
            <Link to = "/faq" >FAQ</Link>
        </div>
      </div>
      <div className="btn">this is button</div>
    </div>
  )
}

export default Navbar
