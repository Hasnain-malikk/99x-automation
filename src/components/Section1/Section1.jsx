import React from 'react'
import "./Section1.css"
import Section1Text from '../Section1Text/Section1Text'
import homeImg from "/ReactJs/99x-automation/src/assets/home-img.png"
import playImg from '/ReactJs/99x-automation/src/assets/play-img.jpg'
import fb from '/ReactJs/99x-automation/src/assets/fb.png'
import x from '/ReactJs/99x-automation/src/assets/x.png'
import linkedin from '/ReactJs/99x-automation/src/assets/in.png'
import icon from '/ReactJs/99x-automation/src/assets/icon.png'

const Section1 = () => {
  return (
    <div className='Section1'>
      <Section1Text/>
      <img src={homeImg} alt="img" />
      <div className="playBtn">
        <div className="playText">Discover more about us!</div>
        <div className="playBody">
            <div className="pBtn"><img src={icon} alt="" /></div>
            <div className="playImg"><img src={playImg} alt="" /></div>
        </div>
        <div className="playSocial">
            <img src={fb} alt="" />
            <img src={x} alt="" />
            <img src={linkedin} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Section1
