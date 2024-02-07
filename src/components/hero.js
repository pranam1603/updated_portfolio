import React from 'react'
import Particles from 'react-particles-js';
import Typewriter from 'typewriter-effect';
import { FaInstagram, FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Heroimg from '../Images/hero-section-person.png'

const Hero = () => {
    return (
        <>
            <div id="hero">
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 100
                            },
                            "size": {
                                "value": 8
                            },
                            "move": {
                                "speed": 4,
                            },
                            line_linked: {
                                shadow: {
                                    enable: true,
                                    color: "white",
                                    blur: 3
                                }
                            }
                        },
                        "polygon": {
                            "enable": true,
                            "type": 'inside',
                            "move": {
                                radius: 10
                            },
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }}
                    style={{
                        width: '100%',
                        height: '100vh',
                    }}
                />
                <div>
                    <div className="hero-info">
                        <h1>PRANAM JAIN</h1>
                        <div id="forTypewriter">I'm
                            <div><Typewriter
                                options={{
                                    strings: [" a Student.", "a Freelancer.", "a Developer."],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                            </div>
                        </div>
                        <div className="hero-ButtonContainer">
                            <a href="https://twitter.com/Pranamjain02" target="_blank" rel='noopener noreferrer' ><FaTwitter /></a>
                            <a href="https://github.com/pranam1603" target="_blank" rel='noopener noreferrer' ><FaGithub /></a>
                            <a href="http://www.linkedin.com/in/pranam-jain" target="_blank" rel='noopener noreferrer' ><FaLinkedinIn /></a>
                            <a href="https://www.instagram.com/pranam.jainn/" target="_blank" rel='noopener noreferrer' ><FaInstagram /></a>
                        </div>
                    </div>
                    <div className='imagecontainer'>
                        <div className='imagebox'>
                        <img src={Heroimg} />
                        <p className='js'>JS</p>
                        <p className='clang'>C#</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero
