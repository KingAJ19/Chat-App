import React from 'react'

export const Register = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">Super Chat</span>
            <span className="logo">Register</span>
            <form>
                <input type="text" placeholder='Name'></input>
                <input type="email" placeholder='Email'></input>
                <input type="password" placeholder='Password'></input>
                <input type="file" placeholder='Name'></input>
                <button>Sign Up</button>
            </form>
            <p>Have an account? Login</p>
        </div>
    </div>
  )
}
