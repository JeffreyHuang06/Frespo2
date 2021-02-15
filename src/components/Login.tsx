import React, {useState, useEffect} from 'react'

import checkLogin from '../getpost/checkLogin'

import {useSetRecoilState} from 'recoil'
import BodyTextAtom, {BodyTextTypes} from '../state/bodyTextAtom'

import './login/Login.scss'

export default function Login() {
    const [username, setUsername] = useState<string>("");
    const [pwd, setPwd] = useState<string>("");
    const setBodyText = useSetRecoilState<BodyTextTypes>(BodyTextAtom);
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        setBodyText({
            bannerText: "Admin Login",
            headerText: "Login"
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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

        const {valid, isadmin} = await checkLogin(username, pwd);
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

                    <div className="before-pwd">
                        <input
                            type="password"
                            name="content"
                            value={pwd}
                            onChange={e => {handleChange(e, 'pwd')}}
                            autoComplete='off'
                            placeholder="Password"
                            id="pwdInput"
                        />
                    </div>

                    <div className="checkboxInput">
                        Remember me
                        <input
                            type="checkbox"
                            name="remember"
                            checked={isChecked}
                            onChange={e => {handleChange(e, 'remember')}}
                        />
                    </div>

                    <br />

                    <button>Login</button>

                </form>
            </div>
        </div>
    )
}
