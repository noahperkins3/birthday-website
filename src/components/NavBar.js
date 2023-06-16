import { NavLink } from 'react-router-dom';
import {React, useState} from 'react';

export function NavBar() {
    const [open, setOpen] = useState(false);

    function handleHamburgerClick() {
        setOpen(!open);
    }

    function handleClick(e) {
        setOpen(false);
    }

    return (
        <div className="nav-container">
        <span id="hamburger" onClick={handleHamburgerClick}><img src="img/white-menu-icon-png-18.jpg"/></span>
        <nav className={open ? "display-nav" : "hide-nav"}>
            <ul className="nav-list">
                <li className="nav-item"><NavLink onClick={handleClick} to="/home">home</NavLink></li>
                <li className="nav-item"><NavLink onClick={handleClick} to="/books">books</NavLink></li>
                <li className="nav-item"><NavLink onClick={handleClick} to="/travel">travel</NavLink></li>
                <li className="nav-item"><NavLink onClick={handleClick} to="/notes">notes</NavLink></li>
                <li className="nav-item"><a href="">musicals</a></li>
                <li className="nav-item"><NavLink onClick={handleClick} to="/journal">write</NavLink></li>
            </ul>
        </nav>
        </div>
    )
}