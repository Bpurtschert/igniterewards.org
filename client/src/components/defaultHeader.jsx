// DefaultHeader.jsx
import React from 'react';
import logo from '../images/Logo_Horizontal.png';
import '../styles/styles.css';

function DefaultHeader() {
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
                    <li><a href="/#features">Features</a></li>
                    <li><a href="/#about">About</a></li>
                    <li><a href="/#contact">Contact</a></li>
                    <li><a href='/SignIn'>Login</a></li>
                </ul>
                </nav>
            </div>
            </div>
        </div>
        </div>
    </header>
  );
}

export default DefaultHeader;
