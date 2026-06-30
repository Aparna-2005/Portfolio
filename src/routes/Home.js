import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from './Navbar'
import About from './About'
import Education from './Education'
import Projpg from './Project/Projpg'
import HeroImg from './Hero/HeroImg'
import Exppg from './Experience/Exppg'
import Certificates from './Certificates/Certificates'


export default function Home() {
  return (
    <div id="home">
      <Navbar/>
      <HeroImg/>
      <About/>
      <Education/>
      <Projpg/>
      <Certificates/>
      <Exppg/>
    </div>
  )
}
