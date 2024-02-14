import React from 'react'
import { FaReact, FaHtml5, FaCss3Alt, FaNode, FaBootstrap } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";
import { Yelp, Comfy, Color } from '../Images/projects/index'
import comfyvideo from '../Videos/0212.mp4'
import colorvideo from '../Videos/0214.mp4'
import imagevideo from '../Videos/0214(1).mp4'
import yelpvideo from '../Videos/0214(2).mp4'
// eslint-disable-next-line
export default [
    {
        id: 100,
        text: 'YelpCamp',
        url: 'https://yelpcampcode-production.up.railway.app/',
        code: 'https://github.com/pranam1603/yelpCamp_code',
        tagline: 'This Project is for those who love travelling and want to share their travel experience with others.',
        video: yelpvideo,
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
        id: 13,
        text: 'Photo Stock',
        url: 'https://unsplash-noether-58a8b7.netlify.app/',
        code: 'https://github.com/pranam1603/photo-stock',
        tagline: 'Photo Stock where you can find all kind of images which was developed in React.js.',
        category: 'React',
        video: imagevideo,
        type: 'exclusive project',
        // image: Photostock,
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
        id: 24,
        text: 'Ecommerce',
        url: 'https://comfy-ecommerce-site.netlify.app/',
        code: 'https://github.com/pranam1603/react-comfy-ecommerce',
        tagline: 'Demo Ecommerce Site! Explore our features and functionalities. Experience seamless interaction and discover endless possibilities with us.',
        video: comfyvideo,
        category: 'react',
        type: 'Exclusive project',
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
        tagline: 'Choose the correct color from the options provided. Enjoy the challenge and enhance your color recognition skills!',
        video: colorvideo,
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
