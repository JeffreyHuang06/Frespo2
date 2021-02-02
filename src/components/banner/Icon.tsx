import React from 'react'

interface Props {
    src: string;
    alt?: string;
}

const Icon: React.FC<Props> = ({src, alt="image"}) => {
    return (
        <div className='Icon'>
            <img src={src} alt={alt}/>
        </div>
    );
}

export default Icon; 