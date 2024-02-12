import React, { useEffect } from 'react'
import aboutImg from '../Images/IMG_7649.png'
import Particles from 'react-particles-js';
import AOS from 'aos';
import 'aos/dist/aos.css'

const About = () => {

    useEffect(() => {
        AOS.init({duration: 1200})
    }, [])

    return (
        <main id="about">
            <Particles id="aboutparticles"
                    params={{
                        "particles": {
                            "number": {
                                "value": 35
                            },
                            "size": {
                                "value": 3
                            },
                            "move": {
                                "speed": 2,
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
            
            <div className="about-section abouthome-section">
                <article className="about-text"  data-aos-easing="ease-in-out" data-aos="fade-down-right">
                    <div>
                        <h3 id='shadow'>About Me</h3>
                        <h3>About Me</h3>
                        <h2>PRANAM JAIN</h2>
                    </div>
                    <p>I am a developer with a degree in Computer Science, I bring a blend of technical proficiency and creative problem-solving skills to craft innovative and efficient web solutions.</p>
                    <p>I have a robust skill set encompassing React, Node.js, SQL, HTML, CSS, JavaScript and many more, enabling the creation of dynamic and responsive web applications.</p>
                    <a href="/about" className="main-btn ">Know More</a>
                </article>
                <article className="about-img" data-aos="zoom-out-left" data-aos-delay="200">
                    <img src={aboutImg} alt="about" />
                </article>
            </div>
        </main>
    )
}

export default About
