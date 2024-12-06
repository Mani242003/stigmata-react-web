import React, { useRef, useEffect } from "react";
import "./Solution.scss";
// import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import ios from "../../assets/images/icons/ios-1.svg";
import android from "../../assets/images/icons/android-1.svg";

import hybrid from "../../assets/images/icons/hybrid-app-1.svg";
import enterPrise from "../../assets/images/icons/enterprise-mobile-app-1.svg";
import devopsLogo from "../../assets/images/64615.png";
import blueDot from "../../assets/images/icons/blueBullet.png";
import orangeDot from "../../assets/images/icons/orangeBullet.png";
import { FaChevronRight } from "react-icons/fa";

const Solution = () => {
  return (
    <section className="solution-wrapper" id="solution">
      <div className="solution-container">
      
        <div className="devopsOverviewSection1">
          <div className="devopsOverviewSection1LeftContainer">
            <img src={ios} alt="" width={200} />
            {/* <ReactPlayer
                //   // width='200%'
                //   height="250px"
                width="560px"
                height="360px"
                url="https://www.youtube.com/watch?v=bY1OCCrNhXM"
                //  playing={true} // Enable autoplay
                // muted={true}
                // style={playerStyle}
              /> */}
          </div>
          <div className="devopsOverviewSection1RightContainer">
            <span className="devopsOverviewSection1BigText">
              Transform Your Mobile Development with our React Native
            </span>
            <span className="devopsOverviewSection1Des">
              At Stigmata Techno Solutions, we harness the power of React Native
              to create high-performance, cross-platform mobile applications
              that provide seamless user experiences. Our expertise in React
              Native allows us to deliver cost-effective and efficient mobile
              solutions that meet the diverse needs of your business.
            </span>
            <div className="cloudMigrateSection2BottomButton">
              <Link to="/contact">Discuss With Our Experts</Link>
              <FaChevronRight />
            </div>
          </div>
        </div>
        <div className="devopsOverviewSection2">
          <div className="cloudMigrateSection2Header">
            <span>Why Choose React Native for Mobile Development?</span>
          </div>
          <>
            <div className="cloudMigrateSection2innerConatiner">
              <div className="cloudMigrateSection2innerLeft">
                <div className="cloudMigrateSection1LeftBottomContainer">
                  <img src={orangeDot} alt="" />

                  <span className="feaPage-col-1-text-4">
                    <span> Cross-Platform Compatibility : </span> <br />
                    React Native enables the development of applications that
                    run smoothly on both iOS and Android platforms using a
                    single codebase. This significantly reduces development time
                    and costs while ensuring a consistent user experience across
                    devices.
                  </span>
                </div>
              </div>
              <div className="cloudMigrateSection2innerRight">
                <div className="cloudMigrateSection1LeftBottomContainer">
                  <img src={blueDot} alt="" />

                  <span className="feaPage-col-1-text-4">
                    <span> Fast Development Cycles :</span> <br />
                    React Native’s hot-reloading feature allows developers to
                    see the changes they make in real-time, speeding up the
                    development process. This rapid iteration cycle means faster
                    time-to-market for your mobile applications.
                  </span>
                </div>
              </div>
            </div>
            <div className="cloudMigrateSection2innerConatiner">
              <div className="cloudMigrateSection2innerLeft">
                <div className="cloudMigrateSection1LeftBottomContainer">
                  <img src={orangeDot} alt="" />

                  <span className="feaPage-col-1-text-4">
                    <span> Performance :</span>
                    <br />
                    Built on top of the robust React framework, React Native
                    apps are known for their high performance and
                    responsiveness. The framework leverages native components,
                    ensuring your apps run as smoothly as those built with
                    native development languages.
                  </span>
                </div>
              </div>
              <div className="cloudMigrateSection2innerRight">
                <div className="cloudMigrateSection1LeftBottomContainer">
                  <img src={blueDot} alt="" />

                  <span className="feaPage-col-1-text-4">
                    <span> Strong Community Support :</span>
                    <br />
                    React Native boasts a large and active developer community.
                    This means continuous improvements, extensive libraries, and
                    a wealth of shared knowledge, all of which contribute to the
                    efficiency and innovation of your mobile projects.
                  </span>
                </div>
              </div>
            </div>
          </>
          <div className="cloudMigrateSection2BottomContainer">
            {/* <span className="cloudMigrateSection2BottomText">
                Stigmata Techno Solution's utilize cloud hyperscalers to create
                collaborative, interactive, and transparent business
                architecture ready to tackle technology challenges.
              </span> */}
            {/* <div className="cloudMigrateSection2BottomButton">
                <Link href="">Discuss With Our Experts</Link>
                <FaChevronRight />
              </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
