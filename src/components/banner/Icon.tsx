import React from 'react'

interface Props {
    src: string;
}

const Icon: React.FC<Props> = ({src}) => {
    return (
        <div className='Icon'>
            <img src={src} />
        </div>
    );
}

export default Icon;