import React from 'react'

import './Header.scss'

interface Props {
    text: string;
}

const Header: React.FC<Props> = ({text}) => {
    return (
        <div className="Header">
            <h1>{text}</h1>
        </div>
    )
}

export default Header;