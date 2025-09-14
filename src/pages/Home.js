import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to ViPOOL</h1>
      <p>Find or share rides easily and affordably.</p>
      <Link to="/available-rides" className="cta-button">Find a Ride</Link>
      <Link to="/post-ride" className="cta-button">Post a Ride</Link>
    </div>
  );
};

export default Home;
