import React from 'react';
import './TopMenu.css'
import { NavLink } from 'react-router-dom';
import logo from '../assets/globalbing-logo.png';

function TopMenu() {
    return (
        <nav>
            <img src={logo} alt={'logo'}/>

            <div className="nav-container">
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
                </ul>
            </div>
        </nav>
    );
}

export default TopMenu;