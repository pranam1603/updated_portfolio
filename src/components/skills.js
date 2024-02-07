import React from 'react'
import { FaCode, FaLaptopCode } from 'react-icons/fa'
import { GiCutDiamond } from "react-icons/gi";

const Skills = () => {
    return (
        <div className="skills">
            <div className="skill-cont">
                <article id="article">
                    <h2><FaCode /></h2>
                    <h4>Front-End Developer</h4>
                    <div className="underline"></div>
                    <p>
                    Passionate about front-end development, where creativity meets code to build visually stunning and user-friendly digital interfaces.
                    </p>
                </article>
            </div>
            <div className="skill-cont">
                <article id="article">
                    <h2><GiCutDiamond /></h2>
                    <h4>MERN Developer</h4>
                    <div className="underline"></div>
                    <p>
                    Enthusiastically embracing the MERN stack, where my passion for coding converges with MongoDB, Express.js, React, and Node.js to bring innovative web solutions to life.
                    </p>
                </article>
            </div>
            <div className="skill-cont">
                <article id="article">
                    <h2><FaLaptopCode /></h2>
                    <h4>Back-End Developer</h4>
                    <div className="underline"></div>
                    <p>
                    Fascinated by backend development, where I thrive in architecting and optimizing server-side functionalities to create seamless and robust digital infrastructures.
                    </p>
                </article>
            </div>
        </div>
    )
}

export default Skills
