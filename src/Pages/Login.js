import React from 'react';
import {useState} from "react";

function Login() {
    const [emailAdress, setEmailAdress] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form>
            <h1>Login</h1>
            <label><h1>Email adress</h1></label>
            <input
                value = {emailAdress}
                placeholder={'your email adress'}
                onChange={(event => setEmailAdress(event.target.value))}
            />
            <label><h1>Password</h1></label>
            <input
                value = {password}
                placeholder={'your password'}
                onChange={(event => setPassword(event.target.value))}
            />
            <button
            onClick={console.log(emailAdress,password)}
            >submit</button>
            <button
            >register</button>
        </form>
    );
}

export default Login;