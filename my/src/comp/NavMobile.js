import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./NavMobile.css"
import { useFirebase } from '../context/Firebase'
import Cube from '../pages/Cube';

const Nav = (props) => {

  const [isMore, setIsmore] = useState(false)
  const firebase = useFirebase();
  const navigate = useNavigate();
  const isMobile = firebase.isMobileDevice();

  const btnHandler = () => {
    navigate("list")

  }

  const mobileView = () => {
    console.log("view", isMobile);
  }
  mobileView();

  const handelMore = () => {
    console.log("more worked",isMore)
    setIsmore(!isMore)


  }







  return (
    <div className='nav-conM'>
        {
          isMore ? (<div className='more' onClick={handelMore}>

            <h1 className='more-btn'>hlo</h1>
         

            

              
              firebase.isAdmin  ?( <button className='more-btn' onClick={btnHandler}>Add course</button>):(<p></p>)
            

            
              !isMobile ? (<div className='more-btn'> Not</div>
              ) : ""
            

          </div>) : ""
        }





      <div className='nav-itmesM'>



        <Link className='nav-itemM' >Home</Link>
        <Link className='nav-itemM' to={"./comp"}>Lab</Link>
        <Link className='nav-itemM' to={"./VideoCall"}>VideoCall</Link>

        <div className='nav-itemM'>Course</div>
        <div className='nav-itemM'>Conect</div>

        <div className='nav-itemM' onClick={handelMore}>More</div>
      </div>

    




    </div>
  )
}
export default Nav;

