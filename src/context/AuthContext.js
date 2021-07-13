import React, {createContext, useEffect, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

// - [x] get token from local storage
// - [x] check data on refresh
// - [x] remove token with logout function
// - [x] set authstate user to null
// - [x] disabled deps error eslint

export const authContext = createContext({});

function AuthContextProvider({ children }) {

    const [authState, setAuthState] = useState({user: null, status: 'pending'});
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token");
        // // no token? back to login
        if (token) {
            login(token);
        } else {
            setAuthState({
                user: null,
                status: "done"
            })
            history.push("/login");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function login(token, id) {
        console.log("do we have a token and id", token, id);
        localStorage.setItem('token', token);
        fetchUserData(token, id);
        // check if necessary for storage? const dataFromToken = jwt_decode(token);
        // const userId = id
        // console.log("what is", id);
    }

    async function fetchUserData(token, id) {
        try {
            const response = await axios.get(`https://polar-lake-14365.herokuapp.com/api/user`, {
                headers: {
                    Authorization: `Bearer ${token}`,

                }
            });
            console.log(response);
            // console.log(response.data.username);
            setAuthState({ user: response.data, status: "done" });

            history.push('/loginSuccess');
        } catch(e) {
            console.error(e);
        }
    }


    function logout() {
    localStorage.removeItem('token');
    setAuthState({user: null, status: "done"});
    history.push("/login")
    }

    // data in context
    const data = {authState: authState, login: login, logout: logout};

    return (
        <authContext.Provider value={data}>
            {authState.status === 'pending' && <h1>Loading</h1>}
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

//#Setup context:
// - [x] Which data in context?
// - [x] functions login logout
// - [x] state for user and status(user => null en status => 'pending')
// - [x] use effect for refresh (mountig cycle)
// - [x] status done? children visable
// - [x] set state en functions in data object