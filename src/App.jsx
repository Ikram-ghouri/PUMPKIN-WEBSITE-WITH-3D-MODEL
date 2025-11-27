import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Center, OrbitControls } from '@react-three/drei'
import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import CTA from './sections/CTA.jsx'
import { Pumpkin } from './components/Pumpkin.jsx'
import CameraAnimation from './components/CameraAnimation.jsx'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useEffect } from 'react'


gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const pumpkinref = useRef(null);
  
  useEffect(() => {
    gsap.to(pumpkinref.current,{
      y: '55vw',
      x: '-24vw',
      scrollTrigger:{
        trigger: '#about',
        start: 'top 60%',
        end: '60% 40%',
        scrub: 1,

      }
    })
    
  }, []);
  
  return (
    <>
{/* E3 scene */}
    <figure ref={pumpkinref} className='absolute top-[11vh] z-20 w-[100vw] h-[100vh]'> 
      <Canvas  camera={{position: [10,20,0], fov:30}} >
        <ambientLight intensity={1} />
        <directionalLight position={[3,3,3]} intensity={1.5}/>
      <Center>
        <Pumpkin/>
      </Center>
      <CameraAnimation/>
      <OrbitControls enableZoom={false} />
    </Canvas>
    </figure>

{/* webesite */}
    <Navbar/>
    <Hero/>
    <About/>
    <CTA/>
    </>

  )
}

export default App;