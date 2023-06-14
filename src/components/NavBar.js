import { NavLink } from 'react-router-dom';
import React from 'react';

export function NavBar() {


    return (
        <div className="NavBar">
        <span id="hamburger"><img src="img/white-menu-icon-png-18.jpg"/></span>
        <nav className="nav">
            <ul className="nav-list">
                <li className="nav-item"><a href="">home</a></li>
                <li className="nav-item"><a href="">books</a></li>
                <li className="nav-item"><a href="">travel</a></li>
                <li className="nav-item"><a href="">notes</a></li>
                <li className="nav-item"><a href="">musicals</a></li>
                <li className="nav-item"><a href="">write</a></li>
            </ul>
        </nav>
        </div>
    )
}