import React, {useContext} from 'react';
import { authContext } from '../../context/AuthContext';
import {useHistory} from "react-router-dom";
import "./SuccessPages.css";

// to let the user know that the login was successful,
// this page is displayed. after a short timeout,
// the user is redirected to the homepage.

function LoginSuccess() {
    const history = useHistory()
    const {authState: { user }} = useContext(authContext);
    setTimeout(() => history.push('/'), 3000);

    return (
        <div className={"message-container"}>
            <h1>Hi {user?.username} you are successfully logged in</h1>
            <h3>In a few seconds you will be redirected to the application</h3>
        </div>
    );
}

export default LoginSuccess;