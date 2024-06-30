'use client'

import Lottie from 'lottie-react'

import AstronautAnimData from '@/assets/animation/astronaut.json'

const Astronaut = () => {
  return (
    <div className=''>
      <Lottie animationData={AstronautAnimData} className='' />
    </div>
  )
}

export default Astronaut
