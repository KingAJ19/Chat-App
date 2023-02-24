import React from 'react';
import '../responsive.css'
import Add from "../img/addAvatar.png"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'

export const Register = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //Signed in
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      //
    })
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
