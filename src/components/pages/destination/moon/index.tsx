import { motion } from 'framer-motion'

import { FADE, SLIDE_LEFT } from '@/lib/data'
import { DestinationtPropsType } from '@/types/destination'

export default function PageMoon({
  distance,
  travelTime,
}: DestinationtPropsType) {
  return (
    <motion.div
      variants={SLIDE_LEFT}
      initial='hidden'
      animate='visible'
      exit='exit'
      className={`flex flex-col items-center gap-y-5 lg:items-start`}
    >
      <h1 className='font-normal text-white'>MOON</h1>
      <div
        className={`max-w-96 text-center font-primary text-secondary md:max-w-96 lg:text-start`}
      >
        <p className='leading-7 text-secondary md:text-lg md:leading-8'>
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
        <motion.div
          key={Math.random().toString()}
          variants={FADE}
          initial='hidden'
          animate='visible'
          exit='exit'
          className='mt-8 h-0.5 grow bg-white-5'
        ></motion.div>
      </div>
      <div className='mt-5 flex flex-col gap-5 text-center md:flex-row md:gap-20 md:text-start'>
        <div className='flex flex-col gap-y-2'>
          <span className='text-secondary lg:text-lg'>AVG. DISTANCE</span>
          <h5 className='text-white'>{distance} </h5>
        </div>
        <div className='flex flex-col items-center gap-y-2'>
          <span className='text-secondary lg:text-lg'>Est. travel time</span>
          <h5 className='text-white'>{travelTime}</h5>
        </div>
      </div>
    </motion.div>
  )
}
