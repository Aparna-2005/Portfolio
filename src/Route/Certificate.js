
import React from 'react'
import Navbar from './Navbar'
import Aboutcon from '../Com/About/Aboutcon'
import Footer from './Footer'
import Certcon from '../Com//Certificates/Certcon'

export default function Certificate() {
  return (
    <div>
      <Navbar/>
      <Aboutcon head="Certificates" text="Achievements during academic" />
      <Certcon/>
      <Footer/>
    </div>
  )
}

