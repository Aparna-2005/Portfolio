import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Aboutcon1 from '../Com//About/Aboutcon1'
import Educon1 from '../Com/Education/Educon1'
import Certcon from '../Com//Certificates/Certcon'
import Projpg from '../Com/Project/Projpg'
import Footer from './Footer.js'
import HeroImg from '../Com/HeroImg/HeroImg'

export default function Home() {
  return (
    <div>
      <Navbar />
    <HeroImg/>
      <Aboutcon1 />
      <Educon1/>
      <Certcon/>
      <Projpg/>
      <Footer/>
    </div>
  )
}
