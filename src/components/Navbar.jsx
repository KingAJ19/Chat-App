import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="navLogo">Super Chat</span>
      <div className="user">
        <img className='navImage' src="" alt="" />
        <span>John</span>
        <button className='navBtn'>Log out</button>
      </div>
    </div>
  )
}

export default Navbar