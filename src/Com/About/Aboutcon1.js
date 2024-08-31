import React from 'react'
import './AboutStyles.css'
import aboutImg from "./Home.jpg"
import { Link } from 'react-router-dom'

export default function Aboutcon1() {
  return (
    <div className='abt bg-black'>
       <h1 className='project-heading'>About</h1>
      <div className='about-content  p-5'>
        <div class="card mb-3 child border-0 bg-black" >
          <div class="row g-0">
            <div class="col-md-4  col-4 col-lg-4">
              <img src={aboutImg} class="img-fluid rounded-start img" alt="..." style={{width:"300px", height:"230px"}}/>
            </div>
            <div class="col-md-8 col-8 col-lg-8">
              <div class="card-body">
                <p class="card-text ms-3 text-light text-center para1">Who Am I?</p>
                <p class="card-text ms-3 text-light text-center para2">A dedicated Full Stack Developer with a passion for creating robustand scalable web applications.</p>
                <Link to="/Contact" className='btn1 text-center text-dark mt-5'>CONTACT</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
