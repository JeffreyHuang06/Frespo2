import React, { useEffect, useState } from 'react'
import Icon from './banner/Icon'

import './banner/Banner.scss'

import logo from '../img/favicon.png'

interface Props {
    name: string
}

const Banner: React.FC<Props> = ({name}) => {
    const [hovered, setHovered] = useState<string>("");
    const [styleString, setStyleString] = useState<string>("");

    const hoverOff = () => {
        setHovered("");
    }

    useEffect(() => {
        let sS: string = "";
        ["POST", "ABOUT"].forEach((name: string) => {
            sS += `#${name}BTN {fill: ${hovered !== name && hovered !== "" ? "gray" : "auto"};}\n`;
        })
        setStyleString(sS);
    }, [hovered]);

    return (
        <>
            <style jsx>{`
                ${styleString}
            `}</style>
            <div className='Banner'>
                <Icon src={logo}/>

                <h1>{name}</h1>

                <div style={{flexGrow: 1}}></div>

                <svg id="POSTBTN" onMouseOver={() => {setHovered("POST")}} onMouseLeave={hoverOff} className="bi bi-plus-square" width="2.5em" height="2.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
                    <path fillRule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
                    <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                </svg>

                <svg id="ABOUTBTN" onMouseOver={() => {setHovered("ABOUT")}} onMouseLeave={hoverOff} className="bi bi-question-square" width="2.5em" height="2.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path d="M5.25 6.033h1.32c0-.781.458-1.384 1.36-1.384.685 0 1.313.343 1.313 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.007.463h1.307v-.355c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.326 0-2.786.647-2.754 2.533zm1.562 5.516c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                </svg> 
            </div>
        </>
    );
}

export default Banner;