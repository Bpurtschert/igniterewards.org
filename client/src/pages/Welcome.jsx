import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/Welcome.css'; // Import CSS for styling

function Welcome() {
    return (
      <div className="Welcome">
        <h1>Welcome to Ignite Rewards ™</h1>
        <div className="actions">
          <Link to="/SignIn" className="button login">Log In</Link>
          <Link to="/SignUp" className="button signup">Sign Up</Link>
        </div>
      </div>
    );
  }

export default Welcome;
