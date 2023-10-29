import React from 'react'
import imgRushdesktop from '../Images/Rushdesktop.png'
import imgweatherapp from '../Images/weatherapp.png'
import imgAirbnb from '../Images/Airbnb.png'

function Projectscom() {
  return (
    <div className='relative bg-cover h-screen w-[94hv] bg-stone-50 bg-transparent'>

<p className='absolute text-left h-[55px] w-[175px] mt-10 rotate-90 font-semibold font-serif text-[6.0rem] text-stone-600'>Projects</p>

    <div className=' m-5 h-full p-5'>

        <div className='flex flex-row mt-20 space-x-6 mx-auto w-[97%] gap-2 justify-center'>

          <div className="card w-96 bg-base-100 shadow-xl object-center">
            <figure className="-p-10 ">
                <img src={imgweatherapp} alt="Shoes" className="rounded-xl w-[520px] h-[230px]bg-center" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-serif text-[1.4rem] text-sky-600">Weather app</h2>
                <p className="card-title text-[1.0rem] text-stone-600">HTML / CSS / Javascript</p>
                <p className="card-title text-[1.0rem] text-stone-900 -mt-2">Desktop Responsive</p>
                <div className="card-actions mt-3">
                  <a href="https://github.com/phimvipa/Weather-app" className="btn btn-outline px-10 rounded-full">Git</a>
                </div>
            </div>
          </div>

        <div className="card w-96 bg-base-100 shadow-xl object-center">
            <figure className="-p-10 ">
                <img  className="rounded-xl w-[520px] h-[230px]" src={imgRushdesktop}/>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-serif text-[1.5rem]">RUSH Exercise</h2>
                  <p className="card-title text-[1.0rem] text-stone-600">ReactJS / Vite / Tailwind / NodeJS / ExpressJS / Mondo.DB</p>
                  <p className='card-title text-[1.0rem] text-stone-600'>Team Projects with Bootcamp Friends</p>
                  <p className='card-title text-[1.0rem] text-stone-900 -mt-2'>Desktop Responsive</p>
                <div className="card-actions mt-3">
                  <a href="https://github.com/Siraphob1/rush-excercise" className="btn btn-outline px-10 rounded-full">Git</a>
                  <a href='https://rush-excercise.vercel.app/' className="btn btn-outline px-10 rounded-full">Vercel</a>
                </div>
            </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl object-center">
            <figure className="">
                <img src={imgAirbnb} alt="airbnb" className="rounded-xl w-[100%s] h-[230px] bg-center" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-serif text-[1.4rem] text-teal-700">AirBNB</h2>
                <p className="card-title text-[1.0rem] text-stone-600">HTML / CSS</p>
                <div className="card-actions mt-3">
                  <a href="https://github.com/phimvipa/AirBNB-Clone" className="btn btn-outline px-10 rounded-full">Git</a>
                  <a href='https://air-bnb-clone-red.vercel.app/' className="btn btn-outline px-10 rounded-full">Vercel</a>
                </div>
            </div>
          </div>

  
        </div>
    </div>

    </div>
  )
}

export default Projectscom