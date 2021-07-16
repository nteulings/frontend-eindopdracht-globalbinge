import React, { useContext } from 'react';
import './TopMenu.css'
import { NavLink } from 'react-router-dom';
import Logo from '../assets/globalbing-logo.png';
import { ImMenu } from "react-icons/im";
import { authContext} from "../context/AuthContext";

// - [x] add useContext for userdata
// - [x] get user data from context
// - [x] change navigation menu when logged in and logged out
// - [x] make search available
// - [x] delete home and add navigation to /home to logo.

function TopMenu() {
    const { logout, authState: { user } } = useContext(authContext);

    return (
        <nav>
            <div className="nav-container">
                <NavLink to="/" exact><img src={Logo} alt="Logo" id={"logo"}/></NavLink>
                    <ul>
                        <>
                            <li>
                                <NavLink to="/about" activeClassName="active-link">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/detailinfo" activeClassName="active-link">Detailinfo</NavLink>
                            </li>
                        </>
                        { user &&
                        <>
                            <li>
                                <NavLink to="/countries" activeClassName="active-link">Countries</NavLink>
                            </li>
                            <li>
                                <NavLink to="/search" activeClassName="active-link">Search</NavLink>
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
                                <NavLink to="/profile" activeClassName="active-link">Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/login" activeClassname="active-link" onClick={logout} >Logout</NavLink>
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