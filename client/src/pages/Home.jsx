import React from 'react';
import '../styles/Home.css'; // Import CSS for styling

function HomePage() {
  return (
    <div className="home-page">
      <h1>My Assignments</h1>
      <div className="card">
        <h2>Assignment 1</h2>
        <p>Class Name: Math</p>
        <p>Stars: 3</p>
        <p>Due Date: 2024-05-30</p>
      </div>
      <div className="card">
        <h2>Assignment 2</h2>
        <p>Class Name: Science</p>
        <p>Stars: 4</p>
        <p>Due Date: 2024-06-05</p>
      </div>
      <div className="card">
        <h2>Assignment 3</h2>
        <p>Class Name: History</p>
        <p>Stars: 5</p>
        <p>Due Date: 2024-06-10</p>
      </div>
      <div className="card">
        <h2>Assignment 4</h2>
        <p>Class Name: English</p>
        <p>Stars: 2</p>
        <p>Due Date: 2024-06-15</p>
      </div>
      <div className="card">
        <h2>Assignment 5</h2>
        <p>Class Name: Art</p>
        <p>Stars: 3</p>
        <p>Due Date: 2024-06-20</p>
      </div>
      <div className="card">
        <h2>Assignment 6</h2>
        <p>Class Name: Music</p>
        <p>Stars: 1</p>
        <p>Due Date: 2024-06-25</p>
      </div>
    </div>
  );
}

export default HomePage;
