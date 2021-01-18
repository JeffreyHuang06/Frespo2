import React from 'react'

import FeedItem from './feed/FeedItem'

import './feed/Feed.scss'

const Feed = () => {
    return (
        <>
            <div className='Feed'>
                <div className='header'>
                    <h1>Feed</h1>
                </div>

                <FeedItem title='hi' content='hiii'/>
            </div>
        </>
    );
}

export default Feed;