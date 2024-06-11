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
            </div>
        </div>
    </header>
  );
}

export default authenticatedUserHeader;
