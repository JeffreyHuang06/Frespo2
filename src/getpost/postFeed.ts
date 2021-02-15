import axios from 'axios'
import env from 'react-dotenv'

const postFeed = async(title: string, content: string): Promise<boolean> => {
    const res = await axios({
        method: 'post',
        url: `${env.API_PATH}/postFeedItems.php`,
        data: {
            "title": title,
            "content": content
        }
    });
    console.log(res);
    return res.data;
}

export default postFeed;