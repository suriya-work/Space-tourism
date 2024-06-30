'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useMemo, useState } from 'react'

import desktop from '@/assets/technology/background-technology-desktop.jpg'
import mobile from '@/assets/technology/background-technology-mobile.jpg'
import tablet from '@/assets/technology/background-technology-tablet.jpg'
import Background from '@/components/globals/Background'
import MotionDiv from '@/components/globals/MotionDiv'
import PageTitle from '@/components/globals/PageTitle'
import { technologies } from '@/constants/technologiesData'
import { FADE } from '@/lib/data'

export default function TechnologyPage() {
  const [actual, setActual] = useState(0)
  const technology = useMemo(() => technologies[actual], [actual])
  return (
    <MotionDiv>
      <Background
        mobile={mobile.src}
        tablet={tablet.src}
        desktop={desktop.src}
      />
      <PageTitle number={3} title='Space Launch 101' />
      <main className='relative z-10 mt-10 w-full'>
        <div className='mt-5 flex flex-col lg:flex-row-reverse lg:pl-24'>
          <div className='w-full lg:min-h-[35vh] lg:w-[35%]'>
            <motion.picture
              key={technology.name}
              variants={FADE}
              className='block'
            >
              <source
                media='(min-width:1024px)'
                srcSet={technology.portrait.src}
              />
              <Image
                src={technology.landscape}
                className='h-auto w-full object-cover'
                alt='Background Image'
              />
            </motion.picture>
          </div>
          <div className='mt-8 flex flex-col items-center md:mt-14 lg:mt-0 lg:grow lg:flex-row'>
            <div className='mb-6 flex w-fit gap-4 md:mb-11 lg:mb-0 lg:flex-col lg:gap-8'>
              {technologies.map(({ name }, index) => (
                <div
                  onClick={() => setActual(index)}
                  key={name}
                  className={`flex aspect-square w-10 cursor-pointer items-center justify-center rounded-full border border-white/20 text-white transition md:w-14 [&.active]:border-transparent [&.active]:bg-white [&.active]:text-primary [&:not(.active)]:hover:border-white ${
                    technology.name === name && 'active'
                  }`}
                >
                  {index + 1}
                </div>
              ))}
            </div>
            <div className='px-6 text-center text-secondary md:mx-auto md:max-w-lg lg:max-w-xl lg:text-left'>
              <span className='nav-text mb-2 block text-[14px] uppercase md:text-[16px]'>
                The Terminology ...
              </span>
              <h3 className='mb-4 text-[24px] uppercase text-white md:text-[40px] lg:text-[56px]'>
                {' '}
                {technology.name}{' '}
              </h3>
              <p className='leading-relaxed lg:text-[18px] lg:leading-loose'>
                {' '}
                {technology.description}{' '}
              </p>
            </div>
          </div>
        </div>
      </main>
    </MotionDiv>
  )
}
