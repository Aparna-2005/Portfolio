import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/CertStyles.css"

export default function ExpCard(props) {
  return (
          <div className='experience-card'>
            <img src={props.img} className='rounded-5'/>
            <h4 class="text-light project-title">{props.title}</h4>
            <p class="exp-details" >{props.text}</p>
            <div className='d-flex gap-1'>
              <p className='text-center project-buttons'>{props.para1}</p>
              <p className='text-center project-buttons'>{props.para2}</p>
            </div>
          </div>
  )
}
