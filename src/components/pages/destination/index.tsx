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
      <motion.div className='relative  flex lg:flex-row flex-col justify-around  items-center h-[50vh] mt-16'>
        <div className='flex items-center mt-10'>
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
              className='lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] w-[200px] h-[200px] '
            />
          </motion.div>
        </div>
        <motion.div
          variants={SLIDE_LEFT}
          initial='hidden'
          animate='visible'
          exit='exit'
          className='h-full flex items-center justify-center mt-16'
        >
          <div>
            <motion.ul className='flex items-center lg:justify-start justify-center gap-10 list-none '>
              {destinations.map((destination, index) => (
                <motion.li
                  key={index}
                  onClick={() => handleDestinationClick(destination)}
                  className={`nav-text uppercase transition text-white h-[10px] cursor-pointer ${currentDestination.title === destination.title ? 'active' : ''}`}
                >
                  <motion.div
                    className={`flex w-full relative transition  border-transparent ${currentDestination.title === destination.title ? 'border-white' : 'hover:border-white/50'}`}
                  >
                    <span className='block mb-3'>{destination.title}</span>
                    {currentDestination.title === destination.title && (
                      <motion.span
                        layoutId='underline-text'
                        className='absolute bottom-0 right-0 w-full h-1 bg-white'
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
