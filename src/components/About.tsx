import React, {useEffect} from 'react'
import './about/About.scss'

import {useSetRecoilState} from 'recoil'
import BodyTextAtom, {BodyTextTypes} from '../state/bodyTextAtom'

export default function About() {
    const setBodyText = useSetRecoilState<BodyTextTypes>(BodyTextAtom);

    useEffect(() => {
        setBodyText({
            bannerText: "About",
            headerText: ""
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
