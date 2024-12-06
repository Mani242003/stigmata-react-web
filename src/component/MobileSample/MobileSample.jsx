import React from "react";
import "./MobileSample.scss";

import sample1 from "../../assets/images/sample1.png";
import sample2 from "../../assets/images/sample2.png";

import img1 from "../../assets/images/icons/react.png";
import img2 from "../../assets/images/icons/fluter.png";
import img3 from "../../assets/images/icons/wordpress.png";
import restApi from "../../assets/images/icons/apiLogo.png"
import { BsFillRecord2Fill } from "react-icons/bs";

const MobileSample = () => {
  return (
    <section className="MobileSample_wrapper" id="simplicity">
      <div className="MobileSample_container">
        <div className="MobileSample_container_left">
          <img src={sample2} alt="" />
        </div>

        <div className="MobileSample_container_right">
          <span className="simplicity_right_text2">
            Mart Easy Mobile Application
          </span>
          <span className="simplicity_right_text3">
            Mart Easy is an Andaman island based multiple vendor managed
            ecommerce product. Mart Easy manages 8 different category of
            products with several subcategories.
          </span>
          <span className="simplicity_rightTechTitel"> Features :</span>
          <div className="feaPage-col-1-bottom-container">
            <BsFillRecord2Fill color="#5E6FEC" size={26} />

            <span className="feaPage-col-1-text-4">Login</span>
          </div>
          <div className="feaPage-col-1-bottom-container">
            <BsFillRecord2Fill color="#5E6FEC" size={26} />
            <span className="feaPage-col-1-text-4">Geofence Tracking</span>
          </div>
          <div className="feaPage-col-1-bottom-container">
            <BsFillRecord2Fill color="#5E6FEC" size={26} />
            <span className="feaPage-col-1-text-4">Grid management</span>
          </div>

          <div className="simplicity_right_bottom">
            <div className="simplicity_bottom_row1">
              <div className="simplicity_bottom_row1_content">
                <img src={img1} alt="" />

                <span>React Native</span>
              </div>
              {/* <div className="simplicity_bottom_row1_content">
                <img src={img2} alt="" />
                <span>Fluter</span>
              </div> */}
              <div className="simplicity_bottom_row1_content">
                <img src={img3} alt="" />
                <span>Wordpress</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="MobileSample_container customContainer">
        <div className="MobileSample_container_left">
          <img src={sample1} alt="" />
        </div>

        <div className="MobileSample_container_right">
          <span className="simplicity_right_text2">
            Larsen & Tourbo (L&T) – Costal Area Construction
          </span>
          <span className="simplicity_right_text3">
          Grid Mobile Application Development is an enterprise solution designed to display comprehensive grid progress. It incorporates geolocation features to provide real-time updates on vendor locations and grid construction status.
          </span>
          <span className="simplicity_rightTechTitel"> Features :</span>
          <div className="feaPage-col-1-bottom-container">
            <BsFillRecord2Fill color="#5E6FEC" size={26} />

            <span className="feaPage-col-1-text-4">WordPress</span>
          </div>
          <div className="feaPage-col-1-bottom-container">
            <BsFillRecord2Fill color="#5E6FEC" size={26} />
            <span className="feaPage-col-1-text-4">
              Executive Security Dashboard
            </span>
          </div>
          <div className="feaPage-col-1-bottom-container">
            <BsFillRecord2Fill color="#5E6FEC" size={26} />
            <span className="feaPage-col-1-text-4">React Native</span>
          </div>
          <div className="feaPage-col-1-bottom-container">
            <BsFillRecord2Fill color="#5E6FEC" size={26} />
            <span className="feaPage-col-1-text-4">Rest API</span>
          </div>
          <div className="simplicity_right_bottom">
            <div className="simplicity_bottom_row1">
              <div className="simplicity_bottom_row1_content">
                <img src={img1} alt="" />

                <span>React Native</span>
              </div>
              <div className="simplicity_bottom_row1_content">
                <img src={restApi} alt="" />

                <span>Rest Api</span>
              </div>
              {/* <div className="simplicity_bottom_row1_content">
                <img src={img2} alt="" />
                <span>Fluter</span>
              </div>
              <div className="simplicity_bottom_row1_content">
                <img src={img3} alt="" />
                <span>Wordpress</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileSample;
