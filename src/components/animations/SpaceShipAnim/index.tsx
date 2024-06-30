'use client'

import Lottie from 'lottie-react'

import spaceShipAnimData from '@/assets/animation/ship3.json'

const SpaceShipAnim = () => {
  return (
    <div className='absolute top-[50%] lg:top-10'>
      <Lottie animationData={spaceShipAnimData} className=' ' />
    </div>
  )
}

export default SpaceShipAnim
