import React from 'react';
import '../styles/Home.css'; // Import CSS for styling

function HomePage() {
  return (
    <div className="home-page">
      <header className="header">
        <nav className="navbar">
          <a href="/Home" className="nav-link">Home</a>
          <a href="/assignments" className="nav-link">Assignments</a>
          <a href="/shop" className="nav-link">Shop</a>
          <a href="/myPoints" className="nav-link">My Points</a>
          <a href="/"  className="nav-link">Sign Out</a>
        </nav>
      </header>
      <main>
        <section className="assignments section">
          <div className="card-container">
            <div className="card">
              <h3>Upcoming Assignments</h3>
              <div className='row'>
                <div className='column'>
                  Assignment: 
                </div>
                <div className='column'>
                  Due Date:
                </div>
                <div className='column'>
                  Stars:
                </div>
              </div>
              <hr />
              <div className='row'>
                <div className='column'>
                  Math Test 
                </div>
                <div className='column'>
                  June 12th, 2024
                </div>
                <div className='column'>
                  14
                </div>
              </div>
              <div className='row'>
                <div className='column'>
                  English Essay 
                </div>
                <div className='column'>
                  June 15th, 2024
                </div>
                <div className='column'>
                  5
                </div>
              </div>
              <div className='row'>
                <div className='column'>
                  Group Project 
                </div>
                <div className='column'>
                  June 15th, 2024
                </div>
                <div className='column'>
                  20
                </div>
              </div>
            </div>
            <div className="card">
              <h3>Shop</h3>
              <div className='shop-card-container'>
                <div className='shop-card'>
                  Mcdonalds
                </div>
                <div className='shop-card'>
                    Amazon gift card
                </div>
                <div className='shop-card'>
                    Prom Tickets
                </div>
                <div className='shop-card'>
                    Stanley
                </div>
              </div>
            </div>
            <div className="card">
              <h3>My Stars</h3>
              <div style={{ fontSize: '25px' }}><strong>Your total stars: 1,345</strong></div>
            </div>
            <div className="card">
              <h3>My Rewards</h3>
              <div className='row'>
                <div className='column'>
                  Reward: 
                </div>
                <div className='column'>
                  Total Stars:
                </div>
              </div>
              <hr />
              <div className='row'>
                <div className='column'>
                  Free Chick fil a 
                </div>
                <div className='column'>
                  15
                </div>
              </div>
              <div className='row'>
                <div className='column'>
                  5 Extra Credit Points 
                </div>
                <div className='column'>
                  50
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


export default HomePage;