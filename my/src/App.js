import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Router } from 'react-router-dom';
import {Routes, Route} from "react-router-dom";
import Register from './pages/Register';
import { Login } from './pages/Login';
import NavMobile from "./comp/NavMobile"
import List from "./pages/List"
import Cube from "./pages/Cube"
import Home from "./pages/Home"
import VideoPage from './pages/VideoPage';
import LiveClass from './pages/LiveClass';
import Room from './pages/Room';
import Comminity from './pages/Comminity';
import Unauthorised from './pages/Unauthorised';

import Compi from "./pages/Compi"

import { useState } from 'react';
import ChatBot from './pages/Ai';


function App() {


  

  return (<Routes>
    <Route path='/home' element={<Home />}/>
    <Route path='/' element={<Register/>}/>
    <Route path='/nav' element={<NavMobile/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/home/list' element={<List/>}/>
    <Route path='/home/comp' element={<Compi/>}/>
    <Route path='/home/cube' element={<Cube/>}/>
    <Route path="/home/video/:name" element={<VideoPage />} />
    <Route path="/home/LiveClass/" element={<LiveClass/>} />
    <Route path="/home/room/:roomId" element={<Room/>} />
    <Route path="/home/Ai-Doubt-Solver" element={<ChatBot/>} />
    <Route path="/home/commniuty" element={<Comminity/>} />
    <Route path="/home/unauthorised" element={<Unauthorised/>} />

   
 
  </Routes>
  
    


  );
}

export default App;
