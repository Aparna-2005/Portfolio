import React from 'react'
import { Link } from 'react-router-dom'
import "./ProjStyles.css"

export default function ProjCard(props) {
  return (
          <div className='project-card'>
            <img src={props.img} className='rounded-5'/>
            <h4 class="text-light project-title">{props.title}</h4>
            <p class="pro-details" >{props.text}</p>
            <div class="button1">
              <Link to={props.para2} target='_blank' className=' text-center button'>{props.para1}</Link>
            </div>
          </div>
  )
}
