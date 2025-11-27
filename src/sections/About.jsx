import React from 'react'
import BGImage from '../assets/image.png'
const About = () => {
  return (
    <div id='about' className='relative'>
        <img src={BGImage} alt=""  className=' w-[100vw] overflow-hidden'/>
        <div className='absolute bottom-1/3 right-1/10 max-w-xl text-xl leading-10 bg-[#00000070] px-6 py-6 rounded-4xl'>
            This project shows how to animate 3D models in react + GSAP +Three.js. Perfect for learning scroll animation and 3D integration.
        </div>
    </div>
  )
}

export default About