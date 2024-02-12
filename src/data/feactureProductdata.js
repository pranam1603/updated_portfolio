import React from 'react'
import { FaReact, FaHtml5, FaCss3Alt, FaNode, FaBootstrap } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";
import { Yelp, Comfy, Color} from '../Images/projects/index'
// eslint-disable-next-line
export default [
    {
        id: 100,
        text: 'YelpCamp',
        url: 'https://yelpcampcode-production.up.railway.app/',
        code: 'https://github.com/pranam1603/yelpCamp_code',
        image: Yelp,
        category: 'node Mongo',
        type: 'largeScale Project',
        language: [
            {
                icon: <FaNode />,
                iconText: 'Node',
            },
            {
                icon: <SiMongodb />,
                iconText: 'Mongo'
            },
            {
                icon: <FaBootstrap />,
                iconText: 'Boots.'
            },
        ]
    },
    {
        id: 100,
        text: 'YelpCamp',
        url: 'https://yelpcampcode-production.up.railway.app/',
        code: 'https://github.com/pranam1603/yelpCamp_code',
        image: Yelp,
        category: 'node Mongo',
        type: 'largeScale Project',
        language: [
            {
                icon: <FaNode />,
                iconText: 'Node',
            },
            {
                icon: <SiMongodb />,
                iconText: 'Mongo'
            },
            {
                icon: <FaBootstrap />,
                iconText: 'Boots.'
            },
        ]
    },

    {
        id: 24,
        text: 'Ecommerce',
        url: 'https://comfy-ecommerce-site.netlify.app/',
        code: 'https://github.com/pranam1603/react-comfy-ecommerce',
        category: 'react',
        type: 'largeScale project',
        image: Comfy,
        language: [
            {
                icon: <FaHtml5 />,
                iconText: 'HTML',
            },
            {
                icon: <FaCss3Alt />,
                iconText: 'CSS'
            },
            {
                icon: <FaReact />,
                iconText: 'REACT'
            },
        ]
    },
    {
        id: 37,
        text: 'Color Game',
        url: 'https://pranam1603.github.io/colorgame/colorGame.html',
        code: 'https://github.com/pranam1603/colorgame',
        image: Color,
        category: 'game',
        type: 'game Project',
        language: [
            {
                icon: <FaHtml5 />,
                iconText: 'HTML',
            },
            {
                icon: <FaCss3Alt />,
                iconText: 'CSS'
            },
            {
                icon: <SiJavascript />,
                iconText: 'JS'
            },
        ]
    },
]
