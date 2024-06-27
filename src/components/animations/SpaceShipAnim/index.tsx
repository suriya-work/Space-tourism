'use client'

import Lottie from 'lottie-react'

import spaceShipAnimData from '@/assets/animation/ship3.json'

const SpaceShipAnim = () => {
  return (
    <div className=' absolute lg:top-10 top-[50%] '>
      <Lottie animationData={spaceShipAnimData} className=' ' />
    </div>
  )
}

export default SpaceShipAnim
