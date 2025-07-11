import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Services from './Pages/Services'
import FAQ from './Pages/FAQ'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          {/* <Route path="/" element={<Home/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/faq" element={<FAQ/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
