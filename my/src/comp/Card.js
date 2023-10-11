import React, { useState, useEffect } from 'react'
import "./card.css"
import { useFirebase } from '../context/Firebase';

import { Routes, Route, Link } from "react-router-dom";
import VideoPage from '../pages/VideoPage';


const Card = (props) => {
  const firebase = useFirebase();

  const [url, Seturl] = useState(null);
  useEffect(() => {
    firebase.getImageURL(props.imageURL).then((url) => {
      Seturl(url)
    })

  }, []);
  console.log(props,"helo")
  return (


    <Link to={`/home/video/${encodeURIComponent(props.name)}`}>
    <div className='card'>
      <img src={url} className='card-img' alt="Course" />
    </div>
  </Link>

  )
}

export default Card