import React, {useEffect} from 'react'
import { social } from '../data/navLinks'
import { FaPhoneSquare } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Contact = () => {

    useEffect(() => {
        AOS.init({duration: 1200})
    }, [])


    return (
        <>
            <div id="contact">
                <h2 data-aos="flip-left" data-aos-delay="100">Contact <span>Me</span><span class="bg-text">Contact</span></h2>
                {/* <h1 id="shadow" data-aos="fade-left" data-aos-delay="200" >Contact Us</h1>
                <h1 data-aos="fade-right" data-aos-delay="200" >Contact Us</h1> */}
                {/* <div id="underline"></div> */}
                <div className="contact-section">
                    <article className="contact" data-aos="fade-right" data-aos-delay="100" >
                        <div className="contact-info" data-aos="fade-right" data-aos-delay="200" >
                            <iframe
                                src="https://www.google.com/maps/embed/v1/place?q=Architect+K+Atelier,+Vaishali+Nagar,+Bhopal,+Madhya+Pradesh,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                                style={{width:"600",
                                height:"450",
                                frameBorder:"0",
                                tabIndex:"0"}}/>
                        </div>
                        <a href="tel:+918269866601" ><FaPhoneSquare/></a>
                        {social.map(item => {
                            const { id, url, icon } = item
                            return (
                                <a key={id} href={url} rel="noopener noreferrer" >{icon}</a>
                            )
                        })}
                        {/* <div className="contact-info">
                            <h2><span><FaLocationArrow /></span>Address</h2>
                            <p id="h4">10, Unity Society Kamla Nagar Police Station (462003) Bhopal, Madhya Pradesh </p>
                        </div>
                        <div className="contact-info">
                            <h2><span><IoMdMail /></span>Email</h2>
                            <p id="h4">Pranamjain02@gmail.com</p>
                        </div>
                        <div className="contact-info">
                            <h2><span><FaPhone /></span>Phone</h2>
                            <p id="h4">+91 8269866601</p>
                        </div> */}
                    </article>
                    <article className='form-section '>
                        <form action="https://formspree.io/f/mleabeqz" data-aos="fade-left" data-aos-delay="100" 
                            method="POST">
                            <input type="text" placeholder="NAME" name="name" />
                            <input type="text" placeholder="EMAIL" name="email" />
                            <textarea rows='8' type="text" placeholder="MESSAGE" name="message" />
                            <button type="submit" >Send</button>
                        </form>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Contact
