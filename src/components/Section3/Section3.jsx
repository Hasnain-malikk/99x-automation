import React from 'react'
import './Section3.css'
import robotHand from '/ReactJs/99x-automation/src/assets/robot-hand.png'
import Card from '../Card/Card'
import Card1 from '../Card/Card1'
import Card2 from '../Card/Card2'
import Card3 from '../Card/Card3'
import arrow from '/ReactJs/99x-automation/src/assets/arrow.png'

const Section3 = () => {
  return (
    <div className='section3'>
      <div className="s3h1" style={{paddingTop:"35px"}} >Elevate Your Business with</div>
      <div className="s3h1">AI Auto's Proven Impact</div>
      <div className="robot">
        <img className='robot-img' style={{height:"130px"}} src={robotHand} alt="" />
        <div className="card-container">
            <Card/>
            <Card1/>
            <Card2/>
            <Card3/>
        </div>
        <div style={{padding:"45px 0 0 0"}} className="heading11">Our Services Will Transform Your </div>
        <div className="heading11">Business with Intelligent Automation</div>
        <div className='para11'>We empower businesses with AI Voice Agent and AI Text Chatbots that automate customer interactions, enhancing efficiency and driving growth. Our solutions are designed to provide seamless communication, enabling your team to focus on strategic initiatives while our intelligent agents handle routine tasks.</div>
        <div className="link1">
            <div className='text11'>Advanced Automations</div>
            <img className='img11' src={arrow} alt="" />
        </div>
        <div className="link1">
            <div className='text11'>Latest AI Models</div>
            <img className='img11' src={arrow} alt="" />
        </div>
        <div className="link1">
            <div className='text11'>Social Media Integrations</div>
            <img className='img11' src={arrow} alt="" />
        </div>
        <div style={{borderBottom:"1px solid grey"}} className="link1">
            <div className='text11'>Rigorous Testing</div>
            <img className='img11' src={arrow} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Section3
