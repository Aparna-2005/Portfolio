import React, { useState } from 'react'

import Navbar from './Navbar'
import Footer from './Footer'

import Aboutcon from '../Com/About/Aboutcon'
import Contact1 from '../Com/Contact/Contact1'


export default function Contact() {
  return (
    <>
    
    {/* <Navbar/>
    <Aboutcon head="Contact." text="Contact Details"/> */}
    <Navbar/>
    <Aboutcon head="Contact." text="Contact Details" />
       <Contact1/>
      <Footer/>
    </>
  )
}
