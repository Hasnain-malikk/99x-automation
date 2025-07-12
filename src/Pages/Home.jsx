import React from 'react'
import '../App.css'
import Header from '../components/Header/Header'
import Section1 from '../components/Section1/Section1'
import Section2 from '../components/Section2/Section2'

const Home = () => {
  return (
    <div className='home'>
      <Header/>
      <div className='heading2' style={{marginTop:"-65px"}} >FOR REAL</div>
      <div className='heading2'>BUSINESS GROWTH</div>
      <Section1/>
      <Section2/>
    </div>
  )
}

export default Home
