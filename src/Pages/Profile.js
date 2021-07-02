import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../context/AuthContext';

// #Userdata from context to profile
// - [x] import useContext function and authContext
// - [x] destructuring authState to user
// - [x] show only if user available

function Profile() {
    const {authState: { user }} = useContext(authContext);
    console.log("what is authcontext", user)

    return (
        <>
            <h1>Your profile</h1>
            <section>
                <h2>Gegevens</h2>
                <>
                    <p><strong>Username:</strong> {user?.username}</p>
                    <p><strong>Email:</strong> {user?.email}</p>
                </>
            </section>

            <p>Terug naar de <Link to="/">Homepagina</Link></p>
        </>
    );
}

export default Profile;