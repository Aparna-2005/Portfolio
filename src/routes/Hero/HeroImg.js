import React from 'react'
import "../../styles/HomeStyles.css"
import { Link } from 'react-router-dom'
import { Element } from 'react-scroll'

export default function HeroImg() {
  return (
    <Element name="home">
      <div>
        <div className='hero'>
        <div className='mask'>
          <img src="/images/About.jpg" alt="Hero" className="into-img"/>
        </div>

        <div className="content">
          <h6 style={{ color: 'white', fontSize: "25px" }}>I'm</h6>
          <h1 className="head_text" style={{ color: 'white' }}>APARNA MAHALAKSHMI R</h1>
          <p >FULL STACK DEVELOPER</p>
          <div>
            <Link to="/Project" className="btn1">PROJECT</Link>
            <Link to="/Contact" className="btn-light ms-3" >CONTACT</Link>
          </div>
        </div>
      </div>
    </div>
    </Element>
    
  )
}
