import axios from 'axios'
import env from  'react-dotenv'
import Cookies from 'js-cookie'

const deleteItem = async (title: string, content: string, hash: string, whom: string) => {
    const username = Cookies.get("username");
    const password = Cookies.get("password");
    const isadmin = Cookies.get("isadmin");

    if (isadmin !== "1" || username === undefined || password === undefined) return;

    const res = await axios({
        method: "post",
        url: `${env.API_PATH}/deleteItem.php`,
        data: {
            "title": title,
            "content": content,
            "hash": hash,
            "whom": whom,
            "username": username,
            "pwd": password
        }
    });

    console.log(res);

    return res.data;
}

export default deleteItem;