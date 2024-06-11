import React from 'react';
import '../styles/Shop.css'; // Import CSS for styling

function Shop() {
    // Sample data for item cards
    const items = [
      { name: 'Item 1', stars: 50 },
      { name: 'Item 2', stars: 100 },
      { name: 'Item 3', stars: 150 },
      { name: 'Item 4', stars: 200 },
      { name: 'Item 5', stars: 250 },
      { name: 'Item 6', stars: 300 },
      { name: 'Item 7', stars: 350 },
      { name: 'Item 8', stars: 400 },
      { name: 'Item 9', stars: 450 },
      { name: 'Item 10', stars: 500 },
      { name: 'Item 11', stars: 550 },
      { name: 'Item 12', stars: 600 },
      { name: 'Item 13', stars: 650 },
      { name: 'Item 14', stars: 700 },
      { name: 'Item 15', stars: 750 },
      { name: 'Item 16', stars: 800 },
      { name: 'Item 17', stars: 850 },
      { name: 'Item 18', stars: 900 },
      { name: 'Item 19', stars: 950 },
      { name: 'Item 20', stars: 1000 },
      { name: 'Item 21', stars: 1050 },
      { name: 'Item 22', stars: 1100 },
      { name: 'Item 23', stars: 1150 },
      { name: 'Item 24', stars: 1200 },
    ];
  
    return (
      <div className='shop-page'>
        <header className="header">
        <nav className="navbar">
          <a href="/Home" className="nav-link">Home</a>
          <a href="/assignments" className="nav-link">Assignments</a>
          <a href="/shop" className="nav-link">Shop</a>
          <a href="/myPoints" className="nav-link">My Points</a>
          <a href="/"  className="nav-link">Sign Out</a>
        </nav>
      </header>
        <div className="shop-container">
          <h1>Shop</h1>
          <div className="shop-grid">
            {items.map((item, index) => (
              <div key={index} className="item-card">
                <h2>{item.name}</h2>
                <p>Stars: {item.stars}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default Shop;
