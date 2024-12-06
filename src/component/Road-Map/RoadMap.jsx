import React, { useEffect, useRef } from "react";
import "./RoadMap.scss";

import { BsFillCalendarFill } from "react-icons/bs";

const RoadMap = () => {

  return (
    <section className="r-wraper " id="roadMap">
   

      <div className="r-header-titel" style={{ textAlign: "center" }}>
        <span className="primaryText r-header">Our Goal & Roadmap</span>
      </div>

      <div className="r-timeLine-container">
        <div className="r-container r-left-container">
          <div className="textBoxContainer" style={{ background: "#E4F6EF" }}>
            
            <div className="textBoxContainer-right">
          
              <p className="r-decSmall">
              At Stigmata Techno Solutions, our goal is to drive innovation and deliver high-quality software services to our customers. We strive to be at the forefront of technology, creating solutions that not only meet but exceed our clients' expectations.

              </p>
              <span className="left-container-arrow left-container-arrow-modified-1"></span>
            </div>
          </div>
        </div>

        <div className="r-container r-right-container">

          <div className="textBoxContainer" style={{ background: "#F6FDD6" }}>
            <div className="textBoxContainer-right">
           
            
              <p className="r-decSmall">
              Our focus extends beyond serving customers to contributing value and innovative solutions to society and humanity. We aim to develop products that benefit the community and establish ourselves as a leading competitor in our industry.
              </p>
              <span className="right-container-arrow right-container-arrow-modified-2"></span>
            </div>
          

          
          </div>
        </div>

        <div className="r-container r-left-container">


          <div className="textBoxContainer" style={{ background: "#FEF6D6" }}>
           
            <div className="textBoxContainer-right">

              <p className="r-decSmall">
              As part of our roadmap, we seek to expand our client base to 100+ trusted partners, fostering strong relationships built on reliability and excellence. By scaling our operations and increasing our impact, we aim to become a prominent player in our vertical.
              </p>
              <span className="left-container-arrow left-container-arrow-modified-3"></span>
            </div>
          </div>
        </div>

        <div className="r-container  r-right-container">
   

          <div className="textBoxContainer" style={{ background: "#E4F6EF" }}>
            <div className="textBoxContainer-right">
             
            
              <p className="r-decSmall">
              Stigmata Techno Solutions is committed to continuous growth and excellence in all that we do, always with an eye towards shaping a better future through technology.
              </p>
              <span className="right-container-arrow right-container-arrow-modified-2"></span>

            </div>
           
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default RoadMap;
