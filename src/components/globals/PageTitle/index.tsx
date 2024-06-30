'use client'

import { motion } from 'framer-motion'

import { FADE } from '@/lib/data'

interface PageTitleProps {
  title: string
  number: number | string
}

export default function PageTitle({ title, number }: PageTitleProps) {
  return (
    <motion.div
      key={Math.random().toString()}
      variants={FADE}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='nav-text relative z-20 mt-5 flex w-full justify-center uppercase text-white md:ml-20 md:mt-12 md:block md:w-fit md:text-[20px] md:tracking-[3.38px] lg:ml-28 lg:text-[28px] lg:tracking-[4.72px]'
    >
      <span data-testid='title-index' className='mr-5 font-bold opacity-25'>
        0{number}
      </span>
      <span data-testid='title-text' className=''>
        {title}
      </span>
    </motion.div>
  )
}
