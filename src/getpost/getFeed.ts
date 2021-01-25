import axios from 'axios'
import env from  'react-dotenv'

export interface FeedItemType {
    title: string;
    content: string;
    date: string;
    hash: string;
}

const getFeed = async(): Promise<FeedItemType[]> => {
    const res = await axios({
        method: 'get',
        url: `${env.API_PATH}/getFeedItems.php`
    });

    return JSON.parse(res.data.slice(0,-2) + "]");
}

export default getFeed;