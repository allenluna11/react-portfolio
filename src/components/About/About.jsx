import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
const About = () => {
    useEffect(() => {
        Aos.init({ offset: 200,
        duration: 2000,
        delay: 100,
        });

    },[])
    return (
        <div className="about-section">
            <h2 data-aos="fade-down" className="about">About</h2>
            <div className="summary">
            <img data-aos="fade-right" src="https://images.unsplash.com/photo-1568818693338-19e2a77d504c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80" alt="Allen"/>
                <div data-aos="fade-left" className="about-text">
                    <h3 className="myName">Allen Luna</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias, totam saepe repellat officiis quia itaque veritatis culpa fugiat iure.</p>
                </div>
            </div>
            
        </div>
    )
}

export default About
