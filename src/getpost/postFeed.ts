import axios from 'axios'
import env from 'react-dotenv'
import Cookies from 'js-cookie'

const postFeed = async(title: string, content: string): Promise<boolean> => {
    let whom = Cookies.get("username");
    if (whom === undefined) whom = "Guest";

    let wasadmin:string | number | undefined = Cookies.get("isadmin");
    if (wasadmin === undefined) wasadmin = "0";

    wasadmin = wasadmin === "1" ? 1 : 0;

    const res = await axios({
        method: 'post',
        url: `${env.API_PATH}/postFeedItems.php`,
        data: {
            "title": title,
            "content": content,
            "whom": whom,
            "wasadmin": wasadmin
        }
    });

    return res.data;
}

export default postFeed;