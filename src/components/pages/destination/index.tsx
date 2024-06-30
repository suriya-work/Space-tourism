'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

import desktop from '@/assets/destination/background-destination-desktop.jpg'
import mobile from '@/assets/destination/background-destination-mobile.jpg'
import tablet from '@/assets/destination/background-destination-tablet.jpg'
import europa from '@/assets/destination/image-europa.png'
import mars from '@/assets/destination/image-mars.png'
import moon from '@/assets/destination/image-moon.png'
import titan from '@/assets/destination/image-titan.png'
import Background from '@/components/globals/Background'
import PageTitle from '@/components/globals/PageTitle'
import { SLIDE_LEFT, SLIDE_RIGHT } from '@/lib/data'
import { DestinationDataType } from '@/types/destination'

import PageEuropa from './europa'
import PageMars from './mars'
import PageMoon from './moon'
import PageTitan from './titan'

const destinations: DestinationDataType[] = [
  {
    title: 'Moon',
    image: moon,
    description: <PageMoon distance={'384000 KM'} travelTime={'2 DAYS'} />,
  },
  {
    title: 'Mars',
    image: mars,
    description: <PageMars distance={'225 MIL. KM'} travelTime={'9 MONTH'} />,
  },
  {
    title: 'Europa',
    image: europa,
    description: <PageEuropa distance={'682 MIL. KM'} travelTime={'3 YEARS'} />,
  },
  {
    title: 'Titan',
    image: titan,
    description: <PageTitan distance={'1.6 BIL. km'} travelTime={'7 YEARS'} />,
  },
]

const DestinationPage = () => {
  const [currentDestination, setCurrentDestination] =
    useState<DestinationDataType>(destinations[0])

  const handleDestinationClick = (destination: DestinationDataType) => {
    setCurrentDestination(destination)
  }

  return (
    <div>
      <Background
        tablet={tablet.src}
        mobile={mobile.src}
        desktop={desktop.src}
      />
      <PageTitle number={1} title='pick your destination' />
      <motion.div className='relative mt-16 flex h-[50vh] flex-col items-center justify-around lg:flex-row'>
        <div className='mt-10 flex items-center'>
          <motion.div
            key={Math.random().toString()}
            variants={SLIDE_RIGHT}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <Image
              src={currentDestination.image}
              alt={`image-${currentDestination.title}`}
              className='h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px]'
            />
          </motion.div>
        </div>
        <motion.div
          variants={SLIDE_LEFT}
          initial='hidden'
          animate='visible'
          exit='exit'
          className='mt-16 flex h-full items-center justify-center'
        >
          <div>
            <motion.ul className='flex list-none items-center justify-center gap-10 lg:justify-start'>
              {destinations.map((destination, index) => (
                <motion.li
                  key={index}
                  onClick={() => handleDestinationClick(destination)}
                  className={`nav-text h-[10px] cursor-pointer uppercase text-white transition ${currentDestination.title === destination.title ? 'active' : ''}`}
                >
                  <motion.div
                    className={`relative flex w-full border-transparent transition ${currentDestination.title === destination.title ? 'border-white' : 'hover:border-white/50'}`}
                  >
                    <span className='mb-3 block'>{destination.title}</span>
                    {currentDestination.title === destination.title && (
                      <motion.span
                        layoutId='underline-text'
                        className='absolute bottom-0 right-0 h-1 w-full bg-white'
                      />
                    )}
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>
            <div className='mt-8 text-white'>
              <div className='mt-4'>{currentDestination.description}</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default DestinationPage
