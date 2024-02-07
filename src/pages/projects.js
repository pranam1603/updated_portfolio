import React, { useState } from 'react'
import { useProjectContext } from '../context/context'
import reaProjects from '../data/reactProjects';
import {
    Project,
    Categories,
} from '../components'

const allCategories = ['All', ...new Set(reaProjects.map((item) => item.category))];

const Projects = () => {
    const { reactProject, setReactProject } = useProjectContext()
    const [category, setCategory] = useState(allCategories)

    const filterProject = (category) => {
        console.log(category)
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
                <h2 id='shadow'>Projects</h2>
                <h2>Projects</h2>
                <Categories filterProject={filterProject} category={category} setCategory={setCategory} />
                <Project reactProject={reactProject} />
            </div>
        </div>
    )
}

export default Projects
