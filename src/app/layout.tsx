import './globals.css'

import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Barlow_Condensed, Bellefair } from 'next/font/google'
import Head from 'next/head'

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
  applicationName: 'SpaceShip Tourism',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <Head>
        <meta name='application-name' content='SpaceShip Tourism' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='SpaceShip Tourism' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-TileColor' content={'#fff'} />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content={'#fff'} />

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/SpacShip-Tourism.png'
        />
        <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
      </Head>
      <ClerkProvider
        publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      >
        <body className={`${bellefair.variable} ${barlow.variable} bg-primary`}>
          <Navbar />
          <main>{children}</main>
        </body>
      </ClerkProvider>
    </html>
  )
}
