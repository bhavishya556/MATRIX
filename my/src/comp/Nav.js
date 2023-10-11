import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./nav.css"
import { useFirebase } from '../context/Firebase'
import Cube from '../pages/Cube';
import Logo from "./logo.png"


const Nav = (props) => {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const isMobile = firebase.isMobileDevice();

  const btnHandler = () => {
    navigate("list")

  }
  const logout = () => {
    firebase.logOut();
    navigate("/login");
};








  return (
    <div className='nav-con'>

      <div className='nav-logo-con nav-logo'>

        <img src={Logo} className='nav-logo foot-logo' alt="Logo" />
        <h3>Notion</h3>
      </div>


      <div className='nav-itmes'>

       
        <Link className='nav-item' to={"./comp"}>Lab</Link>
        <Link className='nav-item' to={"./LiveClass"}>LiveClass</Link>
        <Link className='nav-item' to={"./commniuty"}>Community</Link>
        <a className='nav-item' href='https://notion-ai-doubt-solver.netlify.app'>Ai Doubt Solver</a>
   
   
   <button className='nav-item nav-admin ' onClick={btnHandler}>Add course</button>
      <Link className='nav-item'onClick={logout}>LogOut</Link>
      </div>


  <button className='admin' onClick={btnHandler}>Add course</button>


    </div>
  )
}
export default Nav;

