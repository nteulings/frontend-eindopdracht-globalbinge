import React, { useContext } from 'react';
import './TopMenu.css'
import { NavLink } from 'react-router-dom';
import Logo from '../assets/globalbing-logo.png';
import { ImMenu } from "react-icons/im";
import { authContext} from "../context/AuthContext";

// - [x] add useContext for userdata
// - [x] get user data from context
// - [x] change navigation menu when logged in and logged out

function TopMenu() {
    const { logout, authState: { user } } = useContext(authContext);

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
                        { user &&
                        <li>
                            <NavLink to="/countries" activeClassName="active-link">Countries</NavLink>
                        </li>
                        }
                        {!user ?
                            <>
                            <li>
                                <NavLink to="/login" activeClassName="active-link">Login</NavLink>
                            </li>

                            <li>
                                <NavLink to="/register" activeClassName="active-link">Register</NavLink>
                            </li>
                            </>
                            :
                            <>
                            <li>
                            <NavLink to="/profile" activeClassName="active-link">Profile</NavLink>
                            </li>
                            <li>
                            <NavLink to="/login" activeClassname={"active-link"} onClick={logout} >Logout</NavLink>
                            </li>
                            </>
                        }
                    </ul>
                    <ImMenu id={'hamburger-menu'} size={40} />
            </div>
        </nav>
    );
}

export default TopMenu;