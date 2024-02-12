import React, { useState, useEffect } from 'react'
import job from '../data/skillTabs'
import { FaAngleDoubleRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'


const Tabs = () => {

    useEffect(() => {
        AOS.init({duration: 1200})
    }, [])


    /* eslint-disable no-unused-vars */
    const [jobs, setJobs] = useState(job)
    const [value, setValue] = useState(0)

    const { company, dates, duties, title } = jobs[value]
    return (
        <div style={{ paddingTop: '120px', paddingBottom: '90px' }}>
            <section className="section">
                <div className="jobs-center">

                    <div className="btn-container">
                        {jobs.map((item, index) => {
                            return (
                                <button
                                    key={index}
                                    onClick={() => setValue(index)}
                                    className={`job-btn ${index === value && 'active-btn'}`}
                                    data-aos="fade-right"
                                >
                                    {item.company}
                                </button>
                            )
                        })}
                    </div>

                    <article className="job-info">
                        <h3 data-aos="fade-left" >{title}</h3>
                        <h4 data-aos="fade-left" data-aos-delay="300">{company}</h4>
                        <p className="job-date" data-aos="fade-left" data-aos-delay="300">{dates}</p>
                        {duties.map((duty, index) => {
                            return (
                                <div key={index} className="job-desc" data-aos="fade-left" data-aos-delay="600">
                                    <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                                    <p>{duty}</p>
                                </div>
                            )
                        })}
                    </article>
                </div>
                <a href="/about">
                    <button type="button" className="btn" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                        More Information
                    </button>
                </a>
            </section>
        </div>
    )
}

export default Tabs
