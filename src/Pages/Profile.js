import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../context/AuthContext';
import "./Profile.css"

// #Userdata from context to profile
// - [x] import useContext function and authContext
// - [x] destructuring authState to user
// - [x] show only if user available

function Profile() {
    const {authState: { user }} = useContext(authContext);
    console.log("what is authcontext", user)

    return (
        <article className={"profile-container"}>
            <h1 className={"title"}>Your profile</h1>
                    <h3><strong>Username:</strong> {user?.username}</h3>
                    <h3><strong>Email:</strong> {user?.email}</h3>

            <h3>Back to <Link to="/">homepage</Link></h3>
        </article>
    );
}

export default Profile;