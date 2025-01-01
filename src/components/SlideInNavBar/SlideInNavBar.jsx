import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SlideInNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen); // Toggle the state
  const closeSidebar = () => setIsOpen(false);

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
        <button onClick={closeSidebar} className='close-btn'>&times;</button>
        <ul>
            <li><Link to="/" onClick={closeSidebar}>Home <i class="fa-solid fa-house"></i></Link></li>
            <li><Link to="/About" onClick={closeSidebar}>About <i class="fas fa-question-circle"></i></Link></li>
            <li><Link to="/Services" onClick={closeSidebar}>Services <i class="fas fa-road"></i></Link></li>
            <li><Link to="/Contact" onClick={closeSidebar}>Contact <i class="fa-solid fa-paper-plane"></i></Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default SlideInNavBar;
