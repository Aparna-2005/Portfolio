import React from 'react'
import ExpCard from './ExpCard'
import ExpData from './ExpData'
import { Element } from 'react-scroll'

export default function Exppg() {
  return (
    <Element name='experience'>
        <div className='exp-con'>
          <h1 className='experience-heading'>Projects</h1>
          <div className='work-container'>
            <div className='experience-container '>
              {ExpData.map((val, ind) => {
                return (
                  <ExpCard
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
