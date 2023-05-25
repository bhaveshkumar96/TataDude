import React from 'react';
import "../styles/Navbar.css";
import { BiUserCircle } from 'react-icons/bi';
const Navbar = () => {
  return (
    <nav>
      <div className="navbar-logo">
        <img src="https://www.tutedude.com/refundassets/Tutedude.png" alt="logo" />
      </div>
      <div className="navbar-menu">
       
        <h2>Profile Name</h2>
      </div>
    </nav>
  );
};

export default Navbar;
