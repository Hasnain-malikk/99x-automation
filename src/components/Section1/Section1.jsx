import React from 'react'
import "./Section1.css"
import Section1Text from '../Section1Text/Section1Text'
import homeImg from "/ReactJs/99x-automation/src/assets/home-img.png"

const Section1 = () => {
  return (
    <div className='Section1'>
      <Section1Text/>
      <img src={homeImg} alt="" />
    </div>
  )
}

export default Section1
