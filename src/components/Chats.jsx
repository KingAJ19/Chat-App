import React from 'react'

const Chats = () => {
  return (
    <div className='chats'>
      {/* User Starts */}
      <div className="userChat">
        <img className='searchImage' src="https://resources.premierleague.com/premierleague/photo/2023/01/04/effad1fa-ede8-4a56-83d4-d2c840bddf44/Kane-Spurs.jpg" alt="" />
        <div className="userChatsInfo">
          <span>Harry Kane</span>
          <p>Hello</p>
        </div>
      </div>
      {/* User Ends */}
      <div className="userChat">
        <img className='searchImage' src="https://e0.365dm.com/22/01/2048x1152/skysports-mohamed-salah-liverpool_5638215.jpg" alt="" />
        <div className="userChatsInfo">
          <span>Mo Salah</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img className='searchImage' src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blte05a8becf6898cfe/63a0edeb501fcf7ffb82135f/1242501804.jpg?auto=webp&format=jpg&quality=100" alt="" />
        <div className="userChatsInfo">
          <span>Kante</span>
          <p>Hello</p>
        </div>
      </div>

      <div className="userChat">
        <img className='searchImage' src="https://d2x51gyc4ptf2q.cloudfront.net/content/uploads/2023/01/29083952/Arsenal-midfielder-Martin-Odegaard.jpg" alt="" />
        <div className="userChatsInfo">
          <span>Odegaard</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img className='searchImage' src="https://cdn.resfu.com/media/img_news/goal_kevindebruyne-cropped_qr5zvo5ekb1k173f5auabcbly.jpg?size=1000x&lossy=1" alt="" />
        <div className="userChatsInfo">
          <span>Kevin De Bruyne</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chats