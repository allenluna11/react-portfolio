import React, { useState, useEffect } from 'react'
import "../styles.css"

import Aos from "aos";
import "../styles.css"


const Navbar = () => {


    const [showNav, setShowNav] = useState(false);

    const handleNavbar = () => {
        setShowNav(!showNav);
    }

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    
    return (
        <div className="navbar">
            <h1 className="navbar-brand">A'll</h1>
            <ul className="navbar-links"  id={showNav ? "hidden" : "" }>
                <li className="navbar-item"><a href="#">About</a></li>
                <li className="navbar-item"><a href="#">Service</a></li>
                <li className="navbar-item"><a href="#">Certificate</a></li>
                <li className="navbar-item"><a href="#">Contact</a></li>
            </ul>
            <div data-aos="fade-in" className="hamburger" onClick={handleNavbar}>
                <div className="nav-click"></div>
                <div className="nav-click"></div>
                <div className="nav-click"></div>
            </div>
        </div>
    )
}

export default Navbar
