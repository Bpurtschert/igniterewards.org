import React from 'react';
import '../styles/MyPoints.css'; // Import CSS for styling

function MyPoints() {
    // Sample data for points breakdown
    const pointsBreakdown = [
      { category: 'Homework', points: 100 },
      { category: 'Quiz', points: 50 },
      { category: 'Project', points: 200 },
      { category: 'Extra Credit', points: 50 },
    ];
  
    // Calculate total points
    const totalPoints = pointsBreakdown.reduce((total, item) => total + item.points, 0);
  
    return (
      <div className='points-page'>
        <header className="header">
          <nav className="navbar">
            <a href="/Home" className="nav-link">Home</a>
            <a href="/assignments" className="nav-link">Assignments</a>
            <a href="/shop" className="nav-link">Shop</a>
            <a href="/myPoints" className="nav-link">My Points</a>
            <a href="/myaccount" className="nav-link">My Account</a>
            <a href="/"  className="nav-link">Sign Out</a>
          </nav>
        </header>
        <div className="mypoints-container">
          <h1>My Points</h1>
          <div className="total-points">
            <h2>Total Stars: {totalPoints}</h2>
          </div>
          <div className="points-breakdown">
            <h2>Points Breakdown</h2>
            <ul>
              {pointsBreakdown.map((item, index) => (
                <li key={index}>
                  <span>{item.category}</span>
                  <span>{item.points} stars</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default MyPoints;