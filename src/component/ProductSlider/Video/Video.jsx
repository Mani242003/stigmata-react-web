import React from "react";
import ReactPlayer from "react-player";
import "./Video.scss";

const Video = ({link,name}) => {
  return (
    <div className="video-feature">
      <div className="video-wrapper">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${link}`}
          controls
          width="100%"
          height="100%"
          className="react-player"
        />
      </div>
      <div className="content-wrapper wrapperleft">
        <h2>{name}</h2>
        <p>
          Dive into a powerful platform built to scale with your needs. Watch this quick demo
          to learn how we simplify complex workflows and boost your productivity.
        </p>
        <p>
          Dive into a powerful platform built to scale with your needs. Watch this quick demo
          to learn how we simplify complex workflows and boost your productivity.
        </p>
        <button className="cta-btn">Start Free Trial</button>
      </div>
    </div>
  );
};

export default Video;
