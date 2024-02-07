import React from 'react';
import HomeProjects from './homeProjects';
import feactureProductdata from '../data/feactureProductdata';


const featuredProducts = () => {
    return (
        <div id="feacture">
            <div className="featured-products">
                <div className='product-text'>
                    <div>
                        <h3 id='shadow'>about our</h3>
                        <h3>about our</h3>
                        <h2>Projects</h2>
                    </div>
                    {/* <p>Here is the highlight of few of my projects.</p> */}
                    <a href="/projects">All Projects</a>
                </div>
                {feactureProductdata.map((item, index) => {
                    return <HomeProjects key={index} item={item} />
                })}
            </div>
        </div>
    )
}

export default featuredProducts
