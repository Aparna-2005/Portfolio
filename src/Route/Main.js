import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Education from './Education'
import Certificate from './Certificate'
import Project from './Project'
import Footer from './Footer'
import Contact from './Contact'

export default function Main() {

  return (
    <div>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Education" element={<Education/>}/>
            <Route path="/Certificate" element={<Certificate/>}/>
            <Route path="/Project" element={<Project/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Footer" element={<Footer/>}/>
        </Routes>
    </div>
  )
}
