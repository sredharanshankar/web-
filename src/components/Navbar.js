import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/assets/images/VIPOOL_LOGO_LIGHT.png" alt="ViPOOL Logo" />
        ViPOOL
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rides">Find a Ride</Link></li>
        <li><Link to="/post-ride">Post a Ride</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
