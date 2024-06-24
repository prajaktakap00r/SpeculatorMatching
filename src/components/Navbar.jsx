import React, { useEffect, useState } from "react";
import "./Navbar.css"; // Import the CSS for styling

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${sticky ? "sticky" : ""}`}>
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
