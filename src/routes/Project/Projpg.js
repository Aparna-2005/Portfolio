import React from 'react'
import ProjCard from './ProjCard'
import ProjData from './ProjData'
import { Element } from 'react-scroll'

export default function Projpg() {
  return (
    <Element name='project'>
        <div className='pro-con'>
          <h1 className='project-heading'>Projects</h1>
          <div className='work-container'>
            <div className='project-container '>
              {ProjData.map((val, ind) => {
                return (
                  <ProjCard
                    key={ind}
                    img={val.img}
                    title={val.title}
                    text={val.text}
                    para1={val.para1}
                    para2={val.para2}
                  />
                )
              })}
            </div>
          </div>
        </div>
    </Element>
    
  )
}
