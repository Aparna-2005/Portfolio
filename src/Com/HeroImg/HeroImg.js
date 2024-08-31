import React from 'react'
import './HomeStyles.css'
import { Link } from 'react-router-dom'
import aboutImg from "./About.jpg"

export default function HeroImg() {
  return (
    <div>
        <div className='hero'>
        <div className='mask'>
          <img class="into-img" src={aboutImg} />
        </div>

        <div class="content">
          <h6 style={{ color: 'white', fontSize: "25px" }}>I'm</h6>
          <h1 class="head_text" style={{ color: 'white' }}>APARNA MAHALAKSHMI R</h1>
          <p >FULL STACK DEVELOPER</p>
          <div>
            <Link to="/Project" class="btn1">PROJECT</Link>
            <Link to="/Contact" class="btn-light ms-3" >CONTACT</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
