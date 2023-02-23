import React from 'react'
import Img from '../img/img.png'
import Attach from '../img/attach.png'

const Input = () => {
  return (
    <div className='inputC'>
      <input type="text" placeholder='Type Something....'/>
      <div className="send">
        <img className='inputImg' src={Attach} alt="" />
        <input type="file" style={{display:"none"}} id="file" />
        <label htmlFor="file">
          <img className='inputImg' src={Img} alt="" />
        </label>
        <button className='inputBtn'>Send</button>
      </div>
    </div>
  )
}

export default Input