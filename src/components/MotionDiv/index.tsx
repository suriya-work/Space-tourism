'use client'

import { motion } from 'framer-motion'

import { FADE } from '@/lib/data'

interface MotionDivProps {
  children: React.ReactNode
}

const MotionDiv = ({ children }: MotionDivProps) => {
  return (
    <motion.div
      key={Math.random().toString()}
      variants={FADE}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      {children}
    </motion.div>
  )
}

export default MotionDiv
