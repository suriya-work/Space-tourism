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
      className={` ${barlow.variable} relative z-30 flex items-center justify-between px-6 md:px-0 md:pl-10 lg:pt-10`}
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
            className='my-6 h-10 w-10 md:h-12 md:w-12'
          />
        </Link>
      </motion.div>

      <motion.div
        key={Math.random().toString()}
        variants={SLIDE_LEFT}
        initial='hidden'
        animate='visible'
        exit='exit'
        className='relative z-20 flex items-center justify-center gap-8 md:hidden'
      >
        <SignedIn>
          <UserButton />
        </SignedIn>
        <Image
          onClick={toggleMenu}
          src={hamburger}
          alt='Icon Menu Open'
          className={` ${opened && 'opacity-0'} cursor-pointer`}
        />
      </motion.div>

      <motion.div
        key={Math.random().toString()}
        variants={FADE}
        initial='hidden'
        animate='visible'
        exit='exit'
        className='bar relative z-20 hidden h-0.5 grow translate-x-8 bg-white-5 lg:block'
      ></motion.div>

      <motion.ul
        ref={ref}
        className={`fixed right-0 top-0 z-20 h-screen w-64 list-none rounded-l-md bg-white-6 pl-8 pt-28 backdrop-blur-xl transition md:relative md:flex md:h-24 md:w-fit md:translate-x-0 md:items-center md:justify-center md:gap-x-12 md:px-12 md:pt-0 lg:min-w-[50vw] ${!opened ? 'translate-x-80' : opened ? '-translate-x-0' : 'translate-x-0'}`}
      >
        <Image
          onClick={toggleMenu}
          src={close}
          alt='Icon Menu Close'
          className={`transition ${
            opened ? 'opacity-100' : 'opacity-0'
          } absolute right-6 top-12 z-30 -translate-y-1/2 cursor-pointer md:hidden`}
        />
        {pages.map(({ title, href }, index) => (
          <Link
            onClick={toggleMenu}
            key={index}
            href={href}
            className='nav-text relative uppercase text-white md:h-full'
          >
            <motion.li
              className={`mb-12 flex w-full items-center gap-x-3 border-r-2 border-transparent transition md:mb-0 md:h-full md:w-fit md:border-b-4 md:border-r-0 [&.active]:border-white [&:not(.active)]:hover:border-white/50 ${
                isActive(href) && 'active'
              } `}
            >
              <span className='block min-w-[20px] font-bold'>0{index}</span>
              <span className='block'>{title}</span>
              {isActive(href) && (
                <motion.span
                  layoutId='underline'
                  className='absolute bottom-0 right-0 h-full w-1 bg-white md:h-1 md:w-full'
                />
              )}
            </motion.li>
          </Link>
        ))}
        <SignedOut>
          <div className='flex w-full items-center justify-center md:justify-start'>
            <button className='nav-text relative mr-5 flex w-full items-center justify-center rounded-lg border-2 border-white/50 bg-white py-2 uppercase text-black transition-all duration-300 hover:border-white hover:bg-transparent hover:text-white md:mr-0 md:w-[90px]'>
              <SignInButton />
            </button>
          </div>
        </SignedOut>
        <SignedIn>
          <div className='hidden md:block'>
            <UserButton />
          </div>
        </SignedIn>
      </motion.ul>
    </header>
  )
}

export default Navbar
