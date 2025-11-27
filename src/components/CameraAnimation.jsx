import { useThree } from '@react-three/fiber'
import React from 'react'
import { gsap } from 'gsap'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);


const CameraAnimation = () => {
    const {camera} = useThree();
    useEffect(()=> {
            gsap.to(camera.position,{
                x:0,
                y:1.5,
                z:5,
                duration:4,
                ease:"power2.Out",
            });


            gsap.to(camera.position,{
                x:-3,
                y:0.5,
                z:5,
                scrollTrigger:{
                    trigger: '#about',
                    start: 'top 60%',
                    end: '60% 40%',
                    scrub: 1,

                },
                immediateRender:false,
            
            })
        },[camera])

return null;

}

export default CameraAnimation