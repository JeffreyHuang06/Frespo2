import Cookies from 'js-cookie'

const expireTime: number = 1;

const loginUser = (username: string, pwd: string, isadmin: boolean) => {
    if (isadmin){
        Cookies.set("username", username);
        Cookies.set("password", pwd);
    } else {
        Cookies.set("username", username, {expires: expireTime});
        Cookies.set("password", pwd, {expires: expireTime});
    }
}

export default loginUser;