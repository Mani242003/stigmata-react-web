import React from "react";
import "./MobileDevPage.scss";
import Navigation from "../../../component/Navigation/Navigation";
import Footer from "../../../component/footer/Footer";
import ContactForm from "../../../component/ContactForm/ContactForm";
import HoverCard from "../../../component/CustomHoverCard/HoverCard";
import Solution from "../../../component/Solution/Solution";
import { devOpsFaq } from "../../../constant";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

import AccordionSection from "../../../component/Accordion/AccordionSection";
import MobileSample from "../../../component/MobileSample/MobileSample";
import TechBrains from "../../../component/TechBrain/TechBrains";

const MobileDevPage = () => {
  return (
    <section className="MobileDevPageWrapper">
      <Navigation homeMarque="false" />
      <div className="mobileDevPageContainer">
        <div className="mobileDevPageMainHeader">
          <span className="mobileDevPageHeaderText1">
          Mobile Development with<br/> React Native
          </span>
          <span className="mobileDevPageHeaderText2">
          At Stigmata Techno Solutions, we harness the power of React Native to create high-performance, cross-platform mobile applications that provide seamless user experiences.
          </span>
          <div className="mobileDevPageButtonContainer">
            <Link to="/contact">Talk to Experts </Link>
            <FaChevronRight />
          </div>
        </div>
        <HoverCard />

        <Solution />
        <div className="MobilePageSample">
          <div className="MobilePageSampleheader">
            <span>Our Sample Work</span>
            <div className="mobilePageDivider"></div>
          </div>

          <MobileSample />
        </div>
        {/* <TechBrains /> */}
        {/* <div className="mobilePageFqa">
          <span className="mobilePageFqaHeaderText">
            Application Developement Service FAQs
          </span>
          <AccordionSection  array={devOpsFaq}/>
       
        </div> */}
      </div>
      

      <ContactForm />

      <Footer />
    </section>
  );
};

export default MobileDevPage;
