import React from 'react'
import "./AIPage.scss"
import Navigation from "../../../component/Navigation/Navigation";
import Footer from "../../../component/footer/Footer";
import ContactForm from "../../../component/ContactForm/ContactForm";
import HoverCard from "../../../component/CustomHoverCard/HoverCard";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import AccordionSection from '../../../component/DroneTech/AccordionSection';
import { FaChevronRight } from "react-icons/fa";
import { BsFillRecord2Fill } from "react-icons/bs";
import blueDot from "../../../assets/images/icons/blueBullet.png";
import orangeDot from "../../../assets/images/icons/orangeBullet.png";
const AIPage = () => {
  return (
    <section className="AI_wrapper">
        <Navigation />
        <div className="AI_container">
        <div className="AIMainHeader">
          <span className="AIPageHeaderText1">
          Artificial Intelligence

          </span>
          

          <span className="AIPageHeaderText2">
          Leverage cutting-edge AI technologies to optimize processes, enhance decision-making, and deliver personalized customer experiences. Our AI solutions, including machine learning, natural language processing, and predictive analytics, help unlock the full potential of your business.
          </span>
          <div className="AIPageButtonContainer">
          <Link   to="/contact">Talk to Experts </Link>
          <FaChevronRight />

          </div>
        </div>
      
        <HoverCard />
        <AccordionSection />

        <div className="AIMainContent">
        <div className="cloudMigrateMainSection2">
            <div className="cloudMigrateSection2Header">
              <span>Why Choose Our AI Services?</span>
            </div>
            <>
              <div className="cloudMigrateSection2innerConatiner">
                <div className="cloudMigrateSection2innerLeft">
                  <div className="cloudMigrateSection1LeftBottomContainer">
                    <img src={orangeDot} alt="" />

                    <span className="feaPage-col-1-text-4">
                      <span>                       Custom AI Solutions
                      :</span><br/>
                      At Stigmata Techno Solutions, we understand that every business is unique. Our team works closely with you to develop custom AI solutions tailored to your specific needs and challenges. From conceptualization to deployment, we ensure that our AI solutions deliver tangible results.
                    </span>
                  </div>
                </div>
                <div className="cloudMigrateSection2innerRight">
                  <div className="cloudMigrateSection1LeftBottomContainer">
                    <img src={blueDot} alt="" />

                    <span className="feaPage-col-1-text-4">
                      <span>                       Computer Vision
                      :</span>
                      <br />
                      Our computer vision services leverage image and video analysis to provide actionable insights. Whether it's facial recognition, object detection, or image classification, we develop solutions that enhance security, quality control, and user experiences.
                    </span>
                  </div>
                </div>
              </div>
              <div className="cloudMigrateSection2innerConatiner">
                <div className="cloudMigrateSection2innerLeft">
                  <div className="cloudMigrateSection1LeftBottomContainer">
                    <img src={orangeDot} alt="" />

                    <span className="feaPage-col-1-text-4">
                      <span>                       Machine Learning Solutions
                      :</span><br/>
                      Our machine learning experts develop advanced algorithms that enable your systems to learn from data, identify patterns, and make intelligent decisions. From predictive analytics to recommendation engines, we create solutions that enhance decision-making and operational efficiency.
                    </span>
                  </div>
                </div>
                <div className="cloudMigrateSection2innerRight">
                  <div className="cloudMigrateSection1LeftBottomContainer">
                    <img src={blueDot} alt="" />

                    <span className="feaPage-col-1-text-4">
                      <span>Security and Compliance :</span><br/>
                      Security is a top priority in our AI integration process. We implement robust security measures and ensure compliance with industry standards, protecting your data throughout the transition. Our AI systems are designed with advanced encryption, continuous monitoring, and multi-layered defenses to safeguard against potential threats.
                    </span>
                  </div>
                </div>
              </div>
        
            </>
            <div className="cloudMigrateSection2BottomContainer">
              <span className="cloudMigrateSection2BottomText">
              Unlock the potential of artificial intelligence with Stigmata Techno Solutions. Our AI services are designed to empower your business with intelligent solutions that drive success. Contact us today to learn more about how we can help you leverage AI to achieve your business goals.
              </span>
              <div className="cloudMigrateSection2BottomButton">
                <Link to="/contact">Discuss With Our Experts</Link>
                <FaChevronRight />
              </div>
            </div>
          </div>
        </div>

        </div>
        <ContactForm />
        <Footer />
    
      </section>
  )
}

export default AIPage