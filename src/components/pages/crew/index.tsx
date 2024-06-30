'use client'

import { usePrevious } from '@mantine/hooks'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
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
      <PageTitle number={2} title='meet your crew' />
      <main className='relative z-10 mt-5 flex h-[70vh] w-full flex-col items-center justify-evenly md:flex-row'>
        <div className='relative z-10 flex flex-col gap-2 px-20 pt-10 md:gap-5'>
          <div className='text-center text-secondary md:text-left'>
            <h4 className='mb-4 text-[16px] uppercase md:text-[32px]'>
              {' '}
              {member.role}{' '}
            </h4>
            <h3 className='mb-7 text-[24px] uppercase text-white md:text-[56px]'>
              {' '}
              {member.name}{' '}
            </h3>
            <p className='leading-relaxed md:text-[18px]'>
              {' '}
              {member.description}{' '}
            </p>
          </div>
          <div className='my-8 flex justify-center gap-x-6 md:justify-start'>
            {CREW_MEMBERS.map(({ name }, index) => (
              <div
                onClick={() => setActual(index)}
                key={index}
                className={`aspect-square w-3 cursor-pointer rounded-full bg-white opacity-40 transition [&.active]:opacity-100 [&:not(.active)]:hover:opacity-75 ${
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
            className='flex w-full items-center justify-center md:pr-10'
          >
            <Image
              src={member.image}
              alt={member.role}
              className='w-[330px] md:w-[500px]'
            />
          </motion.div>
        </AnimatePresence>
      </main>
    </MotionDiv>
  )
}

export default CrewPage
