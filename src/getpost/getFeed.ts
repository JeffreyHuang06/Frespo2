import axios from 'axios'
import env from  'react-dotenv'

export interface FeedItemType {
    title: string;
    content: string;
    date: string;
    hash: string;
    whom: string;
    wasadmin: string;
}

const getFeed = async(): Promise<FeedItemType[] | null> => {
    let res: any = null
    res = await axios({
        method: 'get',
        url: `${env.API_PATH}/getFeedItems.php`,
    });

    return res.data;
}

export default getFeed;