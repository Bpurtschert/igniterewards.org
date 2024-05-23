// authenticatedUserHeader.jsx
import React from 'react';
import logo from '../images/Logo_Horizontal.png';

function authenticatedUserHeader() {
  return (
    <header>
        <div className="header-container">
        <div className="header-table">
            <div className="column">
            <div className="logo-container">
                <a href='/'><img src={logo} alt="Ignite Logo" className="logo" /></a>
            </div>
            </div>
            <div className="column">
            <div className="nav-container">
                <nav className="nav-menu">
                <ul>
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/Shop">Shop</a></li>
                    <li><a href="/MyPoints">My Points</a></li>
                    <li><a href="/MyAccount">My Account</a></li>
                    <li><a href="/">Sign Out</a></li>
                </ul>
                </nav>
            </div>
            </div>
        </div>
        </div>
    </header>
  );
}

export default authenticatedUserHeader;
