import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { FADE } from '@/lib/data'

export default function PageTitan() {
  const [distance, setDistance] = useState(384400)
  const [travelTime, setTravelTime] = useState(1)

  useEffect(() => {
    const updateInterval = 24 * 60 * 60

    const intervalId = setInterval(() => {
      setDistance((prevDistance) => prevDistance + 1000)
      setTravelTime((prevTravelTime) => prevTravelTime + 1)
    }, updateInterval)
    return () => clearInterval(intervalId)
  }, [])
  return (
    <div className={` flex flex-col lg:items-start items-center gap-y-5`}>
      <h1 className='text-white font-normal '>TITAN</h1>
      <div
        className={`font-primary text-secondary lg:text-start text-center md:max-w-96 max-w-96 `}
      >
        <p className='text-secondary md:leading-8 leading-7 md:text-lg'>
          The only moon known to have a dense atmosphere other than Earth, Titan
          is a home away from home (just a few hundred degrees colder!). As a
          bonus, you get striking views of the Rings of Saturn.
        </p>
        <motion.div
          key={Math.random().toString()}
          variants={FADE}
          initial='hidden'
          animate='visible'
          exit='exit'
          className='grow h-0.5 bg-white-5 mt-8'
        ></motion.div>
      </div>
      <div className='flex md:flex-row flex-col md:gap-20 gap-5 md:text-start text-center mt-5'>
        <div className='flex flex-col gap-y-2 '>
          <span className='text-secondary lg:text-lg'>AVG. DISTANCE</span>
          <h5 className='text-white'>{distance.toLocaleString()} km</h5>
        </div>
        <div className='flex flex-col gap-y-2 items-center'>
          <span className='text-secondary lg:text-lg'>Est. travel time</span>
          <h5 className='text-white'>{travelTime} days</h5>
        </div>
      </div>
    </div>
  )
}
