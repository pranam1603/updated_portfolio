import React from 'react'
import { FaInstagram, FaTwitterSquare, FaRedditAlien, } from "react-icons/fa";

const BlogFoteer = () => {
    return (
        <div className="footer">
            <h3>Pranam Jain </h3>
            <ul>
                <li><a href="https://www.instagram.com/pranam.jainn" target="_blank" rel="noopener noreferrer" ><FaInstagram /></a></li>
                <li><a href="https://twitter.com/Pranamjain02" target="_blank" rel="noopener noreferrer" ><FaTwitterSquare /></a></li>
                <li><a href="https://www.reddit.com/user/Pranamj" target="_blank" rel="noopener noreferrer" ><FaRedditAlien /></a></li>
            </ul>
            <p>COPYRIGHT © {new Date().getFullYear()} . ALL RIGHTS RESERVED</p>
            <p>10, Unity Society Nehru Nagar ( 462003 ) Bhopal </p>
        </div>
    )
}

export default BlogFoteer
