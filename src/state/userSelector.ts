import {selector} from 'recoil'
import Cookies from 'js-cookie'

export const userSelector = selector({
    key: "user",
    get: () => {
        const userCookie = Cookies.get("username");

        if (userCookie === undefined){
            return "Guest";
        } else {
            return userCookie;
        }
    }
});