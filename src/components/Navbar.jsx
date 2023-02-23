import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Super Chat</span>
      <div className="user">
        <img src="" alt="user profile image" />
        <span>John</span>
        <button>Log out</button>
      </div>
    </div>
  )
}

export default Navbar