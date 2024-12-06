import React, { useRef, useEffect } from "react";
import "./Solution.scss";
// import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import erp1 from "../../assets/images/erp1.png";
import erp2 from "../../assets/images/erp2.png";
import erp3 from "../../assets/images/erp3.png";
import erp4 from "../../assets/images/erp4.png";
import softwareSample from "../../assets/Vector-removebg-preview.png";
import android from "../../assets/images/icons/android-1.svg";
import orangeDot from "../../assets/images/icons/orangeBullet.png";

import hybrid from "../../assets/images/icons/hybrid-app-1.svg";
import enterPrise from "../../assets/images/icons/enterprise-mobile-app-1.svg";

import { AiOutlineArrowRight } from "react-icons/ai";

const Solution = () => {
  return (
    <section className="softwareSampleWrapper" id="solution">
      <div className="softwareSampleContainer">
        <div className="solution-header">
          <span className="solution-header-text">
            <span> Our Works In</span>
            <br />
            ERP Development
          </span>
          <div className="solution-headerDivider"></div>
        </div>
        <div className="solution-main-content-container">
          <div
            className="solution-main-content "
            style={{ background: "#E4F6EF" }}
          >
            <div className="solution-main-content-left ">
              <>
                <span className="solution-left-content-text2">
                  Grid Management
                  <span> (L&T Construction)</span>
                </span>
                <div className="cloudMigrateSection1LeftBottomContainer">
                  <img src={orangeDot} alt="" />

                  <span className="feaPage-col-1-text-4">Grid layer</span>
                </div>
                <div className="cloudMigrateSection1LeftBottomContainer">
                  <img src={orangeDot} alt="" />

                  <span className="feaPage-col-1-text-4"> Subcontractor</span>
                </div>
                <div className="cloudMigrateSection1LeftBottomContainer">
                  <img src={orangeDot} alt="" />

                  <span className="feaPage-col-1-text-4"> Client Billing</span>
                </div>
                <div className="cloudMigrateSection1LeftBottomContainer">
                  <img src={orangeDot} alt="" />

                  <span className="feaPage-col-1-text-4">
                    {" "}
                    Geolocation tracking
                  </span>
                </div>
                <div className="cloudMigrateSection1LeftBottomContainer">
                  <img src={orangeDot} alt="" />

                  <span className="feaPage-col-1-text-4">
                    {" "}
                    Grid status monitoring
                  </span>
                </div>
                <div className="cloudMigrateSection1LeftBottomContainer">
                  <img src={orangeDot} alt="" />

                  <span className="feaPage-col-1-text-4"> Reports</span>
                </div>
              </>

              {/* <div className="softwareSmaplesolution-left_buttonContainer"> */}
              <span className="solutionLeftTechStack">
                Technical Stack{" "}
                <span>
                  <br />
                  <span>Front End :</span> ReactJS , <span> Middleware:</span>{" "}
                  .NET Core, Rest API
                  <span> Backend:</span> MSSQL <span>Mobile:</span> React Native
                </span>{" "}
                <span></span>{" "}
              </span>
              {/* </div> */}
            </div>
            <div className="solution-main-content-right">
              <img src={erp1} alt="" />
            </div>
          </div>
          <div
            className="solution-main-content content2"
            style={{ background: "#FEF6D6" }}
          >
            <div className="solution-main-content-right">
              <img src={erp2} alt="" />
            </div>
            <div className="solution-main-content-left ">
              <>
                <span className="solution-left-content-text2">
                  Medical Image Analysis
                  <span> ( Sri Ramachandra Hospital)</span>
                </span>
                <span className="solution-left-content-titel">
                  Design and develop a window application based on Java to
                  analyse real time patient’s skull x-ray images.
                </span>
                <span className="solution-left-content-titel1">
                  Problem Statement:
                  <br />
                  <span>
                    Right now, manually doctor has to inspect all the patient
                    x-ray images which invokes human dependency, time taking
                    process and sometime error in decision making.
                  </span>
                </span>
                <span className="solution-left-content-titel1">
                  Solution:
                  <br />
                  <span>
                    An automated software which could analyse the patient x-ray
                    images and plot 41 dots on the input images. 11 angular and
                    10 linear equational logic are applied to extract the
                    distance, angle, variance. The proposed solution could able
                    to provide results for 1000 x-ray images in 1 hour and
                    export the whole data as excel report.
                  </span>
                </span>
              </>

              {/* <div className="softwareSmaplesolution-left_buttonContainer"> */}
              {/* <span className="solutionLeftTechStack">
                Technical Stack{" "}
                <span>
                  <br />
                  <span>Front End :</span> ReactJS , <span> Middleware:</span>{" "}
                  .NET Core, Rest API
                  <span> Backend:</span> MSSQL <span>Mobile:</span> React Native
                </span>{" "}
                <span></span>{" "}
              </span> */}
              {/* </div> */}
            </div>
          </div>
          <div
            className="solution-main-content content2"
            style={{ background: "#E3F5EE" }}
          >
            <div className="solution-main-content-left ">
              <>
                <span className="solution-left-content-text2">
                  Power Transmission & Distribution – Management Information
                  System
                  <span> (L&T Construction)</span>
                </span>
                <div className="cloudMigrateSection1LeftBottomContainer">
                  <img src={orangeDot} alt="" />

                  <span className="feaPage-col-1-text-4">
                    Masters : Cost code, Region, Calendar, Project/Tenders,
                    Employee, Timesheet, SLA revision.
                  </span>
                </div>
                <div className="cloudMigrateSection1LeftBottomContainer">
                  <img src={orangeDot} alt="" />

                  <span className="feaPage-col-1-text-4"> Unfilled MH’s</span>
                </div>
                <div className="cloudMigrateSection1LeftBottomContainer">
                  <img src={orangeDot} alt="" />

                  <span className="feaPage-col-1-text-4"> PEM Input page</span>
                </div>
                <div className="cloudMigrateSection1LeftBottomContainer">
                  <img src={orangeDot} alt="" />

                  <span className="feaPage-col-1-text-4"> User Delegation</span>
                </div>
                <div className="cloudMigrateSection1LeftBottomContainer">
                  <img src={orangeDot} alt="" />

                  <span className="feaPage-col-1-text-4"> Monthly Report</span>
                </div>
                <div className="cloudMigrateSection1LeftBottomContainer">
                  <img src={orangeDot} alt="" />

                  <span className="feaPage-col-1-text-4">
                    {" "}
                    Cross Booking Report
                  </span>
                </div>
              </>

              {/* <div className="softwareSmaplesolution-left_buttonContainer"> */}
              <span className="solutionLeftTechStack">
                Technical Stack{" "}
                <span>
                  <br />
                  <span>Front End :</span> ReactJS , <span> Middleware:</span>{" "}
                  .NET Core, Rest API
                  <span> Backend:</span> MSSQL <span>Mobile:</span> React Native
                </span>{" "}
                <span></span>{" "}
              </span>
              {/* </div> */}
            </div>
            <div className="solution-main-content-right">
              <img src={erp3} alt="" />
            </div>
          </div>
          <div
            className="solution-main-content content2"
            style={{ background: "#F6FDD6" }}
          >
            <div className="solution-main-content-right">
              <img src={erp4} alt="" />
            </div>
            <div className="solution-main-content-left ">
              <>
                <span className="solution-left-content-text2">
                  Power transmission & distribution – Pile Foundation for Towers
                  & Girders
                  <span> (L&T Construction)</span>
                </span>
                <div className="cloudMigrateSection1LeftBottomContainer">
                  <img src={orangeDot} alt="" />

                  <span className="feaPage-col-1-text-4">
                    Masters : Project details
                  </span>
                </div>
                <div className="cloudMigrateSection1LeftBottomContainer">
                  <img src={orangeDot} alt="" />

                  <span className="feaPage-col-1-text-4">Foundation Loads</span>
                </div>
                <div className="cloudMigrateSection1LeftBottomContainer">
                  <img src={orangeDot} alt="" />

                  <span className="feaPage-col-1-text-4"> Common Inputs</span>
                </div>
                <div className="cloudMigrateSection1LeftBottomContainer">
                  <img src={orangeDot} alt="" />

                  <span className="feaPage-col-1-text-4"> Pedestal</span>
                </div>
                <div className="cloudMigrateSection1LeftBottomContainer">
                  <img src={orangeDot} alt="" />

                  <span className="feaPage-col-1-text-4"> Pile Cap</span>
                </div>
                <div className="cloudMigrateSection1LeftBottomContainer">
                  <img src={orangeDot} alt="" />

                  <span className="feaPage-col-1-text-4">
                    {" "}
                    Bar Bending Schedule
                  </span>
                </div>
              </>

              {/* <div className="softwareSmaplesolution-left_buttonContainer"> */}
              <span className="solutionLeftTechStack">
                Technical Stack{" "}
                <span>
                  <br />
                  <span>Front End : </span>Asp.Net, Store Procedures{" "}
                  <span> </span> <span> Backend:</span> MSSQL <span></span>
                </span>{" "}
                <span></span>{" "}
              </span>
              {/* </div> */}
            </div>
          </div>
          <div
            className="solution-main-content content2"
            style={{ background: "#FEF6D6" }}
          >
            <div className="solution-main-content-right">
              <img src={softwareSample} alt="" />
            </div>
            <div className="solution-main-content-left ">
              <>
                <span className="solution-left-content-text2">
                  Day Closure & Patient Token Automation
                  {/* <span> ( Sri Ramachandra Hospital)</span> */}
                </span>
                {/* <span className="solution-left-content-titel">
                This web application streamlines patient appointments by generating automated token numbers, which are issued through receipts and SMS notifications. It eliminates the need for manual billing and simplifies the process of account reconciliation at the end of the day.
                </span> */}
                {/* <span className="solution-left-content-titel1">
                  Problem Statement:
                  <br />
                  <span>
                    Right now, manually doctor has to inspect all the patient
                    x-ray images which invokes human dependency, time taking
                    process and sometime error in decision making.
                  </span>
                </span> */}
                <br />
                <span className="solution-left-content-titel1">
                  <span>
                    This web application streamlines patient appointments by
                    generating automated token numbers, which are issued through
                    receipts and SMS notifications. It eliminates the need for
                    manual billing and simplifies the process of account
                    reconciliation at the end of the day.
                  </span>
                </span>
              </>

              {/* <div className="softwareSmaplesolution-left_buttonContainer"> */}
              {/* <span className="solutionLeftTechStack">
                Technical Stack{" "}
                <span>
                  <br />
                  <span>Front End :</span> ReactJS , <span> Middleware:</span>{" "}
                  .NET Core, Rest API
                  <span> Backend:</span> MSSQL <span>Mobile:</span> React Native
                </span>{" "}
                <span></span>{" "}
              </span> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
