import React from 'react'
import './Section3.css'
import robotHand from '/ReactJs/99x-automation/src/assets/robot-hand.png'
import Card from '../Card/Card'

const Section3 = () => {
  return (
    <div className='section3'>
      <div className="s3h1" style={{paddingTop:"35px"}} >Elevate Your Business with</div>
      <div className="s3h1">AI Auto's Proven Impact</div>
      <div className="robot">
        <img style={{height:"130px"}} src={robotHand} alt="" />
        <div className="card-container">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
      </div>
    </div>
  )
}

export default Section3
