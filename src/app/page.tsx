'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

import desktop from '@/assets/home/background-home-desktop.jpg'
import mobile from '@/assets/home/background-home-mobile.jpg'
import tablet from '@/assets/home/background-home-tablet.jpg'
import Background from '@/components/globals/Background'
import MotionDiv from '@/components/globals/MotionDiv'
import { SLIDE_LEFT, SLIDE_RIGHT } from '@/lib/data'

export default function Home() {
  const router = useRouter()
  return (
    <MotionDiv>
      <Background
        mobile={mobile.src}
        tablet={tablet.src}
        desktop={desktop.src}
      />

      <main className='relative z-10 flex min-h-[80vh] flex-col items-center justify-evenly lg:flex-row lg:items-end lg:justify-between lg:p-32'>
        <motion.div
          variants={SLIDE_RIGHT}
          className={`px-4 text-center font-primary text-secondary md:mx-auto md:max-w-lg lg:mx-0 lg:text-left`}
        >
          <span
            className={`nav-text text-lg uppercase lg:-translate-x-8 lg:text-3xl`}
          >
            So, you want to travel to
          </span>
          <h1 className={`my-6 font-secondary uppercase text-white`}>Space</h1>
          <p>{`Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!`}</p>
        </motion.div>

        <motion.div
          onClick={() => {
            router.push('/destination')
          }}
          variants={SLIDE_LEFT}
          className='group relative flex h-48 w-48 items-center justify-center rounded-full bg-white font-primary uppercase tracking-[1.25px] md:h-60 md:w-60 lg:h-72 lg:w-72'
        >
          <div className='absolute left-1/2 top-1/2 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 scale-50 cursor-pointer rounded-full bg-white/10 transition duration-[700ms!important] ease-in-out group-hover:scale-100'></div>
          <span className='relative z-10 text-lg text-primary hover:cursor-pointer md:text-3xl'>
            Explore
          </span>
        </motion.div>
      </main>
    </MotionDiv>
  )
}
