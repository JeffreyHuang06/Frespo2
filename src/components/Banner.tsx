import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from './banner/Icon'
import LoginHandler from './banner/LoginHandler'

import './banner/Banner.scss'
import logo from '../img/favicon.svg'

interface Props {
    name: string
}

const setHref = (path: string) => {
    return () => {
        window.location.href = '/' + path;
    }
}

const svgDim: string = "2.5em";
const svgDimHover: string = "3em";

const Banner: React.FC<Props> = ({name}) => {
    const [hovered, setHovered] = useState<string>("");
    const [styleString, setStyleString] = useState<string>("");
    const match: string = useLocation().pathname;

    const hoverOff = () => {
        setHovered("");
    }

    const homeRefresh = () => {
        if (match === "/home"){
            window.location.reload();
        }
    }

    // this code is written so terribly
    useEffect(() => {
        let newStyleString: string = "";
        const btns: string[] = ["POST", "ABOUT", "LOGIN"];

        if (match === "/home" || hovered !== ""){
            btns.forEach((name: string) => {
                newStyleString += `#${name}BTN {fill: ${hovered !== name && hovered !== "" ? "gray" : "auto"};}`;
            })
        } else {
            const matchSlash: string = match.slice(1).toUpperCase();

            btns.forEach((name: string) => {
                if (matchSlash === name)
                    newStyleString += `#${name}BTN {fill: #cc00cc; width: ${svgDimHover}; height: ${svgDimHover};}`;
                else 
                    newStyleString += `#${name}BTN {fill: gray; }`;
            })
        }

        setStyleString(newStyleString);
    }, [hovered, match]);

    return (
        <>
            <style jsx>{`
                ${styleString}
            `}</style>

            <div className='Banner'>
                <Link to='/home' className="divLink">
                    <div onClick={homeRefresh}>
                        <Icon src={logo} title="Home" width={64} height={64}/>
                    </div>
                </Link>

                <h1>{name}</h1>

                <div style={{flexGrow: 1}}></div>

                <svg id="POSTBTN" onClick={setHref("post")} onMouseOver={() => {setHovered("POST")}} onMouseLeave={hoverOff} className="bi bi-plus-square" width={svgDim} height={svgDim} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
                    <path fillRule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
                    <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                </svg>

                <svg id="ABOUTBTN" onClick={setHref("about")} onMouseOver={() => {setHovered("ABOUT")}} onMouseLeave={hoverOff} className="bi bi-question-square" width={svgDim} height={svgDim} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path d="M5.25 6.033h1.32c0-.781.458-1.384 1.36-1.384.685 0 1.313.343 1.313 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.007.463h1.307v-.355c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.326 0-2.786.647-2.754 2.533zm1.562 5.516c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                </svg> 

                <svg id="LOGINBTN" onClick={setHref("login")} onMouseOver={() => {setHovered("LOGIN")}} onMouseLeave={hoverOff} width={svgDim} height={svgDim} fill="currentColor" className="bi bi-person" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    </svg>
            
                <LoginHandler />
            </div>
        </>
    );
}

export default Banner;