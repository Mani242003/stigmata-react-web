import React, { useRef, useEffect } from "react";
import "./KeyCharacter.scss";
import accesscontrol from "../../assets/images/icons/storage.webp";
import insights from "../../assets/images/icons/load-balancer.webp";
import compliance from "../../assets/images/icons/scaling.webp";
import costSaving from "../../assets/images/icons/costSavingIcon.png";
import { BsFillRecord2Fill } from "react-icons/bs";
import { IoMdArrowRoundForward } from "react-icons/io";

const KeyCharacter = () => {
  return (
    <section className="KeyCharacter-wrapper" id="fea">
      <div className="FeaPage-Container">
        <div className="feaPage-header">
          <span className="feaPage-header-text1">
            Benefits of Our Serverless Computing Solutions:
          </span>
        </div>
        <div className="feaPage-main-content">
          <div className="feaPage-col-1">
            <div className="feaPage-col-1-img-container">
              <img src={accesscontrol} alt="" />
            </div>
            <span className="feaPage-col-1-text-1">
              {" "}
              Reduced Operational Complexity:
            </span>
            <span className="feaPage-col-1-text-2">
              Focus on developing features and functionality while we handle the
              infrastructure.
            </span>
          </div>
          <div className="feaPage-col-1">
            <div className="feaPage-col-1-img-container">
              <img src={insights} alt="" />
            </div>
            <span className="feaPage-col-1-text-1"> Enhanced Agility:</span>
            <span className="feaPage-col-1-text-2">
              Quickly deploy and iterate on applications, reducing
              time-to-market.
            </span>
          </div>
          <div className="feaPage-col-1">
            <div className="feaPage-col-1-img-container">
              <img src={compliance} alt="" />
            </div>
            <span className="feaPage-col-1-text-1"> Scalable Solutions:</span>
            <span className="feaPage-col-1-text-2">
              Automatically scale to meet demand, ensuring performance and
              availability.
            </span>
          </div>
          <div className="feaPage-col-1">
            <div className="feaPage-col-1-img-container">
              <img src={costSaving} alt="" />
            </div>
            <span className="feaPage-col-1-text-1"> Cost Savings:</span>
            <span className="feaPage-col-1-text-2">
              Pay only for the compute resources you use, reducing overall IT
              costs.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyCharacter;
