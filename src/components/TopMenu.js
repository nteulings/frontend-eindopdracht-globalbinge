import React from 'react';
import './TopMenu.css'
import { NavLink } from 'react-router-dom';
import Logo from '../assets/globalbing-logo.png';
import { ImMenu } from "react-icons/im";

function TopMenu() {
    return (
        <nav>
            <div className="nav-container">
                <img src={Logo} alt="Logo" id={"logo"}/>
                    <ul>
                        <li>
                            <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                        </li>

                        <li>
                            <NavLink to="/about" activeClassName="active-link">About</NavLink>
                        </li>

                        <li>
                            <NavLink to="/countries" activeClassName="active-link">Countries</NavLink>
                        </li>

                        <li>
                            <NavLink to="/login" activeClassName="active-link">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/profile" activeClassName="active-link">Profile</NavLink>
                        </li>
                    </ul>
                    <ImMenu id={'hamburger-menu'} size={40} />
            </div>
        </nav>
    );
}

export default TopMenu;