import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/SignIn.css';

function SignInPage(props) {
  const [formData, setFormData] = useState({
    studentID: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/getLoginCredentials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();

      if (data.isValid) {
        // User authenticated, navigate to the next page
        console.log("User successfully authenticated")
        navigate('/home');
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Internal Server Error');
    }
  };

  return (
    <div className="signin-page">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="studentID"
          value={formData.studentID}
          onChange={handleChange}
          placeholder="Student ID"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit" className="button">Log In</button>
      </form>
      {error && <p className="error">{error}</p>}
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
}

export default SignInPage;
