import React from "react";
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <ul className="nav nav-tabs bg-dark d-flex">
            <li className="nav-item">
                <NavLink
                to='/'
                end
                className={({isActive}) => 
                isActive ? 'nav-link active bg-dark text-white' : 'nav-link'
            }
            >Home
            </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                to='projects'
                end
                className={({isActive}) => 
                isActive ? 'nav-link active bg-dark text-white' : 'nav-link'
            }
            >Projects
            </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                to='contact'
                end
                className={({isActive}) => 
                isActive ? 'nav-link active bg-dark text-white' : 'nav-link'
            }
            >Contact
            </NavLink>
            </li>
        </ul>
    )
}

export default Header;