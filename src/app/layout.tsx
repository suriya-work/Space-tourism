import './globals.css'

import type { Metadata } from 'next'
import { Barlow_Condensed, Bellefair } from 'next/font/google'

import Navbar from '@/components/globals/navbar'

const bellefair = Bellefair({
  subsets: ['latin'],
  weight: '400',
  variable: '--bellefair-font',
})
const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: '400',
  variable: '--barlow-font',
})

export const metadata: Metadata = {
  title: 'Space Tourism Website',
  description: 'created by mrprg and suria',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${bellefair.variable} ${barlow.variable} bg-primary`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
