import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleViewAllPosts = () => {
    navigate('/all-posts');
  };

  return (
    <div className="Navbar-container">
      <div className="navbar-in-container">
        <div className="logo-container" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <h3 className="logo-heading" >Wylo</h3>
        </div>
        <div className="pulse-button">
          <button onClick={handleViewAllPosts}>View All Posts</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
