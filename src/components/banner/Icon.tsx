import React from 'react'

interface Props {
    src: string;
    alt?: string;
    title?: string;
}

const Icon: React.FC<Props> = ({src, alt="image", title=""}) => {
    return (
        <div className='Icon'>
            <img src={src} alt={alt} title={title} />
        </div>
    );
}

export default Icon; 