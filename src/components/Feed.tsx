import React from 'react'

import getFeed from '../getpost/getFeed'

import FeedItem from './feed/FeedItem'
import Header from './feed/Header'

import './feed/Feed.scss'

const Feed = () => {

    return (
        <>
            <Header text="Feed" />

            <div className='Feed'>
                <FeedItem title='hi' content='hiii'/>
            </div>
        </>
    );
}

export default Feed;