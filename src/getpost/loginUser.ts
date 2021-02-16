import Cookies from 'js-cookie'

const expireTime: number = 1;

const loginUser = (username: string, pwd: string, remember: boolean, isadmin: string) => {
    if (remember){
        Cookies.set("username", username);
        Cookies.set("password", pwd);
        Cookies.set("isadmin", isadmin);
    } else {
        Cookies.set("username", username, {expires: expireTime});
        Cookies.set("password", pwd, {expires: expireTime});
        Cookies.set("isadmin", isadmin, {expires: expireTime});
    }
}

export default loginUser;