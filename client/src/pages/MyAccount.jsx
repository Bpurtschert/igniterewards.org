import React, { useState } from 'react';
import '../styles/MyAccount.css'; // Import CSS for styling

function MyAccount() {
  // Sample user data
  const [userData, setUserData] = useState({
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    preferences: {
      darkMode: false,
      notifications: true,
    },
  });

  // State for form inputs
  const [formValues, setFormValues] = useState({
    username: userData.username,
    email: userData.email,
    bio: userData.bio,
    darkMode: userData.preferences.darkMode,
    notifications: userData.preferences.notifications,
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormValues({
      ...formValues,
      [name]: newValue,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Update user data with form values
    setUserData({
      ...userData,
      username: formValues.username,
      email: formValues.email,
      bio: formValues.bio,
      preferences: {
        darkMode: formValues.darkMode,
        notifications: formValues.notifications,
      },
    });

    // Reset form values
    setFormValues({
      ...formValues,
      darkMode: formValues.preferences.darkMode,
      notifications: formValues.preferences.notifications,
    });
  };

  return (
    <div className="profile-container">
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formValues.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio:</label>
          <textarea
            id="bio"
            name="bio"
            value={formValues.bio}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="darkMode">Dark Mode:</label>
          <input
            type="checkbox"
            id="darkMode"
            name="darkMode"
            checked={formValues.darkMode}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="notifications">Notifications:</label>
          <input
            type="checkbox"
            id="notifications"
            name="notifications"
            checked={formValues.notifications}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default MyAccount;

