import React, {useState, useEffect} from 'react'

import checkLogin from '../getpost/checkLogin'
import loginUser from '../getpost/loginUser'

import {useSetRecoilState} from 'recoil'
import BodyTextAtom, {BodyTextTypes} from '../state/bodyTextAtom'

import './login/Login.scss'

interface msgType {
    msg: string;
    style: string;
}

export default function Login() {
    const [username, setUsername] = useState<string>("");
    const [pwd, setPwd] = useState<string>("");
    const setBodyText = useSetRecoilState<BodyTextTypes>(BodyTextAtom);
    const [isChecked, setIsChecked] = useState(false);
    const [msg, setMsg] = useState<msgType>({msg: "", style: ""});
    const [lWarning, setLWarning] = useState<string>("");

    useEffect(() => {
        setBodyText({
            bannerText: "Admin Login",
            headerText: "Login"
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const validateUsername = (): boolean => {
        if (username.includes(" ")){
            setLWarning("Username can't include spaces");
            return false;
        } else {
            setLWarning("");
            return true;
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        switch (field) {
            case 'username':
                setUsername(e.target.value);
                break;
            
            case 'pwd':
                setPwd(e.target.value);
                break;

            case 'remember':
                setIsChecked(e.target.checked);
                break;
        }
    }

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateUsername()) return;

        const res = await checkLogin(username, pwd);

        if (typeof res === "boolean"){
            setMsg({
                msg: "Login Failed",
                style: "failed"
            });
            return;
        }

        const {valid, isadmin} = res;

        if (valid){
            loginUser(username, pwd, isChecked, isadmin);
            setMsg({
                msg: "Login Successful. You will be redirected soon.",
                style: "success"
            });
            
            setTimeout(() => {
                window.location.href = "/home";
            }, 2000);
        } else {
            setMsg({
                msg: "Login Failed",
                style: "failed"
            });
        }
    }

    return (
        <div className="body">
            <div className="Login">
                <form className="before-username" onSubmit={handleSubmit}>

                    <input
                        type='text'
                        name='title'
                        value={username}
                        onChange={e => {handleChange(e, 'username')}}
                        autoComplete='off'
                        placeholder="Username"
                        required
                        id="usernameInput"
                    />
                    <span>{lWarning}</span>

                    <div className="before-pwd">
                        <input
                            type="password"
                            name="content"
                            value={pwd}
                            onChange={e => {handleChange(e, 'pwd')}}
                            autoComplete='off'
                            placeholder="Password"
                            required
                            id="pwdInput"
                        />
                    </div>

                    <br />

                    <div className="checkboxInput">
                        Remember me
                        <input
                            type="checkbox"
                            name="remember"
                            checked={isChecked}
                            onChange={e => {handleChange(e, 'remember')}}
                        />
                    </div>

                    <div className={msg.style}>{msg.msg}</div>

                    <button>Login</button>

                    <br />

                    <p>DISCLAIMER: THIS SITE USES COOKIES IF YOU LOGIN</p>

                </form>
            </div>
        </div>
    )
}
