import React, {useState, useEffect} from 'react'
import FeedItem from './feed/FeedItem'

import {useSetRecoilState} from 'recoil'
import BodyTextAtom, {BodyTextTypes} from '../state/bodyTextAtom'

import getFeed, {FeedItemType} from '../getpost/getFeed'

import './feed/Feed.scss'

const Feed = () => {
    const [feedItems, setFeedItems] = useState<FeedItemType[]>([]);
    const setBodyText = useSetRecoilState<BodyTextTypes>(BodyTextAtom);

    useEffect(() => {
        setBodyText({
            bannerText: "Frespo",
            headerText: "Feed"
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        (
            async() => {
                const res: FeedItemType[] | null = await getFeed();

                if (res !== null) setFeedItems(res);
                else setFeedItems([{
                    title: "No posts made",
                    content: "",
                    date: "Null",
                    hash: "Null",
                    whom: "Null"
                }]);
            }
        )();
    }, []);

    return (
        <>
            <div className='body Feed'>
                {feedItems.map(({title, content, date, hash, whom}) => 
                    <FeedItem
                        title={title}
                        content={content}
                        date={date}
                        hash={hash}
                        whom={whom}
                    />
                )}
            </div>
        </>
    );
}

export default Feed;