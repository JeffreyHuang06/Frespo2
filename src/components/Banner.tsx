import React from 'react'

import Icon from './banner/Icon'

import './banner/Banner.scss'

import logo from '../img/favicon.png'

interface Props {
    name: string
}

const Banner: React.FC<Props> = ({name}) => {
    return (
        <div className='Banner'>
            <Icon src={logo} />
            <h1>{name}</h1>
        </div>
    );
}

export default Banner;