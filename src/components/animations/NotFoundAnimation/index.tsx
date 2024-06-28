'use client'

import Lottie from 'lottie-react'

import notFoundAnimData from '@/assets/animation/notfoundanim.json'

const NotFoundAnimation = () => {
  return (
    <div className=''>
      <Lottie animationData={notFoundAnimData} className='md:h-[500px] md:w-full w-[350px]' />
    </div>
  )
}

export default NotFoundAnimation
