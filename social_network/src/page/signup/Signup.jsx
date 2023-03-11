import React from 'react'
import './Signup.css'
const Signup = () => {
  return (
    <div className="login">
    <div className="login_main_box">
      <div className="login_box">
        <div className="login-title">SignIn</div>
        <div className="box">
         
          <input type="email" id="email" name="email" placeholder="Email" />
        </div>
        <div className="box">
          <input type="password" id="password" name="password" placeholder="Enter Password" />
        </div>
        <div className="box">
          <input type="password" id="confpassword" name="confpassword" placeholder="Confirm  Password" />
        </div>
        <div className="box">
          <button className="submit_button">Submit</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Signup