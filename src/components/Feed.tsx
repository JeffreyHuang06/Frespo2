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
                // const res = [{
                //     title: "test",
                //     content: "b",
                //     date: "2021-02-15 21:54:46",
                //     hash: "1561cd1369aa06b0e39d779b4a27e1a4875dfc382b11c28062f92e390be446f4",
                //     whom: "admin (jeffrey)"
                // }];

                if (res !== null) setFeedItems(res);
                else setFeedItems([{
                    title: "No posts made",
                    content: "",
                    date: "Null",
                    hash: "Null",
                    whom: "Null",
                    wasadmin: "Null"
                }]);
            }
        )();
    }, []);

    return (
        <>
            <div className='body Feed'>
                {feedItems.map(({title, content, date, hash, whom, wasadmin}) => 
                    <FeedItem
                        title={title}
                        content={content}
                        date={date}
                        hash={hash}
                        whom={whom}
                        wasadmin={wasadmin}
                    />
                )}
            </div>
        </>
    );
}

export default Feed;