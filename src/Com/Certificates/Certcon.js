import React from 'react'
import './CertStyles.css'

import NPTEL from './NPTEL.jpeg'
import HTMLCSS from './HTMLCSS.jpeg'
import JS from './JS.jpeg'
import ReactCert from './React.jpeg'
import DB from './DB.jpeg'

export default function Certcon() {
    return (
        <div className='con'>
        <h1 className='project-heading'>Certificates</h1>
            <div class="container">
                <div class="row gap-5 justify-content-center justify-content-md-center">
                    <div class="col-12 col-lg-5 col-sm-12 col-md-12 col-xl-5">
                        <div class="card  rounded bg-black card1">
                            <img className=' img rounded-5 d-block' src={HTMLCSS} alt="..." />
                            <div class="card-body p-3">
                                <h1 class="card-title text-light">HTML and CSS in depth</h1>
                                <p class="card-text" >Meta - Coursera</p>
                            </div>
                        </div>

                    </div>
                    <div class="col-12 col-lg-5 col-sm-12 col-md-12 col-xl-5">
                        <div class="card card1 rounded bg-black">
                            <img src={JS} class="img rounded-5 d-block" alt="..." />
                            <div class="card-body p-3">
                                <h1 class="card-title text-light">Programming in Javascript</h1>
                                <p class="card-text">Meta - Coursera</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-lg-5 col-sm-12 col-md-12 col-xl-5">
                        <div class="card card1 bg-black">
                            <img src={ReactCert} class="img rounded-5 d-block" alt="..." />
                            <div class="card-body p-3">
                                <h1 class="card-title text-light">React Basics</h1>
                                <p class="card-text">Meta - Coursera</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-lg-5 col-sm-12 col-md-12 col-xl-5">
                        <div class="card card1 bg-black">
                            <img src={NPTEL} class="rounded-5 img ms-4" alt="..." />
                            <div class="card-body p-3 ">
                                <h1 class="card-title text-light">Programming in Java</h1>
                                <p class="card-text">NPTEL - Online Certification</p>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center align-items-center'>
                        <div className='col-12 col-lg-5 col-sm-12 col-md-12 col-xl-5'>
                            <div class="card card1 bg-black">
                                <img src={DB} class="img rounded-5 d-block" alt="..." />
                                <div class="card-body p-3">
                                    <h1 class="card-title text-light">Introduction to Databases</h1>
                                    <p class="card-text">Meta - Coursera</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>


    )
}
