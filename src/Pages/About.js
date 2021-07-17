import React from 'react';
import logo from '../assets/globalbing-logo.png'
import {Link} from 'react-router-dom';
import "./About.css";


function About() {
    return (
        <main className="max-width">
            <h1>ABOUT</h1>
            <img src={logo} alt={"<h1>Globalbinge</h1>"}/>
            <h3>Bingewatching around the world!</h3>
            <p>When you log in to Netflix you will only see the content that is available in your country. It is not possible to search for movie and series titles outside your country. This application lets you search the entire content of Netflix and also shows you where this content is available. You can also select a country of your choice and display the newest and expirig titles.</p>
            <p>These features are only available when you have an account of GlobalBinge. Don't have an account yet? no problem you can register <Link to="/register">here</Link>. Already have an account? then log in <Link to="/login">here</Link>. Have fun using GlobalBinge!</p>
        </main>
    );
}

export default About;