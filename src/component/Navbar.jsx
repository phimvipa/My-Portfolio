import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='static flex justify-between text-slate-900 bg-slate-100 p-[20px]'>
        <div>
            <p className="font-semibold font-serif ml-4">Phimvipa V.</p>
        </div>

        <div className='flex text-slate-900 gap-x-7 '>
            <Link className='no-underline hover:underline' to="/home">Home</Link>
            <Link className='no-underline hover:underline' to="/aboutme">About me</Link>
            <Link className='no-underline hover:underline' to="/projects">Projects</Link>
            <Link className='mr-2 no-underline hover:underline' to="/contact">Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar