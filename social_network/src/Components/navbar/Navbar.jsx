import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar_main_box">
        <div className="navbar_box">
          <ul className="navbar">
            <div className="navbar-space">
              <li className="nav-box active">Network</li>
            </div>
            <div className="navbar-space">
              <li className="nav-box">Add Post</li>
              <li className="nav-box">Profile</li>
              <li className="nav-box">Sign Up</li>
              <li className="nav-box">Login</li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
