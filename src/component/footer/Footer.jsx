import React from "react";
import "./Footer.scss";
import logo from "../../assets/images/logo.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import ytLogo from "../../assets/images/icons/youtube.png";
import fbLogo from "../../assets/images/icons/facebook.png";
import instaLog from "../../assets/images/icons/instagram.png";
import xLogo from "../../assets/images/icons/twitter-x.png";
import linkInLogo from "../../assets/images/icons/linkedin.png";
// const handleScrollToTop = () => {
//   window.scrollTo({
//     top: 0,
//     // behavior: 'smooth',
//   });
// }
const Footer = () => {
  return (
    <section className="footer_wrapper">
      <div className="footer_container">
        <div className="footerSection1">
          <span className="F_section1Titel">"Driven by Innovation, United by Expertise"</span>
          <span className="F_section1SubTitel">Let's get you started.</span>
          {/* <div className="F_section1ButtonContainer">
            <Link to="/contact">SIGN UP NOW</Link>
            <MdKeyboardArrowRight />
          </div> */}
        </div>
        <div className="footerSection2">
          <div className="F_subSection2.1 F_subSection2">
            <span className="F_subSection2Titel">Our Services</span>
            <Link to="/serverless-computing" >Serverless Computing</Link>
            <Link to="/dev-Ops">DevOps</Link>
            <Link to="/mobile-app-development">Mobile App Development</Link>
            <Link to="/plugin-development">Plugin Development</Link>
            <Link to="/software-development">Software Application Development</Link>
            <Link to="/artificial-intelligence">Artificial Intelligence</Link>
            <Link to="/cloud-migration">Cloud Migration</Link>

          </div>
          <div className="F_subSection2.2 F_subSection2">
            <span className="F_subSection2Titel">Our Product</span>
            <Link to="https://clousec.io/">ClouSec</Link>
            <Link>Happiediner</Link>
            <Link>PII Protector</Link>
           
          </div>
          <div className="F_subSection2.3 F_subSection2">
            <span className="F_subSection2Titel">Comapany</span>
            <Link to="/">Home</Link>
            <Link to="/about-us">About Us</Link>
            <Link>Blog</Link>
            <Link to="/contact">Contact US</Link>
          </div>
          <div className="F_subSection2.4 F_subSection2">
            <span className="F_subSection2Titel">Help</span>
            <Link to="/cookie-policy">Privacy Policy</Link>
            <Link to="/careers">Careers</Link>


          </div>
          <div className="F_subSection2_5 F_subSection2">
            <span className="F_subSection2Titel">Contact Sales</span>
            {/* <span className="F_subSection2SubTitel">Phone</span>
           
            <a href="tel:+91 97908 45787">+91 97908 45787
            </a>
            <a href="tel:+91 93453 36553">+91 93453 36553</a> */}
            

           

            {/* <Link>1800 572 3535</Link> */}
            <span className="F_subSection2SubTitel">Email</span>
            <a href="mailto:jerome@stigmatatech.com">sales@stigmatatech.com
            </a>
           
           <a href="mailto:jerome@stigmatatech.com">jerome@stigmatatech.com
           </a>
           <a href="mailto:jerome@stigmata.co.in">jerome@stigmata.co.in</a>

           <Link> </Link>

           
           <div className="F_subSection2DottedBorder"></div>
           {/* <div className="F_subSection2ButtonConatiner">
            <Link to="/contact">Support</Link>
            <MdKeyboardArrowRight />
          </div> */}
          <div className="F_subSection2ButtonConatiner">
            <Link to="/contact">Talk to Concierge</Link>
            <MdKeyboardArrowRight />
          </div>
           

          </div>
        </div>
       

        <div className="footerSection4">
          <img src={logo} alt="" />
          <span className="f_Section4CopyRightsText">© 2024, Stigmata Techno Solution. Ltd. All Rights Reserved.</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
