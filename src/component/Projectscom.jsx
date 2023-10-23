import React from 'react'
import imgRushdesktop from '../Images/Rushdesktop.png'
import imgweatherapp from '../Images/weatherapp.png'

function Projectscom() {
  return (
    <div className='relative bg-cover h-screen w-[94hv] bg-stone-50 bg-transparent'>

<p className='absolute text-left h-[50px] w-[175px] mt-10 rotate-90  font-semibold font-serif text-[6.0rem] text-stone-600'>Projects</p>

    <div className=' m-5 h-full p-5'>

        <div className='flex flex-row mt-20 space-x-6 mx-auto w-[97%] gap-2 justify-center'>

          <div className="card w-96 bg-base-100 shadow-xl object-center">
            <figure className="-p-10">
                <img src={imgweatherapp} alt="Shoes" className="rounded-xl w-[100%] bg-left" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-serif text-[1.4rem] text-sky-600">Weather app</h2>
                <p className="card-title text-[1.0rem] text-stone-600">HTML / CSS / Javascript</p>
                <div className="card-actions mt-3">
                  <button className="btn btn-outline px-10">Git</button>
                </div>
            </div>
          </div>

        <div className="card w-96 bg-base-100 shadow-xl object-center">
            <figure className="-p-10 ">
                <img alt="" className="rounded-xl" src={imgRushdesktop}/>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-serif text-[1.5rem]">RUSH Exercise</h2>
                  <p className="card-title text-[1.0rem] text-stone-600">HTML / ReactJS / Vite </p>
                  <p className='card-title text-[1.0rem] text-stone-600'>Generation team Projects with friends</p>
                <div className="card-actions mt-3">
                  <button className="btn btn-outline px-10 " src='https://github.com/phimvipa/Weather-app#weather-app'>GIt</button>
                  <button className="btn btn-outline px-10">Vercel</button>
                </div>
            </div>
        </div>

  
        </div>
    </div>

    </div>
  )
}

export default Projectscom