import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Index from './pages/Index';
import Welcome from './pages/Welcome';
import './App.css'; // Import CSS for styling
import logo from './images/Logo_Horizontal.png'; // Import your logo image
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <header>
          <div className="header-container">
            <div className="header-table">
              <div className="column">
                <div className="logo-container">
                  {/* Use the imported logo image */}
                  <a href='/'><img src={logo} alt="Ignite Logo" className="logo" /></a>
                </div>
              </div>
              <div className="column">
                <div className="nav-container">
                  <nav className="nav-menu">
                    <ul>
                      <li><a href="#features">Features</a></li>
                      <li><a href="#about">About</a></li>
                      <li><a href="#contact">Contact</a></li>
                      <li><a href='/SignIn'>Login</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Welcome" element={<Welcome />} />          
        </Routes>
      </div>
    </Router>
  );
}

export default App;





