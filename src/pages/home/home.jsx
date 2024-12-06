import React, { useLayoutEffect, useRef } from "react";
import "./home.scss";
import Navbar from "../../component/Navigation/navbar/Navbar";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import ControlledCarousel from "../../component/slider/ControlledCarousel";
import ProductSlider from "../../component/ProductSlider/ProductSlider";
import Service from "../../component/services/Service";
import CustomerSlide from "../../component/customerSlide/CustomerSlide";
import Testimonal from "../../component/Testimonal/Testimonal";

import Blogs from "../../component/Blogs/Blogs";
import Footer from "../../component/footer/Footer";
import TechBrains from "../../component/TechBrain/TechBrains";

import AccordionSection from "../../component/DroneTech/AccordionSection";
import CompanySkills from "../../component/CompanySkills/CompanySkills";
import ContactUs from "../../component/ContactUs/ContactUs";
import Navigation from "../../component/Navigation/Navigation";
import Branches from "../../component/Branches/Branches";

const Home = () => {


  return (
    <div
      className="nav_home "
      id="smooth-wrapper"
      style={{ background: "#F5F5F5" }}
    >
      
      <div>
        <Navigation homeMarque="true" />

        <ControlledCarousel />

        <div className="socialMediaContainer">
          <div className="socialLink1">
            <a
              href="https://www.facebook.com/StigmataTechnoSolutions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaFacebookF />
            </a>
          </div>
          <div className="socialLink2">
            <a
              href="https://www.youtube.com/channel/UCWi3Eqvsn3-rsJx6aFB2NSQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
          <div className="socialLink3">
            <a
              href="https://www.linkedin.com/in/jerome-melkisidak-970b635b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <div className="socialLink4">
            <a
              href="mailto:jerome@stigmatatech.com"
              target="_blank"
              rel="noopener noreferrer"
             // Optional class for styling
            >
              <IoMdMail size={24} />
             
            </a>
          </div>
        </div>
        <ProductSlider />
        <Service />
        <CustomerSlide />
        <Testimonal />
        <AccordionSection />

        <Branches />
        {/* <TechBrains /> */}
        {/* <Blogs /> */}
        {/* <CompanySkills /> */}
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
