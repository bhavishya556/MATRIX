import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFirebase } from '../context/Firebase';
import ReactPlayer from 'react-player';
import "./VideoPage.css"
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";
import Logo from "../comp/logo.png"

const VideoPage = () => {
  const { name } = useParams();
  const firebase = useFirebase();
  const [allVideoURL, setAllVideoURL] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVideoListOpen, setIsVideoListOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const playerHeight = isMobile ? '40vh' : '90vh';




  useEffect(() => {
    // Define an async function to fetch the document with the matching name
    const fetchData = async () => {
      try {
        const documentData = await firebase.fetchDocumentByName(name);
        if (documentData) {
          // Assuming `allVideoURL` is a field in the document
          const videoURLs = documentData.allVideoURL || [];
          setAllVideoURL(videoURLs);
        } else {
          console.error('No document found with the specified name:', name);
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };

    // Call the async function to fetch the data
    fetchData();
  }, [name, firebase]);

  useEffect(() => {
    // Once the allVideoURL array is populated, set the selected video to the first URL
    if (allVideoURL.length > 0) {
      setSelectedVideo(allVideoURL[0]);
    }
  }, [allVideoURL]);

  const handleVideoSelect = (videoURL) => {
    setSelectedVideo(videoURL);
  };

  const toggleVideoList = () => {
    setIsVideoListOpen(!isVideoListOpen);
  };

  // Render the videos here
  return (
    <div className="video-page">

      {
        isVideoListOpen ? (
          <div className="video-list" >
            <div className='nav-logo-con nav-logo'>

              <img src={Logo} className='nav-logo foot-logo' alt="Logo" />
              <h3>Notion</h3>
            </div>
            <ul className='vid-ul'>
              {allVideoURL.map((videoURL, index) => (
                <li key={index} >
                  <button onClick={() => handleVideoSelect(videoURL)} className='vid-item'>
                    Lecture {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </div>) : (<p></p>)
      }


      <div className="video-player">
        {
          !isMobile ? (    <buuton className="vid-btn" onClick={toggleVideoList}>
          <BsChevronDoubleLeft className='list-open-btn
          ' />
        </buuton>):(<p></p>)
        }
    
        {selectedVideo && (
          <ReactPlayer
            url={selectedVideo}
            controls
            width="100%"
            height={playerHeight}
            className="vid-play"
          />
        )}
      </div>
    </div>
  );
};

export default VideoPage;
