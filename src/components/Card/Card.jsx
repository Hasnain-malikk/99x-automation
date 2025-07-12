import React from 'react'
import './Card.css'
import mic from '/ReactJs/99x-automation/src/assets/mic.png'

const Card = () => {
  return (
    <div className='cards'>
      <img style={{height:"40px",margin:"11px 0"}} src={mic} alt="" />
      <h3>SPA Booking AI</h3>
    </div>
  )
}

export default Card
