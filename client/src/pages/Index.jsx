// index.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/styles.css'; // Import CSS for styling

function Index() {
  return (
    <>
      <section id="hero">
        <div class="container">
          <h2>Unlock Your Academic Potential</h2>
          <p>Get rewarded for your hard work and academic achievements with the Ignite Rewards app.</p>
          <Link to="/SignUp" class="btn">Sign Up Now!</Link>
        </div>
      </section>

      <section id="features">
        <div class="container">
          <h2>Key Features</h2>
          <ul>
            <li>Academic Goal Setting</li>
            <li>Point tracking</li>
            <li>Reward System</li>
            <li>Student Privacy & Security</li>
          </ul>
        </div>
      </section>

      <section id="about">
        <div class="container">
          <h2>About Us</h2>
          <p>At Ignite Rewards, we're committed to providing a program that incentivizes student academic achievement by rewarding good grades and promoting continuous learning. Our mission is to address the lack of motivation and recognition for academic achievements among students, enticing them to attend all their classes to earn rewards.</p>
        </div>
      </section>

      <section id="contact">
        <div class="container">
          <h2>Contact Us</h2>
          <p>If you have any questions or feedback, feel free to contact us:</p>
          <p>Email: info@igniterewards.org</p>
          <p>Phone: 801-708-3245</p>
        </div>
      </section>

      <footer>
        <div class="container">
          <p>&copy; 2024 Ignite Rewards LLC</p>
        </div>
      </footer>
    </>
  );
}

export default Index;


