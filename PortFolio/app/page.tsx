import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Project from './components/Project'
import About from './components/About'
import Skill from './components/Skill'

const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  )
}

export default page