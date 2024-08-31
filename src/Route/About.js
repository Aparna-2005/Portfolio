import React from 'react'
import Navbar from './Navbar'
import Aboutcon from '../Com/About/Aboutcon'
import Footer from './Footer'
import Aboutcon1 from '../Com/About/Aboutcon1'


export default function About(props) {
  return (
    <div>
      <Navbar/>
      <Aboutcon head="About." text="I'm a friendly Full Stack Developer"/>
      <Aboutcon1/>
      <Footer/>
    </div>
  )
}
