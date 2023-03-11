import React,{useState} from 'react'
import './Signup.css'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../firebase/Firebase'
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confPassword,setConfPassword]=useState('');
    const [validationMsg, setValidationMsg] = useState("");

    const navigate = useNavigate();

    const setEmailState = (event) => {
        setEmail(event.target.value);
      };
    
    
      const setPasswordNoState = (event) => {
        setPassword(event.target.value);
      };
    
      const setConfPasswordState = (event) => {
        setConfPassword(event.target.value);
      };
    
    
    const validationMessage = (message) => {
        setValidationMsg(message);
        setTimeout(function () {
          setValidationMsg("");
        }, 5000);
      };
    
    const validateEmail = () => {
        if (email.length === 0) {
          validationMessage("Email cannot be empty");
          return false;
        }
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
          return true;
        } else {
            validationMessage("Enter a valid email address");
          return false;
        }
      };
    
    
    
      const confirmPassword = () => {
        if (password.length < 6) {
          validationMessage("password should be 6 characters long");
          return false;
        }
        if (password.length === 0 || confPassword.length === 0) {
          validationMessage("Password cannot be empty");
          return false;
        } else if (password !== confPassword) {
          validationMessage("Passwords do not match");
          return false;
        }
        return true;
      };


      const onSubmit = (e) => {
        e.preventDefault();
         //validating email and phone
    if (!validateEmail()) {
        return;
      }  else if (!confirmPassword()) {
        return;
      } else {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
           
            const user = userCredential.user;
            console.log('logged in')
            console.log(user);
            localStorage.setItem("user", JSON.stringify(user));
            const savedData=localStorage.getItem('user')
            console.log(savedData)
            navigate("/");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            validationMessage(errorMessage);

        });

      }
        
       
       
    }
    
    

  return (
    <div className="login">
    <div className="login_main_box">
      <div className="login_box">
        <div className="login-title">SignIn</div>
        <form action="" onSubmit={onSubmit}>
        <div className="box">
         
         <input type="email" id="email" name="email" placeholder="Email" onChange={setEmailState}/>
       </div>
       <div className="box">
         <input type="password" id="password" name="password" placeholder="Enter Password" onChange={setPasswordNoState}/>
       </div>
       <div className="box">
         <input type="password" id="confpassword" name="confpassword" placeholder="Confirm  Password" onChange={setConfPasswordState }/>
       </div>
       <span className='box'>
           {validationMsg}
       </span>
       <div className="box">
         <button className="submit_button">Submit</button>
       </div>
        </form>
      
      </div>
    </div>
  </div>
  )
}

export default Signup