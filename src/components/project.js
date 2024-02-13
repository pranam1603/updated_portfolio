import React, {useEffect} from 'react'
import { FaGithubSquare, FaPaperPlane, } from 'react-icons/fa'
import { SiNetlify } from 'react-icons/si'
import error from '../Images/error.png'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Project = ({ reactProject }) => {

    useEffect(() => {
        AOS.init({duration: 1200})
    }, [])

    return (
        <div className="project">
            {reactProject.map(project => {
                const { id, text, url, code, type, image, language } = project
                return (
                    <article className="card" key={id} data-aos="flip-right" data-aos-delay="150">
                        <div className="card-header">
                            <img src={image ? image : error} alt="projectPicture" />
                        </div>
                        <div className="icon-middle">
                            <a href={url} target="_blank" rel="noopener noreferrer"><FaPaperPlane /></a>
                        </div>
                        <div className="card-body">
                            <h3>{text}</h3>
                            <p>{type ? type : 'basic'}</p>
                            <ul>
                                {language.map((lang, index) => {
                                    return (
                                        <li key={index}>{lang.icon}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="card-footer">
                            <span><a className="git" rel="noopener noreferrer" href="https://github.com/pranam1603" target="_blank"><FaGithubSquare /></a><span style={{ marginLeft: '10px' }} className="git"><SiNetlify /></span></span>
                            <span><a href={code} target="_blank" rel="noopener noreferrer">Source Code</a></span>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export default Project
