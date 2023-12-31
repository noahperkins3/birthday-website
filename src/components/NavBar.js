import { NavLink } from 'react-router-dom';
import {React, useState} from 'react';

export function NavBar() {
    const [open, setOpen] = useState(false);
    const [lightBackground, setLightBackground] = useState(false);

    function handleHamburgerClick() {
        setOpen(!open);
    }

    function handleClick(e) {
        setOpen(false);
        setLightBackground(false);
    }

    function handleLightBackground(e) {
        setOpen(false);
        setLightBackground(true);
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
                <li className="nav-item"><NavLink onClick={handleLightBackground} to="/musicals">musicals</NavLink></li>
                <li className="nav-item"><NavLink onClick={handleClick} to="/journal">write</NavLink></li>
            </ul>
        </nav>
        </div>
    )
}