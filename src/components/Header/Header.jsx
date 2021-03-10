import React from 'react'
import Type from "react-typed";
import Particles from "react-tsparticles";

const Header = () => {

    return (
        <div className="header-section">
            <h2 className="hero">I'm Mark Allen</h2>
            <Type
                className="type-text"
                strings={["Computer Engineer", "Web Developer", "Web Designer"]}
                typeSpeed={80}
                backSpeed={80}
                loop
            />
            <a href="" className="header-button">Download CV</a>
            <div className="green"></div>
            <div className="red"></div>

            <Particles
                className="particles"
        options={{
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#dd5950", "#ffffff", "#eca92d"],
            },
            links: {
              color: ["#dd5950", "#ffffff", "#eca92d"],
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: ["star", "circle", "square"],
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
        </div>
    )
}

export default Header
