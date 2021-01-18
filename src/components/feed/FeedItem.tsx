import React from 'react'

import './FeedItem.scss'

interface Props {
    title: string;
    content: string;
}

const FeedItem: React.FC<Props> = ({title, content}) => {
    return (
        <div className='FeedItem'>
            <p className='title'>{title}</p>
            <p className='content'>{content}</p>
        </div>
    )
}

export default FeedItem;