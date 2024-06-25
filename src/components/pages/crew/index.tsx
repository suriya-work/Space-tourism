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
      <main className='relative z-10 flex flex-col-reverse p-6 md:px-24 lg:pt-12 lg:min-h-[80vh] lg:grid lg:grid-cols-2'>
        <div className='flex flex-col-reverse relative z-10 lg:flex-col lg:justify-between'>
          <div className='hidden lg:block'>
            <PageTitle number={2} title='Meet Your crew' />
          </div>

          <div className='text-secondary text-center lg:text-left'>
            <h4 className='uppercase mb-4  text-[16px] lg:text-[32px] '>
              {' '}
              {member.role}{' '}
            </h4>
            <h3 className='uppercase text-white mb-7 text-[24px] lg:text-[56px] '>
              {' '}
              {member.name}{' '}
            </h3>
            <p className='leading-relaxed lg:text-[18px] '>
              {' '}
              {member.description}{' '}
            </p>
          </div>
          <div className='flex gap-x-6 my-8 justify-center lg:justify-start'>
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
            className='border-b border-white/50 w-full md:fixed md:bottom-0 md:right-0 md:w-screen md:h-[532px]  lg:h-[712px] '
          >
            <Image
              src={member.image}
              alt={member.role}
              className='block mx-auto w-auto h-[222px] md:h-full lg:mx-0 lg:ml-auto lg:mr-20 lg:mt-0 md:mt-14'
            />
          </motion.div>
        </AnimatePresence>
        <div className='lg:hidden mb-5'>
          <PageTitle number={2} title='Meet Your crew' />
        </div>
      </main>
    </MotionDiv>
  )
}

export default CrewPage
