import React from 'react'
import { social } from '../data/navLinks'
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneSquare } from 'react-icons/fa'


const contact = () => {
    return (
        <>
            <div id="contact">
                <h1 id="shadow">Contact Us</h1>
                <h1 >Contact Us</h1>
                {/* <div id="underline"></div> */}
                <div className="contact-section">
                    <article className="contact">
                        <div className="contact-info">
                            <iframe
                                src="https://www.google.com/maps/embed/v1/place?q=Architect+K+Atelier,+Vaishali+Nagar,+Bhopal,+Madhya+Pradesh,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                                style={{width:"600",
                                height:"450",
                                frameBorder:"0",
                                tabIndex:"0"}}/>
                        </div>
                        <a href="tel:+918269866601"><FaPhoneSquare/></a>
                        {social.map(item => {
                            const { id, url, icon } = item
                            return (
                                <a  key={id} href={url} rel="noopener noreferrer" >{icon}</a>
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
                        <form action="https://formspree.io/f/mleabeqz"
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

export default contact
