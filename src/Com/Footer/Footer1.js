import React from 'react'
import './FooterStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer1() {
  return (


<div className='edu_container'>
<div class="row foo_container ">

      <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.416144613867!2d78.14246917586327!3d9.982441873334869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c6432a619da7%3A0x2c716f725c363283!2sRamasamy%20Nagar%20Arch%20-%20Allied%20Garden%20Road%2C%20Tiruppalai%2C%20Tamil%20Nadu%20625014!5e0!3m2!1sen!2sin!4v1716008822854!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="img-fluid mt-4 map"></iframe>
      </div>

      <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
        <div className='left'>
          <div className='location'>
            <FontAwesomeIcon icon={faHome} style={{ color: "white", width: "30px", height: "30px", marginRight: "2rem" }}></FontAwesomeIcon>
            <div>
              <p style={{ fontSize: "20px" }}>Madurai, TamilNadu</p>
            </div>
          </div>
          <div className='phone'>
            <FontAwesomeIcon icon={faPhone} style={{ color: "white", width: "30px", height: "30px", marginRight: "2rem" }}></FontAwesomeIcon>
            <div>
              <p style={{ fontSize: "20px" }}>9047662646</p>
            </div>
          </div>
          <div className='email'>
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "white", width: "30px", height: "30px", marginRight: "2rem" }}></FontAwesomeIcon>
            <div>
              <p style={{ fontSize: "20px" }}>aparnaravi205@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
        <div className='right'>
          <div className='social'>
            <div className='git'>
              <FontAwesomeIcon icon={faGithub} style={{ color: "white", width: "40px", height: "40px", marginRight: "2rem" }}></FontAwesomeIcon>
              <div><Link to="https://github.com/Aparna-2005" target='_blank'>GITHUB</Link></div>

            </div>
            <div className='linked'>
              <FontAwesomeIcon icon={faLinkedin} style={{ color: "white", width: "40px", height: "40px", marginRight: "2rem" }}></FontAwesomeIcon>
              <div><Link to="https://www.linkedin.com/in/aparna-mahalakshmi-r-b60513208" target='_blank'>LINKEDIN</Link></div>
            </div>
          </div>
        </div>

      </div>
    </div>
</div>


    
  )
}
