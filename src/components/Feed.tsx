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
                const res: FeedItemType[] | null = await getFeed();
                console.log(res);
                if (res !== null) setFeedItems(res);
                else setFeedItems([{
                    title: "No posts made",
                    content: "",
                    date: "Null",
                    hash: "Null"
                }]);
            }
        )();
    }, []);

    return (
        <>
            <Header text="Feed" />

            <div className='body Feed'>
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