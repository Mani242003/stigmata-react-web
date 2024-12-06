import React from "react";
import { Link } from "react-router-dom";
import "./SliderCarosel.scss";
import { FaArrowRightLong } from "react-icons/fa6";

import blueDots from "../../assets/images/blue-dots.png";

const ExampleCarouselImage = ({ img, text, link, text2, text3 }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "680px",
        background: "white",
        marginTop: "0px",
        // paddingTop: "35px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // margin:'3rem'
        }}
      >
        <div className="silder_opacityDiv">
          {/* <img src={ img} /> */}
          <span data-aos="fade-up"> {text}</span>
          <span data-aos="fade-up">{text2}</span>

          <div >
            <div className="silder_customText">
              <span data-aos="fade-up">{text3}</span>
            </div>
            <div className="home_slider_buttonContainer">
              <Link to="/contact" >
              Talk to Experts{" "}
              </Link>
              <FaArrowRightLong />
            </div>
            <img src={blueDots} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExampleCarouselImage;
