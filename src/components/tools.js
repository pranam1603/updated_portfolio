import React from 'react'
import { FaTools, FaLink } from "react-icons/fa";
import { SiVisualstudiocode, SiCodepen } from "react-icons/si";
import { VscExtensions } from "react-icons/vsc";


const tools = () => {
    return (
        <div className="development-tools">
            <div id="header">
                <h3 id='shadow'>Develovment tools<span><FaTools /></span></h3>
                <h3>Development tools<span style={{color: 'white'}}><FaTools /></span></h3>
                {/* <div id="underline"></div> */}
            </div>
            <div className="tools">
                <div className="vsCode tools-div">
                    <h3><SiVisualstudiocode /></h3>
                    <h4><a href='https://code.visualstudio.com/' rel="noopener noreferrer" target='_blank'>Visual Studio Code<span><FaLink/></span></a></h4>
                    <p>I use Visual Studio Code and I am completely in love with this! See the next resource for my setup.</p>
                </div>
                <div className="vsCodeExt tools-div">
                    <h3><VscExtensions /></h3>
                    <h4><a href='https://github.com/pranam1603/vsCode-Extensions' rel="noopener noreferrer" target='_blank'>My Visual Studio Code Setup<span><FaLink/></span></a> </h4>
                    <p>Check out exactly what theme, extensions and settings I use for VSCode in the projects and for coding.</p>
                </div>
                <div className="codePen tools-div">
                    <h3><SiCodepen /></h3>
                    <h4><a href='https://codepen.io/' rel="noopener noreferrer" target='_blank'>Codepen<span><FaLink/></span></a></h4>
                    <p>Codepen has become an essential tool for me to quickly test out some ideas or do some tests. I use it for testing APIs.</p>
                </div>
            </div>
        </div>
    )
}

export default tools
