import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

import "./Styles.css"

export default function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        }
        else {
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);
    return (
        <>
            <div class={color ? "header header-bg" : "header"}>
                <Link style={{ textDecoration: "none", color: "white", fontSize: "24px", fontWeight: "bold" }}>Portfolio.</Link>
                <ul class={click ? "nav-menu active" : "nav-menu"}>
                    <li><Link to="/" js>Home</Link></li>
                    <li><Link to="/About" class="link p-3">About</Link></li>
                    <li><Link to="/Education" class="link p-3">Education</Link></li>
                    <li><Link to="/Certificate" class="link p-3">Certificate</Link></li>
                    <li><Link to="/Project" class="link p-3">Project</Link></li>
                    <li><Link to="/Contact" class="link p-3">Contact</Link></li>
                </ul>
                <div class="bars" onClick={handleClick}>
                    {click ? (<FontAwesomeIcon icon={faXmark} style={{ width: "100px", height: "30px", color: "white" }} />) : (<FontAwesomeIcon icon={faBars} style={{ width: "100px", height: "30px", color: "white" }} />)}
                </div>
            </div>
        </>
    )
}
