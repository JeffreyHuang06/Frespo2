import axios from 'axios'
import env from  'react-dotenv'

export interface FeedType {
    title: string;
    content: string
}

const getFeed = async() => {
    const res = await axios({
        method: 'get',
        url: `${env.API_PATH}/getFeedItems.php`
    });

    console.log(res);
}

export default getFeed;