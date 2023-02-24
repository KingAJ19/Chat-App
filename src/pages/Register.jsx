import React from 'react';
import '../responsive.css'
import Add from "../img/addAvatar.png"

export const Register = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const displayName = e.target[0].value;
  }


  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <center>
          <span className="logo">Super Chat</span> 
        </center>
        <br></br>
        <center>
          <span className="title">Register</span>
        </center>
        <form className='form' onSubmit={handleSubmit}>
          <input type="text" placeholder='Name'></input>
          <input type="email" placeholder='Email'></input>
          <input type="password" placeholder='Password'></input>
          <input style={{display:"none"}} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="add an avatar" />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>Have an account? Login</p>
      </div>
    </div>
  )
} 


export default Register
