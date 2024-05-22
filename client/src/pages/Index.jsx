// Index.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../App.css'; // Import CSS for styling

function index() {
    return (
      <div className="landing-page">
        <h1>Welcome to Ignite Rewards ™</h1>
        <div className="actions">
          <Link to="/login" className="button login">Log In</Link>
          <Link to="/signup" className="button signup">Sign Up</Link>
        </div>
      </div>
    );
  }

export default index;

