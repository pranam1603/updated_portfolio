import React, {useEffect} from 'react'
import { social } from '../data/navLinks'
import AOS from 'aos';
import 'aos/dist/aos.css'


const Copyright = () => {

    useEffect(() => {
        AOS.init({duration: 1200})
    }, [])

    return (
        <>
            <section className="copyright-section">
                <div className='copyright-info' data-aos="fade-right" data-aos-delay="200">
                    <div className='note' data-aos="fade-right" data-aos-delay="200">
                        <h1>This Experience Will Change Your Life</h1>
                    </div>
                    <div className='content'>
                        <ul>
                            <li><a href='/'>HOME</a></li>
                            <li><a href='/about'>ABOUT US</a></li>
                            <li><a href='/projects'>PROJECT</a></li>
                            <li><a href='/contact'>CONTACT US</a></li>
                        </ul>
                        <div>
                            <p>&copy; {new Date().getFullYear()} <span>PRANAM.</span> ALL RIGHTS RESERVED</p>
                            <p className="heart-para">Developed with <span className="heart">&#10084;</span> by PRANAM.</p>
                        </div>
                    </div>
                </div>
                <div className='copyright-newsletter'>
                    <h1 data-aos="fade-right" data-aos-delay="200">GET IN TOUCH !</h1>
                    <form action="https://formspree.io/f/mzbyrbkn"
                        method="POST" data-aos="fade-right" data-aos-delay="200">
                        <input type="email" placeholder="Drop mail for work together!" name="reply_to" />
                        <button type="submit">Send</button>
                    </form>
                    <div>
                        {social.map((item => {
                            const { id, url, icon } = item
                            return (
                                <a  key={id} href={url} rel="noopener noreferrer" >{icon}</a>
                            )
                        }))}
                    </div>
                </div>
                {/* <div>
                    {social.map(item => {
                        const { id, url, icon } = item
                        return (
                            <a key={id} href={url} rel="noopener noreferrer">{icon}</a>
                        )
                    })}
                </div>
                <p>&copy; {new Date().getFullYear()} <span>PRANAM.</span> ALL RIGHTS RESERVED</p>
                <p className="heart-para">Developed with <span className="heart">&#10084;</span> by Pranam</p> */}
            </section>
        </>
    )
}

export default Copyright
