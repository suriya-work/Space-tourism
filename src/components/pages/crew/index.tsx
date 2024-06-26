'use client'

import { usePrevious } from '@mantine/hooks'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useMemo, useState } from 'react'

import desktop from '@/assets/crew/background-crew-desktop.jpg'
import mobile from '@/assets/crew/background-crew-mobile.jpg'
import tablet from '@/assets/crew/background-crew-tablet.jpg'
import Background from '@/components/globals/Background'
import MotionDiv from '@/components/globals/MotionDiv'
import PageTitle from '@/components/globals/PageTitle'
import { CREW_MEMBERS } from '@/constants/crewData'
import { SLIDE_LEFT, SLIDE_RIGHT } from '@/lib/data'

const CrewPage = () => {
  const [actual, setActual] = useState(0)
  const previous = usePrevious(actual)

  const member = useMemo(() => CREW_MEMBERS[actual], [actual])
  const variant = useMemo(() => {
    if (previous === undefined) return SLIDE_RIGHT
    if (actual > previous) return SLIDE_LEFT
    return SLIDE_RIGHT
  }, [actual, previous])

  return (
    <MotionDiv>
      <Background
        desktop={desktop.src}
        mobile={mobile.src}
        tablet={tablet.src}
      />
      <PageTitle number={2} title='Meet Your crew' />
      <main className='relative  z-10 flex md:flex-row h-[70vh] flex-col items-center justify-evenly w-full mt-5 '>
        <div className='flex flex-col relative z-10 md:gap-5 gap-2 px-20 pt-10'>
          <div className='text-secondary text-center md:text-left'>
            <h4 className='uppercase mb-4  text-[16px] md:text-[32px] '>
              {' '}
              {member.role}{' '}
            </h4>
            <h3 className='uppercase text-white mb-7 text-[24px] md:text-[56px] '>
              {' '}
              {member.name}{' '}
            </h3>
            <p className='leading-relaxed md:text-[18px] '>
              {' '}
              {member.description}{' '}
            </p>
          </div>
          <div className='flex gap-x-6 my-8 justify-center md:justify-start'>
            {CREW_MEMBERS.map(({ name }, index) => (
              <div
                onClick={() => setActual(index)}
                key={index}
                className={`w-3 aspect-square rounded-full transition cursor-pointer opacity-40 bg-white [&.active]:opacity-100 [&:not(.active)]:hover:opacity-75 ${
                  member.name === name && 'active'
                }`}
              />
            ))}
          </div>
        </div>
        <AnimatePresence>
          <motion.div
            key={member.name}
            variants={variant}
            className=' md:pr-10 w-full flex items-center justify-center'
          >
            <Image
              src={member.image}
              alt={member.role}
              className='w-[330px] md:w-[500px] '
            />
          </motion.div>
        </AnimatePresence>
      </main>
    </MotionDiv>
  )
}

export default CrewPage
