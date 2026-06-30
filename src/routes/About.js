import React from 'react'
import Navbar from './Navbar'
import Aboutcon from '../components/About/Aboutcon'
// import Footer from './Footer'

import { Element } from "react-scroll";
import { Link } from 'react-router-dom'

import "../styles/AboutStyles.css"


export default function About(props) {
  return (
    <div>
      <Navbar/>
      <Element name="about">
      <div className='abt bg-black'>
        <h1 className='project-heading text-white pt-3'>About</h1>
        <div className='about-content  p-5'>
          <div className="card mb-3 child border-0 bg-black" >
            <div className="row g-0">
              <div className="col-md-4 col-4 col-lg-4">
                <img src="/images/Aparna_Image.png" class="img-fluid rounded-start img" alt="..." style={{width:"250px", height:"300px"}}/>
              </div>
              <div className="col-md-8 col-8 col-lg-8">
                <div className="card-body">
                  <p className="card-text ms-3 text-light text-center para1">Who Am I?</p>
                  <p className="card-text ms-3 text-light text-center para2">Passionate and experienced Full Stack Developer with freelancing expertise in building modern, responsive, and scalable web applications using React.js, Next.js, Django, and other modern web technologies.</p>
                  <Link to="/Contact" className='btn1 text-center text-dark mt-5'>CONTACT</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>  
      {/* <Footer/> */}
    </div>
  )
}
