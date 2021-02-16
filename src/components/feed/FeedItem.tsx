import React from 'react'

import './FeedItem.scss'

interface Props {
    title: string;
    content: string;
    date: string;
    hash: string;
    whom: string;
}

const FeedItem: React.FC<Props> = ({title, content, date, hash, whom}) => {
    if (whom === "admin") whom = "admin (jeffrey)";

    return (
        <div className='FeedItem' data-date={date} data-hash={hash}>
            <p className="whom">{whom}</p>
            <p className='title'>{title}</p>
            <p className='content'>{content}</p>
        </div>
    )
}

export default FeedItem;