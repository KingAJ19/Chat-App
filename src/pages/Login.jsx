import React from 'react';
import Add from "../img/addAvatar.png"

export const Login = () => {
  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <center>
          <span className="logo">Super Chat</span> 
        </center>
        <br></br>
        <center>
          <span className="title">Login</span>
        </center>
        <form className='form'>
          <input type="email" placeholder='Email'></input>
          <input type="password" placeholder='Password'></input>
          <button>Sign In</button>
        </form>
        <p>Don't have an account? Register</p>
      </div>
    </div>
  )
} 


export default Login
