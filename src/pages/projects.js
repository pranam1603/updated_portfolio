import React, { useState, useEffect } from 'react'
import { useProjectContext } from '../context/context'
import reaProjects from '../data/reactProjects';
import {
    Project,
    Categories,
} from '../components'
import AOS from 'aos';
import 'aos/dist/aos.css'


const allCategories = ['All', ...new Set(reaProjects.map((item) => item.category))];

const Projects = () => {

    useEffect(() => {
        AOS.init({duration: 1200})
    }, [])

    const { reactProject, setReactProject } = useProjectContext()
    const [category, setCategory] = useState(allCategories)

    const filterProject = (category) => {
        if (category === 'All') {
            setReactProject(reaProjects)
            return;
        }
        const newProjects = reaProjects.filter(proj => proj.category === category)
        return setReactProject(newProjects)
    }

    return (
        <div className='color' id="top">
            <div className="project-section" id="project-container">
                <h2 data-aos="flip-left" data-aos-delay="200">Projects<span class="bg-text">MY WORK</span></h2>
                {/* <h2 id='shadow' data-aos="fade-left" data-aos-delay="100">Projects</h2>
                <h2 data-aos="fade-right" data-aos-delay="100">Projects</h2> */}
                <Categories filterProject={filterProject} category={category} setCategory={setCategory} />
                <Project reactProject={reactProject} />
            </div>
        </div>
    )
}

export default Projects
