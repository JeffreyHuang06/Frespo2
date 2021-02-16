import axios from 'axios'
import env from 'react-dotenv'
import Cookies from 'js-cookie'

const postFeed = async(title: string, content: string): Promise<boolean> => {
    let whom = Cookies.get("username");
    if (whom === undefined) whom = "Guest";

    const res = await axios({
        method: 'post',
        url: `${env.API_PATH}/postFeedItems.php`,
        data: {
            "title": title,
            "content": content,
            "whom": whom
        }
    });
    console.log(res);
    return res.data;
}

export default postFeed;