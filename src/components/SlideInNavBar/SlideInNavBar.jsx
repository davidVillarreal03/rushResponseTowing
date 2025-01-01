import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SlideInNavBar = () => {
    const currentPage = useLocation().pathname;
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  return (
    <div>
      {/* Menu Button */}
      <button
        className="menu-btn"
        onClick={toggleNav}
        aria-label="Toggle Navigation"
      >
        ☰ Menu
      </button>

      {/* Side Navigation */}
      <nav className={`side-nav ${isOpen ? "active" : ""}`}>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Services">Services</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default SlideInNavBar;
