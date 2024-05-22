// SignUpPage.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/SignUp.css'; // Import CSS for styling

function SignUpPage() {
  const [formData, setFormData] = useState({
    schoolID: '',
    studentID: '',
    studentName: '',
    password: '',
    confirmPassword: ''
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
    // Implement your sign-up logic here
    console.log(formData);
  };

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="schoolID" value={formData.schoolID} onChange={handleChange} placeholder="School ID" required />
        <input type="text" name="studentID" value={formData.studentID} onChange={handleChange} placeholder="Student ID" required />
        <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} placeholder="Student Name" required />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" required />
        <button type="submit" className="button">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Log In</Link></p>
    </div>
  );
}

export default SignUpPage;
