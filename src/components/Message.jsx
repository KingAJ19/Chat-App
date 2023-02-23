import React from 'react'

const Message = () => {
  return (
    <div className='message'>
      <div className="messageInfo">
      <img className='infoImg' src="https://e0.365dm.com/22/05/2048x1152/skysports-steph-curry-nba-basketball_5771331.jpg" alt="" />
      <span>just now</span>
      </div>
        <div className="messageContent">
          <p>hello</p>
          {/* <img className='contentImg' src="https://s.hdnux.com/photos/01/26/17/63/22609106/7/1200x0.jpg" alt="" /> */}
        </div>
      </div>
  )
}

export default Message