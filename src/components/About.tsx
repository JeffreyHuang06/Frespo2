import React from 'react'
import './about/About.scss'

export default function About() {
    return (
        <div className="About">
            <pre id="abouttext">
                Frespo: <br />
                
                {/* <br />

                Free Speech, <strong>expression</strong>, <br />
                <i>(no)</i> bias nor, political <br />
                affiliation. <br />

                <br /> */}

                Created by Jeffrey Huang

                <br />
                <a href="https://github.com/JeffreyHuang06/Frespo2"><button>My GitHub</button></a>
            </pre>
        </div>
    )
}
