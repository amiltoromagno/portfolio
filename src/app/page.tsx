import Link from 'next/link'
import React from 'react'
import { FaFileDownload, FaGithub } from 'react-icons/fa'
import { IoLogoLinkedin } from 'react-icons/io5'

const page = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='w-4/5 h-3/5 flex flex-col items-center justify-around'>
        <section className='flex flex-col items-center'>
          <span className='text-4xl font-bold'>Amilto Romagno</span>
          <span className='text-2xl text-opacity-60 text-white'>
            Front-end Engineer
          </span>
        </section>
        <section className='flex justify-center'>
          <span className='text-opacity-60 text-white text-center'>
            Hello! I'm a front-end engineer who's been working mainly with{' '}
            <strong>Angular</strong> and <strong>React</strong> for the past 5
            years. I have a bachelor's degree in information systems, graduated
            from <a href='https://www.unisociesc.com.br/'>UNISOCIESC</a>. I'm
            proficient in english and portuguese, and also learning japanese.<br/><br/>
            Always trying to learn and understand the technologies that build
            the web.
          </span>
        </section>
        <section className='flex w-full justify-around'>
          <a
            href={'https://www.linkedin.com/in/amiltoromagno/'}
            target='_blank'
          >
            <IoLogoLinkedin className='h-10 w-10' />
          </a>
          <a href={'https://github.com/amiltoromagno/'} target='_blank'>
            <FaGithub className='h-10 w-10' />
          </a>
          <a
            href='/cv.pdf'
            download
            className='border h-full w-40 rounded-full flex justify-center items-center'
          >
            <FaFileDownload className='mr-2'/>
            Download CV
          </a>
        </section>
      </div>
    </div>
  )
}

export default page
