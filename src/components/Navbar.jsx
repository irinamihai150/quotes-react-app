import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <div className="container">
        <Link to="/home" className="home">
          Home
        </Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
