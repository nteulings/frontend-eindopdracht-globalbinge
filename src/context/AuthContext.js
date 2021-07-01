import React, {createContext, useEffect, useState} from "react";

//#Setup context:
// - [x] Which data in context?
// - [x] functions login logout
// - [x] state for user and status(user => null en status => 'pending')
// - [x] use effect for refresh (mountig cycle)
// - [x] status done? children visable
// - [x] set state en functions in data object

export const authContext = createContext({});

function AuthContextProvider({ children }) {

    const [authState, setAuthState] = useState({user: null, status: 'pending'});

    useEffect(() => {
        setTimeout(() =>
            setAuthState({user: null, status: 'done'}), 2000);
    }, []);

    function login(token) {
        console.log("do we have a token", token);
    }

    function logout() {

    }

    // data in context
    const data = {authState: authState, login: login, logout: logout};

    return (
        <authContext.Provider value={data}>
            {authState.status === 'pending' && <h1>fetching</h1>}
            {authState.status === "done" && children}
        </authContext.Provider>
    )
}

export default AuthContextProvider;

// #Context:
// [x] create AuthContext.js
// [x] make AuthContext with createContext
// 2. [x] build AuthContextProvider:
//    - [x] children
//    - [x] AuthContext.Provider component
//    - [x] empty data object
// 3. [x] pass data object value={} property to .Provider
// 4. [x] export context and provider component
// 5. [x] import provider component in index.js