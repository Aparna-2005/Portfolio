import React from 'react'
import Projpg from '../Com/Project/Projpg'
import Footer from './Footer'
import Navbar from './Navbar'
import Aboutcon from '../Com/About/Aboutcon'

export default function Project() {
  return (
    <div>
      <Navbar/>
      <Aboutcon head ="Projects." text="My project details" />
       <Projpg/>
 <Footer/>
    </div>
  )
}
