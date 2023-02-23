import React from 'react'

export const Register = () => {
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
        <form className='form'>
          <input type="text" placeholder='Name'></input>
          <input type="email" placeholder='Email'></input>
          <input type="password" placeholder='Password'></input>
          <input type="file" id="file" />
          <label htmlFor="file">
            abcdefgh
          </label>
          <button>Sign Up</button>
        </form>
        <p>Have an account? Login</p>
      </div>
    </div>
  )
} 


export default Register
