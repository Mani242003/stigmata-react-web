import React from "react";
import "./ContactUs.scss";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import ReactPlayer from "react-player/youtube";
import YouTube from "react-youtube";

const ContactUs = () => {
  function getPlayerSize() {
    const screenWidth = window.innerWidth;

    let height, width;
    if (screenWidth < 480) {
      // Example condition for small screens
      height = "200px";
      width = "100%";
    } else if (screenWidth < 885) {
      // Example condition for small screens
      height = "380px";
      width = "600px";
    } else if (screenWidth < 1290) {
      // Example condition for medium screens
      height = "380px";
      width = "600px";
    } else if (screenWidth > 1813) {
      // Example condition for medium screens
      height = "380px";
      width = "600px";
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
    <section className="contactUsWrapper">
      <div className="contactUsContainer">
        <div className="contactUsLeftContainer">
          <YouTube videoId="yJSWMYG8j-A" opts={opts} />
        </div>
        <div className="contactUsRightContainer">
          <span className="contactUsRightSmallText">Reach Out Us</span>
          <span className="contactUsRightBigText">
            We are excited to connect with you!
          </span>
          <span className="contactUsRightDes">
            Have questions or need assistance? Our team is here to help! Contact
            us to learn more about our services and how we can support your
            needs.
          </span>
          <div className="contactUsRightCallContainer">
            <div className="contactUsLeftIconConatiner">
              <FiPhoneCall />
            </div>
            <div className="contactUsRightTextConatiner">
              <span className="contactUsText1">
                24 HOURS SERVICE AVAILABLE{" "}
              </span>
              <span className="contactUsText2">Call Us: +91 9790845787</span>
            </div>
          </div>
          <div className="contactUsButtonContainer">
            <Link to="/about-us">ABOUT US</Link>
            <FaAngleRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
