import React, {useState} from 'react'
import loadinglogo from '../Images/loadinglogo.JPG'
import {
    Tabs,
    About,
    FeaturedProducts,
    Mailbox,
    Tools,
    Bloghome,
    Hero,
    Skills,
} from '../components'

const Home = () => {

    const [isLoading, setisLoading] = useState(false)

    setTimeout(() => setisLoading(false), 1000)

    return <div style={{overflowX: 'hidden'}}>
        {isLoading === true ? <div className='loading'><img alt='loadingimg' src={loadinglogo} /></div> :<div>
            <Hero />
            <Skills />
            <About />
            <Tabs />
            <FeaturedProducts />
            <Tools />
            {/* <Bloghome /> */}
            {/* <Mailbox /> */}
        </div>}
        </div>

}

export default Home
