'use client'

import Lottie from 'lottie-react'

import notFoundAnimData from '@/assets/animation/notfoundanim.json'

const NotFoundAnimation = () => {
  return (
    <div className=''>
      <Lottie
        animationData={notFoundAnimData}
        className='w-[350px] md:h-[500px] md:w-full'
      />
    </div>
  )
}

export default NotFoundAnimation
