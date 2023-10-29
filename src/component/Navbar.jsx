import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='static flex justify-between text-slate-900 bg-slate-100 p-[20px]'>
        <div>
            <p className="font-semibold font-serif ml-4">Phimvipa V.</p>
        </div>

        <div className='flex text-slate-900 gap-x-7 '>
            <a className='no-underline hover:underline' href="#home">Home</a>
            <a className='no-underline hover:underline' href="#aboutme">About me</a>
            <a className='no-underline hover:underline' href="#projects">Projects</a>
            <a className='mr-2 no-underline hover:underline' href="#contact">Contact</a>
        </div>
    </nav>
  )
}

export default Navbar