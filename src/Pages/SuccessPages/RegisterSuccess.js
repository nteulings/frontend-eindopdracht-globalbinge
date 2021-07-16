import React from 'react';
import {useHistory} from "react-router-dom";
import "./SuccessPages.css";

// to let the user know that registration was successful,
// this page is displayed. after a short timeout,
// the user is redirected to the login page.

function RegisterSuccess() {
    const history = useHistory()
    setTimeout(() => history.push('/login'), 3000);

    return (
        <div className={"message-container"}>
            <h1>You are successfully signed up</h1>
            <h3>In a few seconds you will be redirected to the login page</h3>
        </div>
    );
}

export default RegisterSuccess;