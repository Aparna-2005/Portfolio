import React,{useState} from 'react'
import Navbar from './Navbar'
import Aboutcon from '../Com/About/Aboutcon'
import Footer from './Footer'
import Educon1 from '../Com//Education/Educon1'

export default function Education() {
  return (
    <div>
       <Navbar/>
      <Aboutcon head="Education." text="Certified Full Stack Developer"/>
      <Educon1/>
      <Footer/>
    </div>
  )
}
