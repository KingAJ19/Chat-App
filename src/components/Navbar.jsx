import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="navLogo">Super Chat</span>
      <div className="user">
        <img className='navImage' src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt67ae3fa7e0798570/63dc178bb19823132904002b/Darwin_Nunez_cry_gesture_Liverpool_2022-23.png" alt="" />
        <span>John</span>
        <button className='navBtn'>Log out</button>
      </div>
    </div>
  )
}

export default Navbar