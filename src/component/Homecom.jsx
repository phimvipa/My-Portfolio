import React from 'react'
import imgHomeme from '../Images/Homeme.jpg'
import imgbg from '../Images/bg.jpg'


const Homecom = () => {
  return (
    <main className='bg-cover w-screen h-screen bg-stone-50 '>
      <img className='absolute bg-cover h-[97hv]' src={imgbg}/>

  <div className='absolute border-2 border-stone-50 h-screen w-[97%] m-5 mb-6'>
      <div className=' p-4 pr-10 pb-10 h-screen'>

        <p className=' text-right text-stone-50 font-semibold text-[1.0rem] font-serif [text-shadow:_0_2px_0_rgb(0_0_0_/_30%)]'>The Creation of Adam</p>
        <div className='text-left ml-7 mt-6 absolute'>
            <p className='-mt-5 text-stone-50 text-[2.3rem] font-light -mb-6'>Hello I'm,</p>
            <h1 className='text-[5.0rem] font-semibold font-serif text-stone-300 drop-shadow-lg [text-shadow:_0_2px_0_rgb(0_0_0_/_30%)]'>Phimvipa Vimolroj</h1>
            <p className='absolute  text-[2.8rem] -mt-7 bg-gradient-to-b from-amber-200 to-amber-800 bg-clip-text text-transparent italic font-semibold'>Software Tester.</p>

          
        </div>

        <div className='flex flex-col-reverse  mt-10 h-[90%]'>
        <p className='absolute  text-left text-stone-50 font-serif font-semibold text-[1.0rem] [text-shadow:_0_2px_0_rgb(0_0_0_/_30%)]'>Creazione di Adamo / Michelangelo</p>
        <p className='  text-right text-stone-50 font-serif font-semibold text-[2.0rem] [text-shadow:_0_2px_0_rgb(0_0_0_/_30%)]'>Some people dont even need to study Art. <span className=' text-amber-700 space-x-1 verflow-x-auto md:overflow-x-hidden md:grid -mt-3'>They can create an Code.</span></p>

        </div>
      </div>
      </div>
    </main>
  )
}

export default Homecom