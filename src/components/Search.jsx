import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find A User' />
      </div>
      <div className="userChat">
        <img className='searchImage' src="https://resources.premierleague.com/premierleague/photo/2023/01/04/effad1fa-ede8-4a56-83d4-d2c840bddf44/Kane-Spurs.jpg" alt="" />
        <div className="userChatInfo">
          <span>Harry Kane</span>
        </div>
      </div>
    </div>
  )
}

export default Search