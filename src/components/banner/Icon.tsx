import React from 'react'

interface Props {
    src: string;
    alt?: string;
    title?: string;
    width?: number;
    height?: number;
}

const Icon: React.FC<Props> = ({src, alt="image", title="", width, height}) => {
    return (
        <div className='Icon'>
            <img src={src} alt={alt} title={title} width={width} height={height} />
        </div>
    );
}

export default Icon; 