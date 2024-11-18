'use client'
import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { IoCloseOutline } from 'react-icons/io5'

const Header = () => {
  const [isOpen, setIsopen] = useState<boolean>(false)
  const navItems = (
    <nav className='flex text-right w-full mt-20 text-2xl md:text-base md:mt-0 md:text-left'>
      <ul className='w-full mr-3 md:flex md:space-x-4'>
        <li className='mt-4 md:mt-0'>About</li>
        <li className='mt-4 md:mt-0'>Experience</li>
        <li className='mt-4 md:mt-0'>Projects</li>
      </ul>
    </nav>
  )

  return (
    <header className='flex justify-end relative md:h-12 md:justify-end'>
      <div
        className='flex md:hidden justify-end z-50 absolute top-3 right-3'
        onClick={() => setIsopen(!isOpen)}
      >
        {!isOpen ? (
          <FiMenu className='h-12 w-12' />
        ) : (
          <IoCloseOutline className='h-12 w-12' />
        )}
      </div>
      <div className='hidden md:block'>{navItems}</div>
      {isOpen && (
        <div className='absolute w-full h-[calc(100vh-16px)] bg-black bg-opacity-80 backdrop-blur md:hidden'>
          {navItems}
        </div>
      )}
    </header>
  )
}

export default Header
