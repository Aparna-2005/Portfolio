import React from 'react'
import { Element } from 'react-scroll'
import "../../styles/ProjStyles.css"

function Certificates() {
  return (
    <Element name='certificates'>
        <div className='pro-con'>
          <h1 className='project-heading'>Certificates</h1>
          <div className='work-container'>
            <div className='project-container '>
                <div className='project-card'>
                    <img className=' img rounded-5 d-block' src="Images/HTMLCSS.jpeg" alt="..." />
                    <h4 class="text-light project-title">HTML & CSS</h4>
                    <p class="pro-details" >Meta - Coursera</p>
                </div>

                 <div className='project-card'>
                    <img src="Images/JS.jpeg" className="img rounded-5 d-block" alt="JS"/>
                    <h4 class="text-light project-title">Javascript</h4>
                    <p class="pro-details" >Meta - Coursera</p>
                </div>

                 <div className='project-card'>
                     <img src="Images/React.jpeg" className="img rounded-5 d-block" alt="..." />
                    <h4 class="text-light project-title">React JS</h4>
                    <p class="pro-details" >Meta - Coursera</p>
                </div>
            </div>

             <div className='project-container '>
                <div className='project-card'>
                    <img src="Images/NPTEL.jpeg" className="rounded-5 img" alt="..." />
                    <h4 class="text-light project-title">Programming in Java</h4>
                    <p class="pro-details" >NPTEL - Online Certification</p>
                </div>

                 <div className='project-card'>
                     <img src="Images/DB.jpeg" className="img rounded-5 d-block" alt="..." />
                    <h4 class="text-light project-title">Introduction to Databases</h4>
                    <p class="pro-details" >Meta - Coursera</p>
                </div>

                 <div className='project-card'>
                    <img src="Images/Full_stack.png" className="img rounded-5 d-block" alt="..."/>
                    <h4 class="text-light project-title">Full Stack Development</h4>
                    <p class="pro-details" >KGiSL Micro College</p>
                </div>
            </div>

            
          </div>
        </div>
    </Element>
  )
}

export default Certificates