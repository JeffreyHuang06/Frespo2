import React from 'react'

import './header/Header.scss'

interface Props {
    text: string;
}

const Header: React.FC<Props> = ({text}) => {
    if (text === "") return null;

    return (
        <div className="Header">
            <h1>{text}</h1>
        </div>
    )
}

export default Header;