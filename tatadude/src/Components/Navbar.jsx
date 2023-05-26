import React from 'react';
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { BiUserCircle } from 'react-icons/bi';
const Navbar = () => {
  return (
    <nav>
      <div className="navbar-logo">
        <Link to={"/"}>
        <img src="https://www.tutedude.com/refundassets/Tutedude.png" alt="logo" />
        </Link>
      </div>
      <div className="navbar-menu">
       
        <h2>Profile Name</h2>
      </div>
    </nav>
  );
};

export default Navbar;
