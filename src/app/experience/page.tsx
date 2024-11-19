import React from 'react'

const experiences = [
  {
    id: 1,
    title: 'Front-end Engineer',
    company: 'VR',
    period: '2023/07 - present',
    summary:
      'Worked developing UI components using Angular v17 and AngularJS (v1) alongside CoffeeScript and Pug (.jade) templates.'
  },
  {
    id: 2,
    title: 'Front-end Engineer',
    company: 'Pontomais (VR Gente)',
    period: '2022/06 - 2023/07',
    summary: 'Worked developing user interfaces using Angular v8'
  },
  {
    id: 3,
    title: 'Front-end Engineer',
    company: 'TOTVS',
    period: '2021/04 - 2022/06',
    summary:
      'Worked with Angular v9 and Grails framework doing maintenance in web applications and creating new UI components.'
  },
  {
    id: 4,
    title: 'Systems Analist',
    company: 'Dexian',
    period: '2019/09 - 2021/04',
    summary:
      'Worked managing ERP (SAP) and Microsoft Active Directory, and also as a support analyst (Help Desk).'
  },
  {
    id: 5,
    title: 'Software Engineer',
    company: 'Techview IoT',
    period: '2019/04 - 2019/09',
    summary:
      'Worked creating new web interfaces for embedded systems using the ESP32 microcontroller, also used React to develop new UI components.'
  }
]

const page = () => {
  return (
    <div className='w-full h-full p-4 flex flex-col justify-center mt-16 md:mt-8'>
      <div className='text-2xl'>Experience</div>
      <div className='max-h-[800px] overflow-y-auto'>
        {experiences.map(item => (
          <div className='mt-10' key={item.id}>
            <div className='text-xl'>{item.title}</div>
            <div className='text-xl text-opacity-60 text-white'>
              {item.company}
            </div>
            <div className='text-opacity-60 text-white'>{item.period}</div>
            <div className='text-opacity-60 text-white'>{item.summary}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page
