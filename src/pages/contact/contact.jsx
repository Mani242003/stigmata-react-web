import React from "react";
import "./contact.scss";
import Navigation from "../../component/Navigation/Navigation";
import Footer from "../../component/footer/Footer";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import ContactForm from "../../component/ContactForm/ContactForm";
const contact = () => {
  return (
    <section className="contactPage_wrapper">
      <Navigation homeMarque="false" />

      <div className="contactPage_container">
        <div className="contactPageMainHeader">
          <span className="contactPageHeaderText1">
            We appreciate your interest in Stigmata!
          </span>
          <span className="contactPageHeaderText2">
            Let's have a discussion!!
          </span>
          <div className="contactPageMainSocialContainer">
          
            <a href="tel:+91 93453 36553">
              <FiPhoneCall />
            </a>
            <a href="mailto:jerome@stigmatatech.com">
              <IoMailOutline />
            </a>

            <a href="#">
              <TiMessages />
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
      <Footer />
    </section>
  );
};

export default contact;
