import React from 'react'
import { SiNextdotjs, SiVite } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { BiLogoTypescript } from 'react-icons/bi'
import { FaGithub } from 'react-icons/fa'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    name: 'ERP App',
    description:
      'An ERP template with a dashboard, a header and a side navigation menu.',
    icons: [SiNextdotjs, FaReact, RiTailwindCssFill, BiLogoTypescript],
    picture: {
      url: '/erp.png',
      width: 1915,
      height: 1266
    },
    link: 'https://amilto-erp.vercel.app',
    repository: 'https://github.com/amiltoromagno/erp-app'
  },
  {
    id: 2,
    name: 'Travel App',
    description: 'An example Travel app landing page.',
    icons: [FaReact, RiTailwindCssFill, BiLogoTypescript, SiVite],
    picture: {
      url: '/travel.png',
      width: 1846,
      height: 1267
    },
    link: 'https://amilto-travel.vercel.app',
    repository: 'https://github.com/amiltoromagno/travel-app'
  },
  {
    id: 3,
    name: 'Pokédex Extension',
    description:
      'A Firefox extension to search for Pokémon and bring detailed info.',
    icons: [FaReact, RiTailwindCssFill, BiLogoTypescript, SiVite],
    picture: {
      url: '/pokedex.png',
      width: 496,
      height: 733
    },
    link: 'https://addons.mozilla.org/en-US/firefox/addon/pok%C3%A9dex-extension-app/',
    repository: 'https://github.com/amiltoromagno/pokedex-extension-app'
  },
  {
    id: 4,
    name: 'SaaS App',
    description: 'An example SaaS app landing page',
    icons: [FaReact, RiTailwindCssFill, BiLogoTypescript, SiVite],
    picture: {
      url: '/saas.png',
      width: 1764,
      height: '1270'
    },
    link: 'https://amilto-saas.vercel.app',
    repository: 'https://github.com/amiltoromagno/saas-app'
  }
]

const page = () => {
  return (
    <div className='w-full flex flex-col p-4'>
      <div className='text-2xl mt-14 md:mt-0'>Projects</div>
      <div className='w-full h-full mt-6 flex flex-wrap justify-center md:justify-start gap-6'>
        {projects.map(item => (
          <div
            className='mb-6 md:mb-0 border border-white border-opacity-20 rounded-md w-full flex flex-col items-center p-2 md:w-[48%]'
            key={item.id}
          >
            <div className='h-48 w-full relative'>
              <Image
                src={item.picture.url}
                fill
                alt='project-picture'
                className='object-contain rounded-md'
              />
            </div>
            <div className='flex items-center justify-center w-full'>
              <a href={item.link} target='_blank' className='mr-2 mt-1'>
                {item.name}
              </a>{' '}
              |
              <a href={item.repository} className='ml-2 mt-[2px]'>
                <FaGithub />
              </a>
            </div>
            <div className='text-sm text-center text-white text-opacity-60'>
              {item.description}
            </div>
            <div className='w-full flex flex-col items-center'>
              <div className='text-xs mt-2 mb-2'>Built with</div>
              <div className='flex justify-between w-3/4 md:w-1/3'>
                {item.icons.map(Icon => (
                  <Icon className='w-8 h-8' key={Icon.name}/>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page
