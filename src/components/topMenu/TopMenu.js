import React, { useContext } from 'react';
import './TopMenu.css'
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/globalbing-logo.png';
import {ImInfo, ImUser, ImSearch, ImEarth} from "react-icons/im";



import { authContext} from "../../context/AuthContext";

// - [x] add useContext for userdata
// - [x] get user data from context
// - [x] change navigation menu when logged in and logged out
// - [x] make search available
// - [x] delete home and add navigation to /home to logo.

function TopMenu() {
    const { logout, authState: { user } } = useContext(authContext);

    return (
        <div className="header">
        <nav>
            <div className="nav-container">
                <NavLink to="/" exact><img src={Logo} alt="Logo" id={"logo"}/></NavLink>
                    <ul className={"navigation"}>
                        <li>
                            <NavLink to="/about"
                                         activeClassName="active-link"
                                         className="screen"
                                        >About
                            </NavLink>
                            <NavLink to="/about" className="mobile"><ImInfo /></NavLink>
                        </li>
                    { user &&
                    <>
                        <li>
                            <NavLink to="/countries"
                                         activeClassName="active-link"
                                         className="screen"
                                        >Countries
                            </NavLink>
                            <NavLink to="/countries" className="mobile"><ImEarth /></NavLink>
                        </li>
                        <li>
                            <NavLink to="/search"
                                        activeClassName="active-link"
                                        className="screen"
                                        >Search
                            </NavLink>
                            <NavLink to="/search" className="mobile"><ImSearch /></NavLink>
                        </li>
                    </>
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
                            <NavLink to="/login"
                                     activeClassname="active-link"
                                     onClick={logout} >Logout
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/profile"><ImUser /></NavLink>
                        </li>
                    </>
                    }
                    </ul>
            </div>
        </nav>
        </div>
    );
}

export default TopMenu;