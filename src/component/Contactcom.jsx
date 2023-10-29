import React from 'react'

function Contactcom() {
  return (
    <footer className="footer p-10 bg-stone-200 text-base-content pt-10">
        <div>
            <p className='mt-2 mx-8 font-serif text-[2.5rem] text-left text-semibold text-stone-500'>Contact</p>
        </div>
        <nav>
            <header className="footer-title">Email</header> 
            <a href="mailto:phimvipa.vimolroj@gmail.com" className="link link-hover text-[1.1rem]">phimvipa.vimolroj@gmail.com</a> 
        </nav>
        <div>
            <header className="footer-title">Social</header> 
            <div className="grid grid-col gap-2">
                <a href="https://github.com/phimvipa" className='btn btn-active btn-neutral rounded-full px-20'>Github</a>
                <a href="https://www.linkedin.com/in/phimvipa-vimolroj/" className='btn btn-active btn-neutral rounded-full px-10 '>LinkedIn</a>
            </div>
        </div>
    </footer>
  )
}

export default Contactcom