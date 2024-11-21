import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Image from 'next/image'

const cutiveMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex'
})

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio of projects.'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${cutiveMono.variable} antialiased h-screen w-screen md:container md:mx-auto flex flex-col`}
      >
        <Header />
        <main className='relative w-full flex justify-center items-center flex-1'>
          {children}
        </main>
      </body>
    </html>
  )
}
