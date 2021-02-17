import React, {useState} from 'react'
import If from '../If'
import {checkAdmin} from '../../getpost/checkLogin'
import deleteItem from '../../getpost/deleteItem'

import {format} from 'date-fns'

import './FeedItem.scss'

interface Props {
    title: string;
    content: string;
    date: string;
    hash: string;
    whom: string;
    wasadmin: string;
}

const FeedItem: React.FC<Props> = ({title, content, date, hash, whom, wasadmin}) => {
    const [d, setD] = useState<boolean>(false);

    let fixedWhom = whom;
    if (wasadmin === "1") fixedWhom += " (admin)";

    const isadmin: boolean = checkAdmin();

    const correctedDate = date.replaceAll('-','/'); // because safari wants to be DIFFERENT
    const dateObj = new Date(correctedDate);
    const time = format(dateObj, "MMM d, y 'at' h:maaa");

    const handleClick = async () => {
        const res = await deleteItem(title, content, hash, whom);
        if (res){
            setD(false);
        }
    }

    return (
        <If cond={true}>
            <div className='FeedItem' data-date={date} data-hash={hash}>
                <p className="whom">{fixedWhom} posted on {time}</p>
                <p className='title'>{title}</p>
                <p className='content'>{content}</p>
                
                <If cond={isadmin}>
                    <div className="trash" onClick={handleClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                    </div>
                </If>
            </div>
        </If>
    )
}

export default FeedItem;