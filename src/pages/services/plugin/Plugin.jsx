import React from "react";
import "./Plugin.scss";
import Navigation from "../../../component/Navigation/Navigation";
import Footer from "../../../component/footer/Footer";
import ContactForm from "../../../component/ContactForm/ContactForm";
import HoverCard from "../../../component/CustomHoverCard/HoverCard";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import PluginSample from "../../../component/PluginSample/PluginSample";
import Count from "../../../component/Count/Count";
import CustomerSlide from "../../../component/customerSlide/CustomerSlide";
import TechBrains from "../../../component/TechBrain/TechBrains";
import { devOpsFaq } from "../../../constant";
import AccordionSection from "../../../component/Accordion/AccordionSection";
import { FaChevronRight } from "react-icons/fa";
const Plugin = () => {
  return (
    <section className="pluginWrapper">
      <Navigation />
      <div className="pluginContainer">
        <div className="pluginMainHeader">
          <span className="pluginHeaderText1">
          Plugin Development <br/>Experts
          </span>

          <span className="pluginHeaderText2">
          At Stigmata Techno Solutions, we specialize in developing custom plugins tailored to enhance the functionality and performance of your business applications. Our innovative development approach and extensive experience with <span>ATLASSIAN tools (Confluence, JIRA, BitBucket, DevOps, SonarQube, Jenkins, and governance & compliance)</span> ensure that your plugins meet your specific needs.
          </span>
          <div className="pluginButtonContainer">
            <Link to="/contact">Talk to Experts</Link>
            <FaChevronRight />
          </div>
        </div>
        <HoverCard />
        <div className="PluginPageSample">
          <div className="PluginPageSampleheader">
            <span>Our Works</span>
            <div className="PluginPageSampleDivider"></div>
          </div>
          

          <PluginSample />
        </div>
        {/* <TechBrains />
        <CustomerSlide /> */}
        {/* <div className="pluginPageFqa">
        <span className="mobilePageFqaHeaderText">
          Cloud DevOps Service FAQs
        </span>
        <AccordionSection  array={devOpsFaq}/>
        
      </div> */}

        
      </div>
      {/* <ContactForm /> */}
      <Footer />
    </section>
  );
};

export default Plugin;
