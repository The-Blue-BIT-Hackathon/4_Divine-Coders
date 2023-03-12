import React from "react";
import "./Navbar.css";
import checkLogedIn from "../../hook/checkLogin";
import { Link } from "react-router-dom";
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
            <li className="nav-box">
                {" "}
                <Link className="nav-name" to="/">Home</Link> 
              </li>
              <li className="nav-box">
                {" "}
                <Link className="nav-name" to="/addpost">Add Post</Link> 
              </li>
              <li className="nav-box">
                {" "}
                <Link className="nav-name" to="/">Profile</Link> 
              </li>
              {checkLogedIn ? (
                <div className="signup-login">
                  <li className="nav-box">
                    {" "}
                    <Link className="nav-name" to="/signup">Sign Up</Link> 
                  </li>
                  <li className="nav-box">
                    {" "}
                    <Link className="nav-name" to="/login"> Login</Link> 
                  </li>
                </div>
              ) : (
                <li className="nav-box">
                  {" "}
                  <Link className="nav-name" to="/"></Link> Logout
                </li>
              )}
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
