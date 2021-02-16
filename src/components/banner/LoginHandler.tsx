import React from 'react'
import Cookies from 'js-cookie'

import {useRecoilValue} from 'recoil'
import {userSelector} from '../../state/userSelector'

import './LoginHandler.scss'

const setHref = (path: string) => {
    window.location.href = '/' + path;
}

export default function LoginHandler() {
    const user = useRecoilValue(userSelector);

    const handleClick = () => {
        if (user === "Guest"){
            setHref("login");
        } else {
            Cookies.remove("username");
            Cookies.remove("password");
            Cookies.remove("isadmin");

            window.location.reload();
        }
    }

    return (
        <>
            <div className="userDisp">{user}</div>
            <div className="logout">
                <button onClick={handleClick}>
                    {
                        user === "Guest" ? "Sign in" : "Logout"
                    }
                </button>
            </div>
        </>
    )
}
