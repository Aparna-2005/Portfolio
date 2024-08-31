import React from 'react'
import './EduStyles.css'
import school from "./school.jpeg"
import clg from "./college.jpeg"

export default function Educon1() {
  return (
    <div className='edu_container bg-black'>
      <h1 className='project-heading'>Education</h1>
      <div class="row  edu_container justify-content-center">
        <div className='col-8 col-lg-4'>
          <div class="card border-0 bg-black mt-5">
            <img src={school} className='rounded-5' />
            <div class="card-body p-5">
              <h1 class="card-title text-light">B.SC COMPUTER SCIENCE</h1>
              <p class="card-text" >Lady Doak College, Madurai</p>
            </div>
          </div>
        </div>
        <div className='col-8 col-lg-4'>
          <div class="card bg-black mt-5">
            <img src={clg} className='rounded-5'/>
            <div class="card-body p-5">
              <h1 class="card-title text-light h1">FULL STACK DEVELOPER</h1>
              <p class="card-text p">KGiSL Micro College, Coimbatore</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
