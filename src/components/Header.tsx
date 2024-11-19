'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { IoCloseOutline } from 'react-icons/io5'

const navItems = [
  { label: 'About', href: '/', action: 'about' },
  { label: 'Experience', href: '/experience', action: 'experience' },
  { label: 'Projects', href: '/projects', action: 'projects' }
]

const Header = () => {
  const [isOpen, setIsopen] = useState<boolean>(false)
  const navigation = (
    <nav className='flex text-right w-full mt-20 text-2xl md:text-base md:mt-0 md:text-left'>
      <ul className='w-full mr-3 md:flex md:space-x-4'>
        {navItems.map(item => (
          <li
            key={item.href}
            className='mt-6 md:mt-0'
            onClick={() => setIsopen(false)}
          >
            <Link href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )

  return (
    <header className='flex justify-end relative md:justify-end md:items-end md:h-14'>
      <div
        className='flex md:hidden justify-end z-50 absolute top-3 right-3 cursor-pointer'
        onClick={() => setIsopen(!isOpen)}
      >
        {!isOpen ? (
          <FiMenu className='h-12 w-12' />
        ) : (
          <IoCloseOutline className='h-12 w-12' />
        )}
      </div>
      <div className='hidden md:block'>{navigation}</div>
      {isOpen && (
        <div className='absolute w-full h-[calc(100vh-16px)] bg-black bg-opacity-80 backdrop-blur md:hidden z-40'>
          {navigation}
        </div>
      )}
    </header>
  )
}

export default Header
