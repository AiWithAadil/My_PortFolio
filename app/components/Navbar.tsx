"use client"
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <header className="text-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="text-xl text-slate-200 ml-7 glow">Syed Muhammad <span className='text-2xl text-blue-500'>Adil</span> Ahmed<div className='w-70 h-0.5 bg-blue-500 mb-6'></div></span>
          </a>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center mb-2 glows">
            <Link href={'#Contact'} className="mr-5 hover:text-sky-500 transition transform hover:scale-110 glow-hover">Home</Link>
            <Link href={'#AboutMe'} className="mr-5 hover:text-sky-500 transition transform hover:scale-110 glow-hover">About</Link>
            <Link href={'#skills'} className="mr-5 hover:text-sky-500 transition transform hover:scale-110 glow-hover">Skills</Link>
            <Link href={'#Projects'} className="mr-5 hover:text-sky-500 transition transform hover:scale-110 glow-hover">Projects</Link>
            <Link href={'#Contact'} className="mr-5 hover:text-sky-500 transition transform hover:scale-110 glow-hover">Contact</Link>
          </nav>
        </div>
      </header>
      <style jsx>{`
        .glow {
          text-shadow: 0 0 10px rgba(0, 183, 255, 0.8), 0 0 20px rgba(0, 183, 255, 0.8), 0 0 30px rgba(0, 183, 255, 0.8), 0 0 40px rgba(0, 183, 255, 0.8), 0 0 50px rgba(0, 183, 255, 0.8), 0 0 60px rgba(0, 183, 255, 0.8);
        }
        .glows{
          text-shadow: 0 0 10px rgba(0, 183, 255, 0.8), 0 0 20px rgba(0, 183, 255, 0.8), 0 0 30px rgba(0, 183, 255, 0.8), 0 0 40px rgba(0, 183, 255, 0.8), 0 0 50px rgba(0, 183, 255, 0.8), 0 0 60px rgba(0, 183, 255, 0.8);
        }
      `}</style>
    </>
  )
}

export default Navbar


