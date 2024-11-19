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
        className={`${cutiveMono.variable} overflow-hidden antialiased h-screen w-screen md:container md:mx-auto`}
      >
        <Header />
        <main className='relative w-full h-full flex justify-center items-center overflow-hidden md:overflow-visible'>
          {children}
          <div className='absolute md:translate-x-1/3 md:translate-y-1/3 translate-x-1/4 translate-y-1/4 opacity-10 w-[200%] h-[200%] md:w-full md:h-full overflow-hidden pointer-events-none -z-50'>
            <Image
              src={'/background-pattern.png'}
              alt='background'
              fill
              className='grayscale object-contain'
            />
          </div>
        </main>
      </body>
    </html>
  )
}
