import { motion } from 'framer-motion'

import { FADE, SLIDE_LEFT } from '@/lib/data'
import { DestinationtPropsType } from '@/types/destination'

export default function PageMars({
  distance,
  travelTime,
}: DestinationtPropsType) {
  return (
    <motion.div
      variants={SLIDE_LEFT}
      initial='hidden'
      animate='visible'
      exit='exit'
      className={` flex flex-col lg:items-start items-center gap-y-5`}
    >
      <h1 className='text-white font-normal '>MARS</h1>
      <div
        className={`font-primary text-secondary lg:text-start text-center md:max-w-96 max-w-96 `}
      >
        <p className='text-secondary md:leading-8 leading-7 md:text-lg'>
          Don’t forget to pack your hiking boots. You’ll need them to tackle
          Olympus Mons, the tallest planetary mountain in our solar system. It’s
          two and a half times the size of Everest!
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
          <h5 className='text-white'>{distance} </h5>
        </div>
        <div className='flex flex-col gap-y-2 items-center'>
          <span className='text-secondary lg:text-lg'>Est. travel time</span>
          <h5 className='text-white'>{travelTime} </h5>
        </div>
      </div>
    </motion.div>
  )
}
