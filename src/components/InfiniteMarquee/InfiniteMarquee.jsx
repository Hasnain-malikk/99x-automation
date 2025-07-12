import React, { useEffect, useRef } from 'react'
import './InfiniteMarquee.css'
import gsap from 'gsap'
import logo1 from '/ReactJs/99x-automation/src/assets/logo1.png'
import logo2 from '/ReactJs/99x-automation/src/assets/logo2.png'
import logo3 from '/ReactJs/99x-automation/src/assets/logo3.png'
import logo4 from '/ReactJs/99x-automation/src/assets/logo4.png'
import logo5 from '/ReactJs/99x-automation/src/assets/logo5.png'
import logo6 from '/ReactJs/99x-automation/src/assets/logo6.png'

const InfiniteMarquee = () => {
  const marqueeRef = useRef(null)

  useEffect(() => {
    const marquee = marqueeRef.current
    const totalWidth = marquee.scrollWidth / 2

    gsap.to(marquee, {
      x: -totalWidth,
      ease: 'none',
      duration: 10,
      repeat: Infinity,
    })
  }, [])

  return (
    <div className='marquee-wrapper'>
      <div className='InfiniteMarquee' ref={marqueeRef}>
        {/* Duplicate logos for infinite loop effect */}
        {[logo1, logo2, logo3, logo4, logo5, logo6, logo1, logo2, logo3, logo4, logo5, logo6].map((logo, i) => (
          <img key={i} src={logo} alt={`logo-${i}`} />
        ))}
      </div>
    </div>
  )
}

export default InfiniteMarquee
