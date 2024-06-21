'use client'
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import { ReactNode, useState } from 'react'

import desktop from '@/assets/destination/background-destination-desktop.jpg'
import mobile from '@/assets/destination/background-destination-mobile.jpg'
import tablet from '@/assets/destination/background-destination-tablet.jpg'
import europa from '@/assets/destination/image-europa.png'
import mars from '@/assets/destination/image-mars.png'
import moon from '@/assets/destination/image-moon.png'
import titan from '@/assets/destination/image-titan.png'
import Background from '@/components/globals/Background'
import PageTitle from '@/components/globals/PageTitle'
import { SLIDE_RIGHT } from '@/lib/data'

import PageEuropa from './europa'
import PageMars from './mars'
import PageMoon from './moon'
import PageTitan from './titan'

interface Destination {
  title: string
  image: StaticImageData
  description: ReactNode
}

const destinations: Destination[] = [
  {
    title: 'Moon',
    image: moon,
    description: <PageMoon />,
  },
  {
    title: 'Mars',
    image: mars,
    description: <PageMars />,
  },
  {
    title: 'Europa',
    image: europa,
    description: <PageEuropa />,
  },
  {
    title: 'Titan',
    image: titan,
    description: <PageTitan />,
  },
]

const DestinationPage = () => {
  const [currentDestination, setCurrentDestination] = useState<Destination>(
    destinations[0]
  )

  const handleDestinationClick = (destination: Destination) => {
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
      <div className='relative lg:px-36 flex lg:flex-row flex-col justify-between lg:items-start items-center'>
        <div className='flex items-center lg:py-32 py-20'>
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
              className='lg:w-[480px] lg:h-[480px] md:w-[300px] md:h-[300px] w-[150px] h-[150px]'
            />
          </motion.div>
        </div>
        <div>
          <div>
            <motion.ul className='flex items-center gap-10 list-none lg:mt-32'>
              {destinations.map((destination, index) => (
                <motion.li
                  key={index}
                  onClick={() => handleDestinationClick(destination)}
                  className={`nav-text uppercase transition text-white cursor-pointer ${currentDestination.title === destination.title ? 'active' : ''}`}
                >
                  <motion.div
                    className={`flex w-full transition border-b-4 border-transparent ${currentDestination.title === destination.title ? 'border-white' : 'hover:border-white/50'}`}
                  >
                    <span className='block mb-2'>{destination.title}</span>
                    {currentDestination.title === destination.title && (
                      <motion.span className='bg-white h-2' />
                    )}
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>
            <div className='mt-8 text-white'>
              <p className='mt-4'>{currentDestination.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DestinationPage
