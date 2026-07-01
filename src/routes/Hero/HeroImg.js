import React from 'react'
import "../../styles/HomeStyles.css"
import { Link } from "react-scroll";
import { Element } from 'react-scroll'

export default function HeroImg() {
  return (
    <Element name="home">
      <section className="hero">
        <div className="mask">
          <img src="/images/About.jpg"  alt="Hero" className="intro-img"/>
        </div>

        <div className="content">
          <h6 className="intro">I'm</h6>ū

          <h1 className="head_text">
                APARNA MAHALAKSHMI R
          </h1>

          <p className="designation">
                FULL STACK DEVELOPER
          </p>

          <div className="hero-btns">
              <Link to="project" className="btn-light">
                  View My Work
              </Link>

              <Link to="contact" className="work-btn">
                  Get In Touch
              </Link>
          </div>
        </div>
      </section>
    </Element>
    
  )
}
