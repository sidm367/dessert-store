import React from 'react';
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className = "navbar">
            <ul className = "nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </nav>
    );

}