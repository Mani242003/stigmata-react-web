import React from "react";
import "./Problem.scss";
import security from "../../assets/problemPage/security.svg";
import gear from "../../assets/problemPage/gear.svg";
import time from "../../assets/problemPage/time.svg";
import team from "../../assets/problemPage/team.svg";
import report from "../../assets/problemPage/report.svg";
import process from "../../assets/problemPage/process.svg";

const Problem = () => {
  return (
    <section className="problem-wrapper" id="problem">
      <div className="problem-container">
        <div className="problem-header-container">
          <span className="problem-header-titel">
          Our Serverless Computing Services
          </span>
         
        </div>
        <div className="problem-main-content-container">
          <div className="problem-main-content-row1">
            <div className="problem-content ">
              <div className="problem-content-left">
                <div className="problem-left-img-container problem-content-1">
                  <img src={security} alt="" />
                </div>
              </div>
              <div className="problem-content-right">
                <span className="problem-content-right-title">
                Application Development
                </span>
                <span className="problem-content-right-des">
We design and develop serverless applications that are tailored to your business needs. Our expert developers utilize the latest serverless technologies to build robust and scalable applications.
                </span>
              </div>
            </div>
            <div className="problem-content ">
              <div className="problem-content-left">
                <div className="problem-left-img-container problem-content-2">
                  <img src={gear} alt="" />
                </div>
              </div>
              <div className="problem-content-right">
                <span className="problem-content-right-title">
                Migration to Serverless
                </span>
                <span className="problem-content-right-des">
                Transitioning to a serverless architecture can be complex. Our team provides end-to-end migration services, ensuring a seamless transition from traditional architectures to serverless computing with minimal disruption to your operations.
                </span>
              </div>
            </div>
            <div className="problem-content ">
              <div className="problem-content-left">
                <div className="problem-left-img-container problem-content-3">
                  <img src={time} alt="" />
                </div>
              </div>
              <div className="problem-content-right">
                <span className="problem-content-right-title">
                Function as a Service (FaaS)
                </span>
                <span className="problem-content-right-des">
                We implement FaaS solutions that allow you to run your code in response to events without provisioning or managing servers. Our FaaS services support various programming languages and runtime environments.
                </span>
              </div>
            </div>
          </div>
          <div className="problem-main-content-row2">
            <div className="problem-content ">
              <div className="problem-content-left">
                <div className="problem-left-img-container problem-content-4">
                  <img src={team} alt="" />
                </div>
              </div>
              <div className="problem-content-right">
                <span className="problem-content-right-title">
                Backend Services 

                </span>
                <span className="problem-content-right-des">
                From API gateways to data storage solutions, we offer a range of serverless backend services that support your application’s functionality and scalability. Our serverless architecture eliminates the need for server management, allowing you to focus on core business objectives.                </span>
              </div>
            </div>
            <div className="problem-content ">
              <div className="problem-content-left">
                <div className="problem-left-img-container problem-content-5">
                  <img src={report} alt="" />
                </div>
              </div>
              <div className="problem-content-right">
                <span className="problem-content-right-title">
                Monitoring and Optimization

                </span>
                <span className="problem-content-right-des">
Our serverless solutions include comprehensive monitoring and optimization tools that provide real-time insights into application performance. We help you identify and resolve issues quickly, ensuring your applications run smoothly.

                </span>
              </div>
            </div>
            <div className="problem-content ">
              <div className="problem-content-left">
                <div className="problem-left-img-container problem-content-6">
                  <img src={process} alt="" />
                </div>
              </div>
              <div className="problem-content-right">
                <span className="problem-content-right-title">
                  Compliance and Audit Challenges
                </span>
                <span className="problem-content-right-des">
                  Compliance and audit challenges can create legal and financial
                  risks for organizations, requiring dedicated efforts to meet
                  regulatory requirements and ensure transparency in their
                  operations.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
