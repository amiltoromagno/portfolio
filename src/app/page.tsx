import React from 'react'
import { FaFileDownload, FaGithub } from 'react-icons/fa'
import { IoLogoLinkedin } from 'react-icons/io5'

const page = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='w-full h-4/5 flex flex-col items-center justify-around p-2'>
        <section className='flex flex-col items-center'>
          <span className='text-3xl md:text-4xl font-bold w-full'>
            Amilto Romagno
          </span>
          <span className='text-2xl text-opacity-60 text-white'>
            Front-end Engineer
          </span>
        </section>
        <section className='w-full flex justify-center md:w-3/5'>
          <span className='text-opacity-60 text-white text-center'>
            Hello! I'm a front-end engineer who's been working mainly with{' '}
            <strong>Typescript</strong> using <strong>Angular</strong> and{' '}
            <strong>React</strong> for the past 5 years. In 2021 I acquired my
            bachelor's degree in information systems, graduating from{' '}
            <a href='https://www.unisociesc.com.br/'>UNISOCIESC</a>, and since
            then I've worked on small and big companies, including Latin
            America's biggest software company. I speak portuguese and I'm
            proficient in english, also currently learning japanese.
            <br />
            <br />
            Web development is something I really like, so I'm always trying to learn and
            understand the technologies that build the web.
          </span>
        </section>
        <section className='flex w-full justify-around'>
          <div className='w-full flex justify-around md:w-2/5'>
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
              <FaFileDownload className='mr-2' />
              Download CV
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default page
