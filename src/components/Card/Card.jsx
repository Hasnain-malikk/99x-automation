import React from 'react'
import './Card.css'
import mic from '/ReactJs/99x-automation/src/assets/mic.png'
import line from '/ReactJs/99x-automation/src/assets/line.png'

const Card = () => {
  return (
    <div className='cards'>
      <img style={{height:"40px",margin:"11px 0"}} src={mic} alt="" />
      <h3>SPA Booking AI</h3>
      <img style={{height:"8px",margin:"8px 170px 0 0"}} src={line} alt="" />
      <div style={{margin: "10px 110px 0 0"}} className="para">Effortless spa</div>
      <div style={{marginRight:"109px"}} className="para">appointment</div>
      <div style={{marginRight:"93px"}} className="para">scheduling and </div>
      <div style={{marginRight:"62px"}} className="para">personalized service</div>
      <div style={{marginRight:"68px"}} className="para">recommendations.</div>
      <button className='card-btn' >Start Conversation</button>
    </div>
  )
}

export default Card
