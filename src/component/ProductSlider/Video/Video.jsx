import React, { useState } from 'react';
import './Video.scss';
import { FaPlayCircle, FaRegListAlt, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Video = ({ title, des, list, link, url,des1 }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="video-feature">
      <div className="video-wrapper">
        <iframe
          width="650px"
          height="450px"
          src={`https://www.youtube.com/embed/${link}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <div className="content-wrapper">
        <h2><FaPlayCircle className="icon" /> {title}</h2>
        <p>{des}</p>

        {
          des1?  <><br/> <p>{des1}</p> </> : <></>
        }

        <div className="feature-list accordion">
        {list && list.length > 0 ? (
  list.map((item, index) => (
    <div
      key={index}
      className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
    >
      <div className="accordion-header" onClick={() => toggleAccordion(index)}>
        <h3><FaRegListAlt className="icon" /> {item.title}</h3>
        <span className="accordion-icon">
          {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
      {activeIndex === index && (
        <div className="accordion-content">
          <p>{item.description}</p>
        </div>
      )}
    </div>
  ))
) : null}

        </div>

        <a href={url} className="cta-btn">
          <span>Learn More</span> <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
};

export default Video;
