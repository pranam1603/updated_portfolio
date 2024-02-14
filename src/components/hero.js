import React, {useEffect} from 'react'
import Particles from 'react-particles-js';
import Typewriter from 'typewriter-effect';
import { FaInstagram, FaReact, FaTwitter, FaGithub, FaLinkedinIn, FaReddit, FaHtml5 } from 'react-icons/fa'
import Heroimg from '../Images/heero.avif'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Hero = () => {

    useEffect(() => {
        AOS.init({duration: 1200})
    }, [])


    return (
        <>
            <div id="hero">
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 80
                            },
                            "size": {
                                "value": 5
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
                <img id='hero-imagebg' src={Heroimg} alt='krf' data-aos="flip-up"/>
                <h1 data-aos="fade-right" data-aos-delay="500">PRANAM JAIN</h1>
                <div data-aos="fade-right" data-aos-delay="800" className='hero-typewriter'><Typewriter
                    options={{
                        strings: [" a Student.", "a Freelancer.", "a Developer."],
                        autoStart: true,
                        loop: true,
                    }}
                />
                </div>
                <div data-aos="fade-left" data-aos-delay="500" className="hero-icons">
                    <a href="https://twitter.com/Pranamjain02" target="_blank" rel='noopener noreferrer' ><FaTwitter /></a>
                    <a href="https://github.com/pranam1603" target="_blank" rel='noopener noreferrer' ><FaGithub /></a>
                    <a href="http://www.linkedin.com/in/pranam-jain" target="_blank" rel='noopener noreferrer' ><FaLinkedinIn /></a>
                    <a href="https://www.instagram.com/pranam.jainn/" target="_blank" rel='noopener noreferrer' ><FaInstagram /></a>
                    <a href="https://www.reddit.com/user/Pranamj" target="_blank" rel='noopener noreferrer' ><FaReddit /></a>
                </div>
                <a href='/contact' className='hero-contact' >Contact</a>
            </div>
        </>
    )
}

export default Hero
