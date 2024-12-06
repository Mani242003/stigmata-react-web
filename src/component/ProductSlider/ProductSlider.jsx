import React, { useState, useRef } from "react";
import "./ProductSlider.scss";
import Slider from "react-slick";

import blueDot from "../../assets/images/icons/blueBullet.png";
import orangeDot from "../../assets/images/icons/orangeBullet.png";

import { FaQuoteLeft } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

import Video from "./Video/Video";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const ProductSlider = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000, // Adjusted for smoother slide transitions
    // autoplay: true,
    autoplaySpeed: 4000, // Adjusted for smoother autoplay transitions
    slidesToShow: 1,
    slidesToScroll: 1,
    // beforeChange: (current, next) => setCurrentSlide(next),
    // pauseOnHover: true, // Pause autoplay on hover
  };
  return (
    <section className="P_S-wrapper">
      <div className="P_S-container">
        <div className="P_S-headerContainer">
          <div className="cloudMigrateMainSection2">
            <div className="cloudMigrateSection2Header">
              <span>Stigmata Techno Solutions</span>
            </div>
            <>
              <div className="cloudMigrateSection2innerConatiner">
                <div className="cloudMigrateSection2innerLeft">
                  <div className="cloudMigrateSection1LeftBottomContainer">
                    <img src={orangeDot} alt="" />

                    <span className="feaPage-col-1-text-4">
                      <span>DevOps :</span>
                      <br />
                      Our agile DevOps services empower companies to automate
                      their entire development and operations processes
                      intelligently. This approach ensures the creation of
                      high-quality, secure code through agile development,
                      Continuous Integration, Continuous Security, Continuous
                      Testing, and Continuous Delivery.
                    </span>
                  </div>
                </div>
                <div className="cloudMigrateSection2innerRight">
                  <div className="cloudMigrateSection1LeftBottomContainer">
                    <img src={blueDot} alt="" />

                    <span className="feaPage-col-1-text-4">
                      <span> Web Application Development :</span>
                      <br />
                      We are experts in developing web applications with
                      state-of-the-art technology, and we have a great deal of
                      experience with Java frameworks. Our methodology
                      guarantees dependable, expandable, and efficient web
                      solutions customized to fulfill your business
                      requirements.
                    </span>
                  </div>
                </div>
              </div>
              <div className="cloudMigrateSection2innerConatiner">
                <div className="cloudMigrateSection2innerLeft">
                  <div className="cloudMigrateSection1LeftBottomContainer">
                    <img src={orangeDot} alt="" />

                    <span className="feaPage-col-1-text-4">
                      <span>Cloud Migration :</span>
                      <br />
                      Planning to move your workloads to the cloud but unsure
                      where to start? Stigmata Techno Solutions specializes in
                      migrating your servers, databases, applications, and
                      emails to cloud, dedicated, and virtual environments,
                      making the transition seamless and secure.
                    </span>
                  </div>
                </div>
                <div className="cloudMigrateSection2innerRight">
                  <div className="cloudMigrateSection1LeftBottomContainer">
                    <img src={blueDot} alt="" />

                    <span className="feaPage-col-1-text-4">
                      <span>Mobile App Development :</span>
                      <br />
                      With extensive expertise in Java frameworks, we excel in
                      using React Native for mobile app development. This hybrid
                      approach ensures cross-platform compatibility, providing
                      cost-effective and timely solutions. The robust React
                      Native community support further enhances development
                      efficiency.
                    </span>
                  </div>
                </div>
              </div>
              <div className="cloudMigrateSection2innerConatiner">
                <div className="cloudMigrateSection2innerLeft">
                  <div className="cloudMigrateSection1LeftBottomContainer">
                    <img src={orangeDot} alt="" />

                    <span className="feaPage-col-1-text-4">
                      <span>Plugin Development :</span>
                      <br />
                      We develop customized plugins tailored to your business
                      applications. Our innovative development approach and
                      extensive experience with ATLASSIAN tools (Confluence,
                      JIRA, BitBucket, DevOps, SonarQube, Jenkins, and
                      governance & compliance) ensure that your plugins meet
                      your specific needs. If you got any customised plugin
                      requirement, Feel free to reach us. We would be happy to
                      develop.
                    </span>
                  </div>
                </div>
                <div className="cloudMigrateSection2innerRight">
                  <div className="cloudMigrateSection1LeftBottomContainer">
                    <img src={blueDot} alt="" />

                    <span className="feaPage-col-1-text-4">
                      <span>Software Application Development :</span>
                      <br />
                      At Stigmata Techno Solutions, we specialize in the full
                      lifecycle of software application development, from
                      analysis and design to deployment and security testing,
                      addressing and automating client pain points. . We create
                      custom software solutions to tackle everyday business
                      challenges. efficiency.
                    </span>
                  </div>
                </div>
              </div>
            </>
            <div className="cloudMigrateSection2BottomContainer">
              <span className="cloudMigrateSection2BottomText">
                Stigmata Techno Solutions Is A 9+ Year Aged Firm Rendering
                Software, IT Development Services To Global Customers. We Are
                Specialized In Developing Applications, Digital Transformation
                For Specific Industries Like{" "}
                <span>
                  Heavy Construction Companies, Power Transmission &
                  Distribution, Financial Institutions (Governance & Compliance
                  Handling PII Data) And Securing Organisations Cloud
                  Environment (ClouSec : CSPM Tool – Cloud Security)
                </span>
                . Our Key Focus Is To Provide World-Class Quality Service To Our
                Customers With Utmost Focus On Their Needs And To Ensure That
                Technology Supports Their Business Growth. We Would Be Happy To
                Get Associated With Your Esteemed Organization On Your Digital
                Transformation / Automation Reducing Manual Efforts And Cost.
              </span>
              <div className="cloudMigrateSection2BottomButton">
                <Link to="/contact">Get Started</Link>
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        </div>
        <div className="productBackground">
          <div className="video_header">
            <span data-aos="fade-up">
              Happy customers. Energized employees. <br /> That’s impact.
            </span>
          </div>
          <div className="ProductNextBackButtonTopContainer">
            <button className="button" onClick={previous}>
              <FaArrowLeft />
            </button>
            <button className="button" onClick={next}>
              <FaArrowRight />
            </button>
          </div>

          <div>
            <Slider
              {...settings}
              ref={(slider) => {
                sliderRef = slider;
              }}
            >
              <div>
                <Video
                  key={1}
                  num="01"
                  name="ClouSec"
                  des="ClouSec is the 1st AI based CSPM (Cloud Security Posture Management) tool with CCOE (Cloud Center of Excellence) concepts to provide significant cloud infrastructure insights through Security misconfigurations, Vulnerabilities, Threats, Comprehensive account view, Configuration issues during account setup, Cost management, Asset management, Periodic audit of user mapping to cloud accounts (remove / retain) with audit log and Cost management features."
                  title="Modernize Cloud Security. Outsmart Attackers."
                  //                   des="ClouSec is the 1st AI based CSPM (Cloud Security Posture Management) tool with CCOE (Cloud Center of Excellence) concepts to provide significant cloud infrastructure insights through Security misconfigurations, Vulnerabilities, Threats, Comprehensive account view, Configuration issues, Asset management, Periodic audit of user mapping to cloud accounts (remove / retain) and Cost management features.
                  // centralised, integrated approach enabling
                  // security misconfigurations, cost
                  // management, comprehensive account
                  // view, cloud asset management with
                  // extensive logs"

                  link="-vLYTijz370"
                  url="https://clousec.io/"
                />
              </div>
              <div>
                <Video
                  key={2}
                  num="02"
                  name="Happiedineer"
                  title="Modernize your Restaurants with Automation & Data driven recommendation."
                  des="Happiedinner is a Light weight Serverless architecture framework Providing
                  digitalized Wow experience to end customers through, Digital menu's with ordering, Data Driven Recommendation, Digitalized Kitchen's, Last minute deals, Digital Payments."
                  link="jEwftk8SNuA"
                  url="https://clousec.io/"
                />
              </div>
              <div>
                <Video
                  key={3}
                  num="03"
                  name="PII Protector"
                  title="SAFEguard Personally Identifiable Information (PII) & be Compliant."
                  des="In this data driven age, ensuring security and safeguarding individual's data have become Paramount concerns.  We handle PII information through, Define, Detect, User Access , Mask, Send email Alert's, Required logs for Auditing, Reports."
                  link="-vLYTijz370"
                  url="https://clousec.io/"
                />
              </div>
            </Slider>
          </div>
          <div className="ProductNextBackButtonBottomContainer">
            <button className="button" onClick={previous}>
              <FaArrowLeft />
            </button>
            <button className="button" onClick={next}>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
