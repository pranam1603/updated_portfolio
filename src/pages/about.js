import React from 'react'
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

const About = () => {
    return (
        <>
            <div className="about-logo">
                <img src={Aboutlogo} alt="logo" />
            </div>
            <div className="about-section about-page">
                <div className="about-header">
                    <img src={aboutIMage} alt="reload" />
                </div>
                <div id="div">
                    <h2 id='shadow'>About Me</h2>
                    <h2>About Me</h2>
                    <p>
                        Hello, I am Pranam Jain. I have completed my bachelors of Engineering in Computer Science from RGPV University, Bhopal. As apart time I worked for
                        Chegg India as a CSE Expert where i helped other students in solving their douts.
                    </p>
                    <p>
                        In past I already worked with three startups named MyDos Technology, Star Catalyst and Chai Sutta Bar. Where I work with services like Shopify, AWS, Google Console and many more .I also held a leadership position as a Team Leader at Chai Sutta Bar during my internship.
                        Working in such an inspiring environment has allowed me to acquire new skills and knowledge.
                    </p>
                    <p>
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
                <h2 id='shadow'>My Education </h2>
                <h2>My Education </h2>
                <div className='about-education'>
                    <div className='about-educationtab'>
                        <h3>2018-2019</h3>
                        <h4>High School Education</h4>
                        <hr style={{marginBottom: '1.6rem', marginTop: '1.6rem'}} />
                        <h3>The Sharpage H. S. School</h3>
                        <h4>Gohad, India</h4>
                        <p><li>79.2%</li></p>
                    </div>
                    <div className='about-educationtab'>
                        <h3>2019-2023</h3>
                        <h4>Bachelor of Computer Science</h4>
                        <hr style={{marginBottom: '1.6rem', marginTop: '1.6rem'}} />
                        <h3>University Institute of Technology, RGPV</h3>
                        <h4>Bhopal, India</h4>
                        <p><li>7.85 CGPA</li></p>
                    </div>
                    <div className='about-educationtab'>
                        <h3>2023</h3>
                        <h4>IELTS</h4>
                        <hr style={{marginBottom: '1.6rem', marginTop: '1.6rem'}} />
                        <h3>British Council & IDP</h3>
                        <h4>Bhopal, India</h4>
                        <p><li>7 BAND</li></p>
                    </div>
                </div>
            </div>
            <div className='about-skillcontainer'>
                <h2 id='shadow'>My Skills</h2>
                <h2>My Skills</h2>
                <hr/>
                <div className='about-skills' >
                    <div className='about-skill' >
                        <img src={GITCONTROLICON} />
                    </div>
                    <div className='about-skill' >
                        <img src={REACTICON} />
                    </div>
                    <div className='about-skill' >
                        <img src={SQLICON} />
                    </div>
                    <div className='about-skill' >
                        <img src={CICON} />
                    </div>
                    <div className='about-skill' >
                        <img src={MONGODBICON} />
                    </div>
                    <div className='about-skill' >
                        <img src={NETLIFYICON} />
                    </div>
                    <div className='about-skill' >
                        <img src={SASSICON} />
                    </div>
                    <div className='about-skill' >
                        <img src={JSICON} />
                    </div>
                    <div className='about-skill' >
                        <img src={HTMLCSSICON} />
                    </div>
                    <div className='about-skill' >
                        <img src={REDUXICON} />
                    </div>
                    <div className='about-skill' >
                        <img src={BOOTSTRAPICON} />
                    </div>
                    <div className='about-skill' >
                        <img src={NODEICON} />
                    </div>
                </div>
            </div>
            <div className='about-lorcontainer'>
                <h2 id='shadow'>Letter of Recommendation</h2>
                <h2>Letter of Recommendation</h2>
                <div className='about-lors'>
                    <div className='about-lor'>
                        <div className='about-lorpreview'>
                            <a href='lor/1'><FaEye/></a>
                            <a href={UDAYPDF} download='Pranam Jain LOR' ><FaDownload/></a>
                        </div>
                        <img src={UDAYLOR} />
                        <div>
                            <h3>by Mr. Uday Chourasia</h3>
                            <p>Associate Professor</p>
                            <p>Department of Computer Science</p>
                            <p>University Institute of Technology, RGPV</p>
                        </div>
                    </div>
                    <div className='about-lor'>
                        <div className='about-lorpreview'>
                            <a href='lor/2'><FaEye/></a>
                            <a href={ARCHITPDF} download='Pranam Jain LOR' ><FaDownload/></a>
                        </div>
                        <img src={ARCHITLOR} />
                        <div>
                            <h3>by Mr. Archit Agrawal</h3>
                            <p>Co-founder & CTO</p>
                            <p>Star Catalyst</p>
                            <p>Delhi, INDIA</p>
                        </div>
                    </div>
                    <div className='about-lor'>
                        <div className='about-lorpreview'>
                            <a href='lor/3'><FaEye/></a>
                            <a href={MANISHPDF} download='Pranam Jain LOR' ><FaDownload/></a>
                        </div>
                        <img src={MANISHLOR} />
                        <div>
                            <h3>by Mr. Manish Ahirwal</h3>
                            <p>Head of Department</p>
                            <p>Department of Computer Science</p>
                            <p>University Institute of Technology, RGPV</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
