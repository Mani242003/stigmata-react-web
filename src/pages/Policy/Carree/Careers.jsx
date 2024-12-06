import React from "react";
import "./Careers.scss";
import { Link } from "react-router-dom";
import Navigation from "../../component/Navigation/Navigation";
import Footer from "../../component/footer/Footer";
import ContactForm from "../../component/ContactForm/ContactForm";

const Careers = () => {
  return (
      <section className="careers_W">
        <Navigation />
        
        <div className="careers_C">

        <div className="careersMainHeader">
          <span className="careersMainHeaderText1">
          DevOps Service Rapid and<br/>  Reliable App Delivery
          </span>
          

          <span className="careersMainHeaderText2">
          Experience the Future of Agile Operations with Cloud DevOps Services! Embrace innovation and efficiency as Cyfuture Cloud integrates cutting-edge technology into your development and operations workflows.
          </span>
          <div className="careersMainButton_C">
          <Link   href="">HIRE OUR AI ENGINEERS! </Link>
          </div>
        </div>


        </div>
        <ContactForm />
        <Footer />

      </section>
  );
};

export default Careers;
