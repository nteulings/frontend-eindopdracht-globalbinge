import React, {createContext, useEffect, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
// import jwt_decode from "jwt-decode";

// #context logic for login
// - [x] make token available from context
// - [x] put token in locale storage
// -  [x] userdata
// - [x] import axios
// - [x] make asynch function and call from login
// - [x] try / catch
// - [x] try: axios GET request endpoint http://localhost:3000/600/users/${id} and send token
//     - [x] request data in state and context
// - [x] Link user to profile page
// - [x] make token available in local storage.


export const authContext = createContext({});

function AuthContextProvider({ children }) {

    const [authState, setAuthState] = useState({user: null, status: 'pending'});

    const history = useHistory();

    useEffect(() => {
        setTimeout(() =>
            setAuthState({user: null, status: 'done'}), 2000);
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

            history.push('/profile');
        } catch(e) {
            console.error(e);
        }
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

//#Setup context:
// - [x] Which data in context?
// - [x] functions login logout
// - [x] state for user and status(user => null en status => 'pending')
// - [x] use effect for refresh (mountig cycle)
// - [x] status done? children visable
// - [x] set state en functions in data object