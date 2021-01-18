import axios from 'axios'
import env from 'react-dotenv'

const postFeed = (title: string, content: string) => {
    axios({
        method: 'post',
        url: `${env.API_PATH}/postFeedItems.php`,
        data: {
            "title": title,
            "content": content
        }
    }).then(res => {
        console.log(res);
    });
}

export default postFeed;