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
      className='md:w-fit nav-text uppercase md:mt-12 mt-5 lg:ml-28 md:ml-20 md:block flex w-full justify-center text-white md:text-[20px] md:tracking-[3.38px] lg:text-[28px] lg:tracking-[4.72px] relative z-20'
    >
      <span className='font-bold opacity-25 mr-5'>0{number}</span>
      <span className=''>{title}</span>
    </motion.div>
  )
}
