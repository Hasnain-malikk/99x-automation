import React from 'react'
import './Card.css'
import mic from '/ReactJs/99x-automation/src/assets/mic.png'
import line from '/ReactJs/99x-automation/src/assets/line.png'

const Card = () => {
  return (
    <div className='cards'>
      <img style={{height:"40px",margin:"11px 0"}} src={mic} alt="" />
      <h3>Dental Office AI</h3>
      <img style={{height:"8px",margin:"8px 170px 0 0"}} src={line} alt="" />
      <div style={{margin: "10px 123px 0 0"}} className="para">Convenient </div>
      <div style={{marginRight:"45px"}} className="para">appointment booking</div>
      <div style={{marginRight:"42px"}} className="para">treatment information</div>
      <div style={{marginRight:"55px"}} className="para">and patient support.</div>
      <button className='card-btn' >Start Conversation</button>
    </div>
  )
}

export default Card
