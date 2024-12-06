import React from "react";
import "./GalleryDrawer.scss";
import { Scrollbars } from "react-custom-scrollbars-2";
import logo from "../../../assets/images/logo.png";
import { IoCloseSharp } from "react-icons/io5";
import post1 from "../../../assets/images/news/img1.jpg";
import post2 from "../../../assets/images/news/img4.jpg";
import post3 from "../../../assets/images/news/img3.jpg";
import post4 from "../../../assets/images/news/img1.jpg";

const GalleryDrawer = ({ isOpenGallery, toggleGalleryDrawer }) => {
  return (
    <>
      {isOpenGallery && (
        <div className="backDropGAllery" onClick={toggleGalleryDrawer}></div>
      )}

      <div
        className="sgalleryDrawer"
        style={
          isOpenGallery
            ? { transform: "translateX(0)" }
            : { transform: "translateX(-100%)" }
        }
      >
        {" "}
        <Scrollbars
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div className="gallerCloseContainer">
            <IoCloseSharp onClick={toggleGalleryDrawer} />
          </div>
          <div className="gallerLogoConatiner">
            <img src={logo} alt="" className="gallerLogo" />
            <span className="gallerDes">
            "Transforming Ideas into Reality with Excellence"
            </span>
          </div>

          <span className="gallerHeadTittel">Gallery Posts</span>
          <div className="gallerHeadContainer">
            <img src={post1} width={100} alt="" />
            <img src={post2} width={100} alt="" />
            <img src={post3} width={100} alt="" />
            <img src={post4} width={100} alt="" />
          </div>
          <span className="gallerHeadTittel">Working Hours</span>
          <div className="gallerworkingHourConatiner">
            <span className="gallerDayText">Mon - Fri:</span>
            <span className="gallerTimeText"> 10:30 AM - 7:00 PM</span>
          </div>
          <div className="gallerworkingHourConatiner">
            <span className="gallerDayText">Saturday : </span>
            <span className="gallerTimeText"> 10:30 AM - 06:00 PM</span>
          </div>
          <div className="gallerworkingHourConatiner">
            <span className="gallerDayText">Sunday : </span>
            <span className="gallerTimeText"> 10:30 AM - 02:00 PM</span>
          </div>
        </Scrollbars>
      </div>
    </>
  );
};

export default GalleryDrawer;
