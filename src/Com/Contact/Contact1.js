import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./ContactStyles.css"
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock, faPerson } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../Route/Footer';

export default function Contact1() {
  return (
    <>
        <div className='Contact-bg p-4'>
        <div className="Contact-header">
                    <div className="text">Contact</div>
                </div>
            <div className="Contact-container mt-5">
                <div className="inputs">
                    <div className="input">
                        <FontAwesomeIcon className='icon' icon={faPerson}></FontAwesomeIcon>
                        <input typt="text" id="name" placeholder="name" required />
                    </div>
                    <div className="input">
                        <FontAwesomeIcon className='icon' icon={faEnvelope}></FontAwesomeIcon>
                        <input typt="email" id="email" placeholder="email" required />
                    </div>
                    <div className="input">
                        <FontAwesomeIcon className='icon' icon={faLock}></FontAwesomeIcon>
                        <textarea placeholder='Feedback' id="fb"></textarea>
                    </div>
                </div>
                <div className="submit_container">
                        <div className="submit">Submit</div>
                </div>
            </div>

        </div>
    </>
  )
}
