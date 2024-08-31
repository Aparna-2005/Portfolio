import React from 'react'
import aboutImg from "./Home.jpg"
import './AboutStyles.css'

export default function Aboutcon(props) {
    return (
        <div>
            <div className='hero1'>
                <div className='mask1'>
                    <img class="into-img1" src={aboutImg} />
                </div>

                <div class="content1">
                    <h1 class="head_text1" style={{color:'white'}}>{props.head}</h1>
                    <p >{props.text}</p>
                </div>
            </div>
        </div>
    )
}
