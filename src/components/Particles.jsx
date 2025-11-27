import React from 'react'
import { Stars } from '@react-three/drei'
const Particles = () => {
  return (
    <Stars
        radius={50}
        depth={50}
        count={600}
        factor={4}
        fade
        speed={1}
    />
  )
}

export default Particles