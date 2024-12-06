import React, { useRef } from "react";
import "./Video.scss";
// import blueDots from "../../assets/images/blue-dots.png"
// import VideoPlayer from 'react-video-js-player';
// import video from "../../video/video.mp4";
// import { Player,BigPlayButton  } from 'video-react';
// import Thubmail from "../../Images/thubmail.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
// import { Player } from 'video-react';
import { FaAngleRight } from "react-icons/fa6";
import YouTube from "react-youtube";
const Video = ({ link, name, num, title, des, url }) => {

  function getPlayerSize() {
    const screenWidth = window.innerWidth;
  
    let height, width;
    if (screenWidth < 480) { // Example condition for small screens
      height = '100%';
      width = '100%';
    } 
    else if (screenWidth < 885) { // Example condition for small screens
      height = '100%';
      width = '120%';
    } 
    else if (screenWidth < 1290) { // Example condition for medium screens
      height = '100%';
      width = '170%';
    }
     else if (screenWidth > 1813) { // Example condition for medium screens
      height = '100%';
      width = '250%';
    } else { // Default condition for large screens
      
    }
  
    return { height, width };
  }
  const playerSize = getPlayerSize();

  // Define the options object with the calculated player size
  const opts = {
    height: playerSize.height,
    width: playerSize.width,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  }; 
  return (
    <section className="video_wrapper">
      <div className="video_container">
        <div className="video_left">
          <YouTube videoId={link} opts={opts} />
        </div>
        <div className="video_right" data-aos="fade-up">
          <div className="P_S-btnTitelcontaner">
            <span className="P_S-btnTitelNumber">{num}</span>
            <span className="P_S-btnTitelText">{name}</span>
          </div>
          <span className="P_S-left-text1">{title}</span>
          <span className="P_S-left-text2"> {des}</span>
          <div className="P_S-linkContainer">
            <Link to={url}>Know more </Link>

            <FaAngleRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
