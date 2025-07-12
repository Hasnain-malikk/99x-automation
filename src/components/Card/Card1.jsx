import React from 'react'
import './Card.css'
import mic from '/ReactJs/99x-automation/src/assets/mic.png'
import line from '/ReactJs/99x-automation/src/assets/line.png'

const Card = () => {
  return (
    <div className='cards'>
      <img style={{height:"40px",margin:"11px 0"}} src={mic} alt="" />
      <h3>Health Clinic AI</h3>
      <img style={{height:"8px",margin:"8px 170px 0 0"}} src={line} alt="" />
      <div style={{margin: "10px 86px 0 0"}} className="para">Streamline patient </div>
      <div style={{marginRight:"78px"}} className="para">scheduling, provide </div>
      <div style={{marginRight:"40px"}} className="para">medical information, and </div>
      <div style={{marginRight:"80px"}} className="para">manage healthcare </div>
      <div style={{marginRight:"160px"}} className="para">queries.</div>
      <button className='card-btn' >Start Conversation</button>
    </div>
  )
}

export default Card
