import React, {useEffect} from 'react'
import aboutIMage from '../Images/passport photo.JPG'
import {
    GITHUBICON,
    REACTICON,
    HTMLCSSICON,
    REDUXICON,
    CICON,
    JSICON,
    BOOTSTRAPICON,
    MONGODBICON,
    NETLIFYICON,
    SASSICON,
    SQLICON,
    NODEICON,
    GITCONTROLICON
} from '../Images/skills/index'
import Aboutlogo from '../Images/aboutlogo.png'
import {
    ARCHITLOR,
    UDAYLOR,
    MANISHLOR,
    ARCHITPDF,
    UDAYPDF,
    MANISHPDF
} from '../Images/Lor/index'
import { FaInstagramSquare, FaLinkedin, FaTwitterSquare, FaRedditSquare,FaBullseye, FaEye, FaDownload } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css'

const About = () => {

    useEffect(() => {
        AOS.init({duration: 1200})
    }, [])

    return (
        <div style={{overflowX: 'hidden'}}>
            <div className="about-logo">
                <img data-aos="fade-down" data-aos-delay="150" src={Aboutlogo} alt="logo" />
            </div>
            <div className="about-section about-page">
                <div className="about-header" data-aos="zoom-out-right" data-aos-delay="100">
                    <img src={aboutIMage} alt="reload" />
                </div>
                <div id="div" data-aos="zoom-out-left" data-aos-delay="100">
                    <h2 id='shadow' data-aos="fade-left" data-aos-delay="200">About Me</h2>
                    <h2 data-aos="fade-right" data-aos-delay="200">About Me</h2>
                    <p data-aos="fade-left" data-aos-delay="200">
                        Hello, I am Pranam Jain. I have completed my bachelors of Engineering in Computer Science from RGPV University, Bhopal. As apart time I worked for
                        Chegg India as a CSE Expert where i helped other students in solving their douts.
                    </p>
                    <p data-aos="fade-left" data-aos-delay="200">
                        In past I already worked with three startups named MyDos Technology, Star Catalyst and Chai Sutta Bar. Where I work with services like Shopify, AWS, Google Console and many more .I also held a leadership position as a Team Leader at Chai Sutta Bar during my internship.
                        Working in such an inspiring environment has allowed me to acquire new skills and knowledge.
                    </p>
                    <p data-aos="fade-left" data-aos-delay="200">
                    I am a self-learner who has been mastering web development through online learning platforms, consistently acquiring new skills on a daily basis. I am dedicated to exploring emerging technologies and incorporating them into my skill set. To date, I have gained proficiency in technologies such as React, Node.js, MongoDB, MySql, Saas and more.
                    </p>
                    <p><b>Einen schönen Tag noch!</b></p>
                    <ul>
                        <li><a href="http://www.linkedin.com/in/pranam-jain" target="_blank" rel="noopener noreferrer" ><FaLinkedin /></a></li>
                        <li><a href="https://www.instagram.com/pranam.jainn" target="_blank" rel="noopener noreferrer" ><FaInstagramSquare /></a></li>
                        <li><a href="https://twitter.com/Pranamjain02" target="_blank" rel="noopener noreferrer" ><FaTwitterSquare /></a></li>
                        <li><a href="https://www.reddit.com/user/Pranamj" target="_blank" rel="noopener noreferrer" ><FaRedditSquare /></a></li>
                    </ul>
                </div>
            </div>
            <div className='about-educations'>
                <h2 id='shadow' data-aos="fade-left" data-aos-delay="100">My Education </h2>
                <h2 data-aos="fade-right" data-aos-delay="100">My Education </h2>
                <div className='about-education'>
                    <div className='about-educationtab' data-aos="flip-right" data-aos-delay="100">
                        <h3 data-aos="fade-right" data-aos-delay="150">2018-2019</h3>
                        <h4 data-aos="fade-right" data-aos-delay="150">High School Education</h4>
                        <hr style={{marginBottom: '1.6rem', marginTop: '1.6rem'}} />
                        <h3 data-aos="fade-right" data-aos-delay="150">The Sharpage H. S. School</h3>
                        <h4 data-aos="fade-right" data-aos-delay="150">Gohad, India</h4> 
                        <p data-aos="fade-right" data-aos-delay="150"><li>79.2%</li></p>
                    </div>
                    <div className='about-educationtab' data-aos="flip-right" data-aos-delay="100">
                        <h3 data-aos="fade-right" data-aos-delay="150">2019-2023</h3>
                        <h4 data-aos="fade-right" data-aos-delay="150">Bachelor of Computer Science</h4>
                        <hr style={{marginBottom: '1.6rem', marginTop: '1.6rem'}} />
                        <h3 data-aos="fade-right" data-aos-delay="150">University Institute of Technology, RGPV</h3>
                        <h4 data-aos="fade-right" data-aos-delay="150">Bhopal, India</h4>
                        <p data-aos="fade-right" data-aos-delay="150"><li>7.85 CGPA</li></p>
                    </div>
                    <div className='about-educationtab' data-aos="flip-right" data-aos-delay="100">
                        <h3 data-aos="fade-right" data-aos-delay="150">2023</h3>
                        <h4 data-aos="fade-right" data-aos-delay="150">IELTS</h4>
                        <hr style={{marginBottom: '1.6rem', marginTop: '1.6rem'}} />
                        <h3 data-aos="fade-right" data-aos-delay="150">British Council & IDP</h3>
                        <h4 data-aos="fade-right" data-aos-delay="150">Bhopal, India</h4>
                        <p data-aos="fade-right" data-aos-delay="150"><li>7 BAND</li></p>
                    </div>
                </div>
            </div>
            <div className='about-skillcontainer'>
                <h2 id='shadow' data-aos="fade-left" data-aos-delay="100">My Skills</h2>
                <h2 data-aos="fade-right" data-aos-delay="100">My Skills</h2>
                <hr/>
                <div className='about-skills' >
                    <div data-aos="flip-right" data-aos-delay="100" className='about-skill' >
                        <img src={GITCONTROLICON} />
                    </div>
                    <div data-aos="flip-right" data-aos-delay="100" className='about-skill' >
                        <img src={REACTICON} />
                    </div>
                    <div data-aos="flip-right" data-aos-delay="100" className='about-skill' >
                        <img src={SQLICON} />
                    </div>
                    <div data-aos="flip-right" data-aos-delay="100" className='about-skill' >
                        <img src={CICON} />
                    </div>
                    <div data-aos="flip-right" data-aos-delay="100" className='about-skill' >
                        <img src={MONGODBICON} />
                    </div>
                    <div data-aos="flip-right" data-aos-delay="100" className='about-skill' >
                        <img src={NETLIFYICON} />
                    </div>
                    <div data-aos="flip-right" data-aos-delay="100" className='about-skill' >
                        <img src={SASSICON} />
                    </div>
                    <div data-aos="flip-right" data-aos-delay="100" className='about-skill' >
                        <img src={JSICON} />
                    </div>
                    <div data-aos="flip-right" data-aos-delay="100" className='about-skill' >
                        <img src={HTMLCSSICON} />
                    </div>
                    <div data-aos="flip-right" data-aos-delay="100" className='about-skill' >
                        <img src={REDUXICON} />
                    </div>
                    <div data-aos="flip-right" data-aos-delay="100" className='about-skill' >
                        <img src={BOOTSTRAPICON} />
                    </div>
                    <div data-aos="flip-right" data-aos-delay="100" className='about-skill' >
                        <img src={NODEICON} />
                    </div>
                </div>
            </div>
            <div className='about-lorcontainer'>
                <h2 id='shadow' data-aos="fade-left" data-aos-delay="100">Letter of Recommendation</h2>
                <h2 data-aos="fade-right" data-aos-delay="100">Letter of Recommendation</h2>
                <div className='about-lors'>
                    <div className='about-lor' data-aos="fade-right" data-aos-delay="100">
                        <div className='about-lorpreview'>
                            <a href='lor/1'><FaEye/></a>
                            <a href={UDAYPDF} download='Pranam Jain LOR' ><FaDownload/></a>
                        </div>
                        <img data-aos="flip-right" data-aos-delay="150" src={UDAYLOR} />
                        <div>
                            <h3 data-aos="fade-right" data-aos-delay="150">by Mr. Uday Chourasia</h3>
                            <p data-aos="fade-right" data-aos-delay="150">Associate Professor</p>
                            <p data-aos="fade-right" data-aos-delay="150">Department of Computer Science</p>
                            <p data-aos="fade-right" data-aos-delay="150">University Institute of Technology, RGPV</p>
                        </div>
                    </div>
                    <div className='about-lor' data-aos="fade-right" data-aos-delay="100">
                        <div className='about-lorpreview'>
                            <a href='lor/2'><FaEye/></a>
                            <a href={ARCHITPDF} download='Pranam Jain LOR' ><FaDownload/></a>
                        </div>
                        <img data-aos="flip-right" data-aos-delay="150" src={ARCHITLOR} />
                        <div>
                            <h3 data-aos="fade-right" data-aos-delay="150">by Mr. Archit Agrawal</h3>
                            <p data-aos="fade-right" data-aos-delay="150">Co-founder & CTO</p>
                            <p data-aos="fade-right" data-aos-delay="150">Star Catalyst</p>
                            <p data-aos="fade-right" data-aos-delay="150">Delhi, INDIA</p>
                        </div>
                    </div>
                    <div className='about-lor' data-aos="fade-right" data-aos-delay="100">
                        <div className='about-lorpreview'>
                            <a href='lor/3'><FaEye/></a>
                            <a href={MANISHPDF} download='Pranam Jain LOR' ><FaDownload/></a>
                        </div>
                        <img data-aos="flip-right" data-aos-delay="150" src={MANISHLOR} />
                        <div>
                            <h3 data-aos="fade-right" data-aos-delay="150">by Mr. Manish Ahirwal</h3>
                            <p data-aos="fade-right" data-aos-delay="150">Head of Department</p>
                            <p data-aos="fade-right" data-aos-delay="150">Department of Computer Science</p>
                            <p data-aos="fade-right" data-aos-delay="150">University Institute of Technology, RGPV</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
