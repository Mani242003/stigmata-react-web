import React, { useState } from "react";
import "./AccordionSection.scss";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { FaAngleRight } from "react-icons/fa6";
import YouTube from "react-youtube";

// import client2 from "../../Images/features/client2main.png";
// import faqsmall from "../../assets/images/faqSmall.jpg";
import faqBig from "../../assets/images/Vectorqa.png";

import { TbLicense } from "react-icons/tb";
import { MdOutlineContactSupport } from "react-icons/md";
import { BsHeadset } from "react-icons/bs";
import { BiImages } from "react-icons/bi";

const AccordionSection = () => {
  function getPlayerSize() {
    const screenWidth = window.innerWidth;

    let height, width;
    if (screenWidth < 480) {
      // Example condition for small screens
      height = "200px";
      width = "100%";
    } else if (screenWidth < 885) {
      // Example condition for small screens
      height = "280px";
      width = "100%";
    } else if (screenWidth < 1290) {
      // Example condition for medium screens
      height = "100%";
      width = "170%";
    } else if (screenWidth > 1813) {
      // Example condition for medium screens
      height = "100%";
      width = "250%";
    } else {
      // Default condition for large screens
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
    <section className="accordion_wrapper" id="Q&A">
      <div className="accordion_container">
        <div className="accordionBg1"></div>
        <div className="accordionBg2"></div>
        <div className="accordionBg3"></div>
        <div className="accordion_left_img1">
          {/* <img src={faqBig} alt="" /> */}

          <ReactPlayer
            width="600px"
            height="400px"
            url="https://youtu.be/zeOgk6KQAiY?si=aJAjxLV7UFo45hfy"
            //  playing={true} // Enable autoplay

            muted={true}
          />
        </div>

        <div className="accordion_left">
          <div
            className="accordion_left_imgs"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2500"
          ></div>
        </div>
        <div className="accordion_right">
          <div className="accordionRightHeader">
            <span className="accordion_left_text2">
              Drone Video Analysis for Construction Progress
            </span>
            <span className="accordion_left_text1">
              Our web portal enables comprehensive drone video analysis to
              assess construction progress grid by grid based on{" "}
              <span>
                Video analytics, Image processing and Artificial Intelligence
                techniques
              </span>
              <br />
              <br />
              Experience seamless and accurate construction monitoring with our
              cutting-edge drone video analysis tool.
            </span>
            <div className="P_S-linkContainer">
              <Link to="https://youtu.be/zeOgk6KQAiY?si=nFicPDO--f_GTOty">
                Know more{" "}
              </Link>

              <FaAngleRight />

              {/* <img src={blueDots} alt=""  /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="ResponsiveAccordion_container">
        <div className="ResponsiveDroneTechText">
          <span> Drone Video Analysis for Construction Progress</span>
        </div>
        <div className="ResponsiveDroneTechVideo">
          <YouTube
            videoId="zeOgk6KQAiY"
            opts={opts}
          />
        </div>
        <div className="ResponsiveDroneTechDes">
        <span className="accordion_left_text1">
              Our web portal enables comprehensive drone video analysis to
              assess construction progress grid by grid based on{" "}
              <span>
                Video analytics, Image processing and Artificial Intelligence
                techniques
              </span>
              <br />
              <br />
              Experience seamless and accurate construction monitoring with our
              cutting-edge drone video analysis tool.
            </span>
        </div>
        <div className="P_S-linkContainer">
              <Link to="/contact">
                Know more{" "}
              </Link>

              <FaAngleRight />

              {/* <img src={blueDots} alt=""  /> */}
            </div>
      </div>
    </section>
  );
};

export default AccordionSection;
