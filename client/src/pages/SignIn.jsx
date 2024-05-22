// SignInPage.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/SignIn.css'; // Import CSS for styling

function SignInPage() {
  const [formData, setFormData] = useState({
    studentID: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your sign-in logic here
    console.log(formData);
  };

  return (
    <div className="signin-page">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="studentID" value={formData.studentID} onChange={handleChange} placeholder="Student ID" required />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
        <button type="submit" className="button">Log In</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
}

export default SignInPage;
