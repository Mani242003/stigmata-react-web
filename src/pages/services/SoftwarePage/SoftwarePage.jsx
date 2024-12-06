import React from "react";
import "./SoftwarePage.scss";
import Navigation from "../../../component/Navigation/Navigation";
import ContactForm from "../../../component/ContactForm/ContactForm";
import Footer from "../../../component/footer/Footer";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import s_vendor1 from "../../../assets/sAmazonVendor.png";
import s_vendor2 from "../../../assets/s_vendor2.png";
import s_vendor3 from "../../../assets/images/trustCustomer/LandT1.jpg";
import s_vendor4 from "../../../assets/images/trustCustomer/landT2.jpg";
// import blueDot from "../../../assets/images/icons/blueBullet.png";
// import orangeDot from "../../../assets/images/icons/orangeBullet.png";
import { FaChevronRight } from "react-icons/fa";
import { BsFillRecord2Fill } from "react-icons/bs";
import acc1 from "../../../assets/acc1.png";
import acc2 from "../../../assets/acc2.png";
import eCommerWeb1 from "../../../assets/images/eCommersBg.png";
import javaWeb from "../../../assets/images/javaWeb.png"
import phpWeb from "../../../assets/images/ph3F.png"


import webClients from "../../../assets/images/webClients.png";


import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Solution from "../../../component/softwareSample/Solution";
const SoftwarePage = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const getImage = () => {
    // if (expanded) {
    switch (expanded) {
      case "panel1":
        return <img src={eCommerWeb1} alt="" />;
      case "panel2":
        return <img src={javaWeb} alt="" />;
      case "panel3":
        return <img src={phpWeb} alt="" />;

      default:
        return <img src={webClients} alt="" width={400} />;
    }

    // return ;
    // }
  };
  return (
    <section className="softwarePageWrapper">
      <Navigation />
      <div className="softwarePageContainer">
        <div className="softwarePageMainHeader">
          <span className="softwarePageHeaderText1">
          Software Application 
          <br/> Development
          </span>

          <span className="softwarePageText2">
          At Stigmata Techno Solutions, we offer comprehensive software application development services designed to meet the unique needs of your business.
          </span>
          <div className="softwarePageButtonContainer">
            <Link to="/contact">Talk to Experts </Link>
            <FaArrowRightLong />
          </div>
        </div>
        <div className="s_VendorContainer">
          <span>Software Development Vendor of</span>
          <div className="s_vendorDivider"></div>
          <div className="s_VendorImgContainer">
            <img src={s_vendor4} alt="" />

            <img src={s_vendor1} alt="" />
            <img src={s_vendor3} alt="" />

            <img src={s_vendor2} alt="" />
          </div>
        </div>
        <div className="softwarePageMainSection">
          <div className="cloudMigrateMainSection1">
            <div className="cloudMigrateMainSection1Left">
              <span className="cloudMigrateSection1LeftTitel">
                Maximize the Value of Software with Expert Services
              </span>
              <div className="cloudMigrateSection1LeftBottomContainer">
                <BsFillRecord2Fill color="#5E6FEC" size={26} />

                <span className="feaPage-col-1-text-4">
                  Boost efficiency by 60%
                </span>
              </div>
              <div className="cloudMigrateSection1LeftBottomContainer">
                <BsFillRecord2Fill color="#5E6FEC" size={26} />

                <span className="feaPage-col-1-text-4">
                  Automate tasks by 40%
                </span>
              </div>

              <div className="cloudMigrateSection1LeftBottomContainer">
                <BsFillRecord2Fill color="#5E6FEC" size={26} />

                <span className="feaPage-col-1-text-4">
                  10x faster time to market
                </span>
              </div>
            </div>
            <div className="cloudMigrateMainSection1Right">
              <span>
              Partner with Stigmata Techno Solutions for your software application development needs. 
                <br />
                <br />
                At Stigmata Techno Solutions, we specialize in the full lifecycle of software application development, from analysis and design to deployment and security testing, addressing and automating client pain points. We create custom software solutions to tackle everyday business challenges. With years of experience across diverse industries, we deliver high-quality work within budget using AGILE methodology, consistently delighting our clients with our progress and results.
              </span>
            </div>
          </div>
        
         
        </div>
        <Solution />
      </div>
      <ContactForm />
      <Footer />
    </section>
  );
};

export default SoftwarePage;
