import React from 'react'
import "../styles/EduStyles.css"
import { Element } from 'react-scroll'

export default function Education() {
  return (
    <Element name="education">
      <div className='edu_container bg-black'>
            <h1 className='project-heading text-white'>Education</h1>
            <div class="row  edu_container justify-content-center">
              <div className='col-8 col-lg-4'>
                <div class="card border-0 bg-black mt-5">
                  <img src="/images/school.jpeg" className='rounded-5' alt="bg-img" />
                  <div class="card-body p-5">
                    <h1 class="card-title text-light">B.SC COMPUTER SCIENCE</h1>
                    <p class="card-text" >Lady Doak College, Madurai</p>
                  </div>
                </div>
              </div>
              <div className='col-8 col-lg-4'>
                <div class="card bg-black mt-5">
                  <img src="/images/college.jpeg" className='rounded-5' alt="bg-img"/>
                  <div class="card-body p-5">
                    <h1 class="card-title text-light h1">FULL STACK DEVELOPER</h1>
                    <p class="card-text p">KGiSL Micro College, Coimbatore</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </Element>
    
  )
}
