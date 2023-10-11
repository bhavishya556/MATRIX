import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./liveClass.css"
import Logo from "../comp/logo.png"

const LiveClass = () => {
  const [value, setValue] = useState(108108);
  const navigate = useNavigate();

  const handelJoinRoom = useCallback(() => {
    navigate(`/home/room/${value}`)
  })
  return (
    <div className='class-con'>
      <div >
        <div className='nav-logo-con nav-logo class-logo'>

          <img src={Logo} className='nav-logo foot-logo' alt="Logo" />
          <h3>Notion Live  Class</h3>
        </div>
        <div className='class-sub-con'>




          <h2 className='class-txt'>Start With Notion Live Class</h2>
          <input type='text' placeholder='Enter Room Code ' className='live-input'
            onChange={(e) => {
              setValue(e.target.value)

            }}
            value={value}></input>
          <button onClick={handelJoinRoom} className='class-btn'>Join Live Class</button>
        </div>
      </div>

    </div>
  )
}

export default LiveClass