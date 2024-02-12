import React, { useEffect } from 'react'
import video from '../Videos/0212.mp4'
import AOS from 'aos';
import 'aos/dist/aos.css'

const HomeProjects = ({ item }) => {

    useEffect(() => {
        AOS.init({duration: 1200})
    }, [])

    const { image, language, text, url } = item
    return (
        <div className="product">
            <div className="productHeader" data-aos="new-animation" data-aos-delay="200">
                <a href={url} target="_blank" rel="noopener noreferrer" ><video className="productvideo" src={video} alt="productMAge" autoPlay={true} muted={true} loop={true} /></a>
            </div>
            <h3 data-aos="fade-right" data-aos-delay="400"><a href={url} rel="noopener noreferrer" target="_blank">{text}</a></h3>
            <p data-aos="fade-right" data-aos-delay="400">This Project is for those who love travelling and want to share their travel experience with others.</p>
            {
                language.map((lang, index) => {
                    return (
                        <span data-aos="fade-up" data-aos-delay="600" key={index}>{lang.icon}</span>
                    )
                })
            }
        </div>
    )
}

export default HomeProjects
