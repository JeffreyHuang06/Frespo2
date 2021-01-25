import React, {useState, useEffect} from 'react'

import getFeed, {FeedItemType} from '../getpost/getFeed'

import FeedItem from './feed/FeedItem'
import Header from './feed/Header'

import './feed/Feed.scss'

const Feed = () => {
    const [feedItems, setFeedItems] = useState<FeedItemType[]>([]);

    useEffect(() => {
        (
            async() => {
                const res = await getFeed();
                setFeedItems(res);
            }
        )();
    }, []);

    return (
        <>
            <Header text="Feed" />

            <div className='Feed'>
                {feedItems.map(({title, content, date, hash}) => 
                    <FeedItem
                        title={title}
                        content={content}
                        date={date}
                        hash={hash}
                    />
                )}
            </div>
        </>
    );
}

export default Feed;