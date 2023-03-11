import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="login">
      <div className="login_main_box">
        <div className="login_box">
          <div className="login-title">Login</div>
          <div className="box">
           
            <input type="email" id="email" name="email" placeholder="Username" />
          </div>
          <div className="box">
            <input type="password" id="password" name="password" placeholder="Enter Password" />
          </div>
          <div className="box">
            <button className="submit_button">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
