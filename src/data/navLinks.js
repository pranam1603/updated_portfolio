import React from 'react'
import { FaInstagramSquare, FaGithubSquare, FaLinkedin, FaTwitterSquare, FaRedditSquare, } from 'react-icons/fa'
import { MdMail } from "react-icons/md";

export const links = [
    {
        id: 1,
        url: '/',
        text: 'home',
    },
    {
        id: 2,
        url: '/about',
        text: 'about',
    },
    {
        id: 3,
        url: '/projects',
        text: 'projects',
    },
    {
        id: 4,
        url: '/contact',
        text: 'contact us',
    },
    // {
    //     id: 5,
    //     url: '/blog',
    //     text: 'blog',
    // },
]

export const social = [
    {
        id: 1,
        url: 'https://twitter.com/Pranamjain02',
        icon: <FaTwitterSquare />,
    },
    {
        id: 2,
        url: 'http://www.linkedin.com/in/pranam-jain',
        icon: <FaLinkedin />,
    },
    {
        id: 3,
        url: 'https://github.com/pranam1603',
        icon: <FaGithubSquare />,
    },
    {
        id: 4,
        url: 'https://www.reddit.com/user/Pranamj',
        icon: <FaRedditSquare />,
    },
    {
        id: 5,
        url: 'https://www.instagram.com/pranam.jainn/',
        icon: <FaInstagramSquare />,
    },
    {
        id: 7,
        url: "mailTo:jainpranam02@gmail.com",
        icon: <MdMail />,
    },
]
