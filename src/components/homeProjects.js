import React, { useEffect } from 'react'
// import video from '../Videos/0214.mp4'
import AOS from 'aos';
import 'aos/dist/aos.css'

const HomeProjects = ({ item }) => {

    useEffect(() => {
        AOS.init({duration: 1200})
    }, [])

    const { id, video, language, text, url, tagline } = item
    const leftright = (id == 13 || id === 37) ? "fade-left" : "fade-right"
    return (
        <div className="product">
            <div className="productHeader"  data-aos={leftright} data-aos-delay="500" >
                <a href={url} target="_blank" rel="noopener noreferrer" ><video className="productvideo" src={video} alt="productMAge" autoPlay={true} muted={true} loop={true} /></a>
            </div>
            <h3 data-aos={leftright} data-aos-delay="500" ><a href={url} rel="noopener noreferrer" target="_blank">{text}</a></h3>
            <p  data-aos={leftright} data-aos-delay="500" >{tagline}</p>
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
