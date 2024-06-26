'use client'

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { motion } from 'framer-motion'
import { Barlow_Condensed } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useCallback, useRef, useState } from 'react'

import close from '@/assets/shared/icon-close.svg'
import hamburger from '@/assets/shared/icon-hamburger.svg'
import logo from '@/assets/shared/logo.svg'
import useOutSideClick from '@/hooks/useOutSideClick'
import { FADE, SLIDE_LEFT, SLIDE_RIGHT } from '@/lib/data'

const pages = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Destination',
    href: '/destination',
  },
  {
    title: 'Crew',
    href: '/crew',
  },
  {
    title: 'Technology',
    href: '/technology',
  },
]

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: '400',
  variable: '--barlow-font',
})

function Navbar() {
  const [opened, setOpened] = useState<boolean>(false)

  const path = usePathname()

  const ref = useRef<HTMLUListElement>(null)

  useOutSideClick(ref, () => {
    if (opened) setOpened(false)
  })

  const isActive = useCallback((href: string) => path === href, [path])

  const toggleMenu = () => {
    setOpened((state) => !state)
  }

  return (
    <header
      className={` ${barlow.variable} relative z-30 flex justify-between items-center px-6 md:px-0 md:pl-10 lg:pt-10`}
    >
      <motion.div
        key={Math.random().toString()}
        variants={SLIDE_RIGHT}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <Link href={'/'}>
          <Image
            src={logo}
            alt='logo iamge'
            className=' my-6 w-10 h-10 md:w-12 md:h-12'
          />
        </Link>
      </motion.div>

      <motion.div
        key={Math.random().toString()}
        variants={SLIDE_LEFT}
        initial='hidden'
        animate='visible'
        exit='exit'
        className='relative z-20 md:hidden flex items-center justify-center gap-8'
      >
        <SignedIn>
          <UserButton />
        </SignedIn>
        <Image
          onClick={toggleMenu}
          src={hamburger}
          alt='Icon Menu Open'
          className={` ${opened && ' opacity-0'} cursor-pointer`}
        />
      </motion.div>

      <motion.div
        key={Math.random().toString()}
        variants={FADE}
        initial='hidden'
        animate='visible'
        exit='exit'
        className='bar grow hidden lg:block h-0.5  bg-white-5 translate-x-8 relative z-20'
      ></motion.div>

      <motion.ul
        ref={ref}
        className={` list-none bg-white-6 transition rounded-l-md backdrop-blur-xl  fixed top-0 right-0 h-screen w-64 z-20 pt-28 pl-8 md:relative md:h-24 md:w-fit md:px-12 md:pt-0 md:translate-x-0 md:flex md:justify-center md:items-center md:gap-x-12
          lg:min-w-[50vw] ${!opened ? '  translate-x-80' : opened ? '-translate-x-0' : 'translate-x-0'}`}
      >
        <Image
          onClick={toggleMenu}
          src={close}
          alt='Icon Menu Close'
          className={`transition ${
            opened ? ' opacity-100' : 'opacity-0'
          }  absolute top-12 right-6 -translate-y-1/2 z-30 cursor-pointer md:hidden`}
        />
        {pages.map(({ title, href }, index) => (
          <Link
            onClick={toggleMenu}
            key={index}
            href={href}
            className='nav-text uppercase relative text-white md:h-full'
          >
            <motion.li
              className={`flex items-center mb-12 w-full transition border-r-2 border-transparent gap-x-3 [&:not(.active)]:hover:border-white/50 [&.active]:border-white
                            md:mb-0 md:w-fit md:border-r-0 md:border-b-4 md:h-full ${
                              isActive(href) && 'active'
                            } `}
            >
              <span className='block font-bold min-w-[20px] '>0{index}</span>
              <span className='block'>{title}</span>
              {isActive(href) && (
                <motion.span
                  layoutId='underline'
                  className='absolute bottom-0 right-0 h-full w-1 md:w-full md:h-1 bg-white'
                />
              )}
            </motion.li>
          </Link>
        ))}
        <SignedOut>
          <div className=' w-full flex items-center justify-center md:justify-start'>
            <button className='nav-text uppercase relative hover:text-white hover:bg-transparent transition-all duration-300 md:w-[90px] w-full md:mr-0 mr-5 flex items-center justify-center py-2 rounded-lg border-2 border-white/50 hover:border-white bg-white text-black'>
              <SignInButton />
            </button>
          </div>
        </SignedOut>
        <SignedIn>
          <div className=' md:block hidden'>
            <UserButton />
          </div>
        </SignedIn>
      </motion.ul>
    </header>
  )
}

export default Navbar
