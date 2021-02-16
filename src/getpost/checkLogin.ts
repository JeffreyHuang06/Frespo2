import axios from 'axios'
import env from 'react-dotenv'
import Cookies from 'js-cookie'

interface loginType {
    valid: boolean;
    isadmin: string;
}

const checkLogin = async(username: string, pwd: string): Promise<loginType | boolean> => {
    const res = await axios({
        method: 'post',
        url: `${env.API_PATH}/login.php`,
        data: {
            "username": username,
            "pwd": pwd,
        }
    });
    
    if (res.status === 200) return res.data;
    else return false;
}

export const checkAdmin = (): boolean => {
    const isadmin = Cookies.get("isadmin");
    return isadmin === "1";
}

export default checkLogin;