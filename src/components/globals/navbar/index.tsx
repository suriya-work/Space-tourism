'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import logo from '@/assets/shared/logo.svg'

interface NavItem {
  href: string
  title: string
}

const ListItemsNavbar: NavItem[] = [
  { href: '/', title: 'HOME' },
  { href: '/destination', title: 'DESTINATION' },
  { href: '/crew', title: 'CREW' },
  { href: '/technology', title: 'TECHNOLOGY' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className='relative md:mt-16 z-10'>
      <div className='absolute ml-12 mt-5'>
        <Image src={logo} width={48} height={48} alt='Logo' />
      </div>
      <div className='absolute left-48 right-0  w-[500px] md:flex hidden top-[40px] border-t border-white-5'></div>
      <ul className='bg-white-5 flex justify-center gap-20 items-center md:w-[736px] md:h-[76px] absolute right-0'>
        {ListItemsNavbar.map((item, index) => {
          const isActive = pathname === item.href
          return (
            <li key={index} className='relative'>
              <Link
                href={item.href}
                className={`hover:text-secondary text-white cursor-pointer transition-colors duration-300 ${isActive && ' text-white '}`}
              >
                <span>{item.title}</span>
              </Link>
              {isActive && (
                <span className='absolute left-0 top-12 w-full h-0.5 bg-white transition-all duration-300'></span>
              )}
            </li>
          )
        })}
      </ul>
    </header>
  )
}
