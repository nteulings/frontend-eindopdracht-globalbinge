import React, {useContext} from 'react';
import {authContext} from "../context/AuthContext";

function Landingpage() {
    const authData = useContext(authContext);
    console.log("Wat is authData:", authData);

    return (
        <div className="page-container">
            <h1>Homepage</h1>
        </div>
    );
}

export default Landingpage;