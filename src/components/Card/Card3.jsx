import React from 'react'
import './Card.css'
import mic from '/ReactJs/99x-automation/src/assets/mic.png'
import line from '/ReactJs/99x-automation/src/assets/line.png'

const Card = () => {
  return (
    <div className='cards'>
      <img style={{height:"40px",margin:"11px 0"}} src={mic} alt="" />
      <h3>Pizza Order AI</h3>
      <img style={{height:"8px",margin:"8px 170px 0 0"}} src={line} alt="" />
      <div style={{margin: "10px 50px 0 0"}} className="para">Quick and easy pizza </div>
      <div style={{marginRight:"55px"}} className="para">ordering, customize</div>
      <div style={{marginRight:"81px"}} className="para">your pizza, track</div>
      <div style={{marginRight:"37px"}} className="para">delivers, and manages</div>
      <div style={{marginRight:"71px"}} className="para">speical requests.</div>
      <button className='card-btn' >Start Conversation</button>
    </div>
  )
}

export default Card
