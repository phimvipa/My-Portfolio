import React from 'react'
import imgHomeme  from '../Images/Homeme.jpg'
import CV from '../../src/assets/docs/CV.pdf'

const Aboutmecom = () => {
  return (
    <main className='relative bg-cover w-screen h-screen bg-stone-200 '>

      <div className='absolute h-[100%] w-[98%] mx-auto'>
        <div className='grid grid-cols-2 gap-5 mx-auto w-[94%] h-[75%] mt-20 '>
        <div className='mt-10 pl-6'>

          <h2 className='flex font-bold font-serif text-[2.6rem] text-left mt-10 text-stone-600'>About me</h2>
          <h4 className='font-bold text-[1.8rem] font-serif text-left mt-5'><span className='underline decoration-[#bda04296]'>Phimvipa Vimolroj</span> / Aomsin / 26</h4>
          <h3 className='text-[1.5rem] text-left font-extralight'>/phimph̒ wip̣hā wiml rocn̒/ <span className='italic font-normal'>noun.</span></h3>

          <p className='pt-5 text-[1.3rem] text-left font-light'>Someone who enjoys drinking Thai tea with less sugar. likes reading books,
          enjoys drawing and want to become a <span className='font-semibold italic'>software developer </span>.</p>

        <div className='mt-7'>
        <a class="btn btn-outline btn-icon btn-radius hover:opacity-50" href={CV} title="CV" download>Download CV</a>
        </div>
      </div>

      <div className='bg-stone-500 p-8 rounded-3xl shadow-xl'>
        <div>
          <h2 className='font-bold text-[1.8rem] text-left text-stone-50 underline decoration-amber-500'>Education</h2>

          <p className='pt-3 text-[1.4rem] text-left font-semibold text-stone-50'>Generation Thailand</p>
          <p className='text-[1.2rem] text-left font-light text-stone-50'>Junior Software Devoloper Bootcamp</p>

          <div className='bg-stone-600 rounded-lg pb-2 pt-1 mt-3'>
            <p className='pt-2 text-center text-[1.050rem] font-light text-stone-50'>Tech Skills : HTML / CSS / JS / React / NodeJS / ExpressJS / MongoDB / SQL / Git</p>
            <p className='pt-4 text-center text-[1.1rem] font-light text-stone-50'>Tools : Figma / Postman / Power BI / Visual Studio Code</p>
            <p className='pt-4 text-center text-[1.1rem] font-light text-stone-50'>Soft Skills : Teamwork / Proactiveness / Time Management / Growth Mindset</p>
          </div>

          <p className='pt-3 text-[1.4rem] text-left font-semibold text-stone-50'>Ramkhamhaeng University</p>
          <p className='text-[1.2rem] text-left font-light text-stone-50'>English major, Faculty of Humanities / In Progress</p>

          <div className='pb-2 pt-1 mt-7'>
            <p className='font-bold text-[1.8rem] text-left text-stone-50 underline decoration-amber-500'>Experience</p>
            <p className='pt-3 text-[1.4rem] text-left font-semibold text-stone-50'>Specialty Barista</p>
          <p className='text-[1.2rem] text-left font-light text-stone-50'>RIM Bingsu & Coffee Bar / Nov 2022 - Jan 2023</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </main>
  )
}

export default Aboutmecom