import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="login">
      <div className="login_main_box">
        <div className="login_box">
          <div className="box">
            <label>Email :</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="box">
            <label>Password :</label>
            <input type="password" id="password" name="password" />
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
