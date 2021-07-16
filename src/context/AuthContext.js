import React, {createContext, useEffect, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

// AuthContext
// This provider manage authorization to the application.
// after successful login token is stored in localstorage.
// and is still available after refresh

export const authContext = createContext({});
function AuthContextProvider({ children }) {

    const [authState, setAuthState] = useState({user: null, status: 'pending'});
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token");
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
        localStorage.setItem('token', token);
        fetchUserData(token, id);
    }
    async function fetchUserData(token, id) {
        try {
            const response = await axios.get(`https://polar-lake-14365.herokuapp.com/api/user`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            console.log(response);
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