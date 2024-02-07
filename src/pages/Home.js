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

    const [isLoading, setisLoading] = useState(true)

    setTimeout(() => setisLoading(false), 3000)

    return <React.Fragment>
        {isLoading === true ? <div className='loading'><img alt='loadingimg' src={loadinglogo} /></div> :<div>
            <Hero />
            <Skills />
            <About />
            <Tabs />
            <FeaturedProducts />
            <Tools />
            <Bloghome />
            <Mailbox />
        </div>}
        </React.Fragment>

}

export default Home
