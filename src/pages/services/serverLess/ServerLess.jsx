import React from "react";
import "./serverLess.scss";
import Navigation from "../../../component/Navigation/Navigation";
import Footer from "../../../component/footer/Footer";
import ContactForm from "../../../component/ContactForm/ContactForm";
import HoverCard from "../../../component/CustomHoverCard/HoverCard";
import { Link } from "react-router-dom";

import blueDot from "../../../assets/images/icons/blueBullet.png";
import orangeDot from "../../../assets/images/icons/orangeBullet.png";
import acc1 from "../../../assets/acc1.png";
import acc2 from "../../../assets/acc2.png";
import { FaChevronRight } from "react-icons/fa";
import { BsFillRecord2Fill } from "react-icons/bs";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { devOpsFaq } from "../../../constant";
import TechBrains from "../../../component/TechBrain/TechBrains";
import Count from "../../../component/Count/Count";
import AccordionSection from "../../../component/Accordion/AccordionSection";

const ServerLess = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  // const getImage = () => {
  //   // if (expanded) {
  //   switch (expanded) {
  //     case "panel1":
  //       return <img src={acc2} alt="" />;
  //     case "panel2":
  //       return <img src={acc1} alt="" />;
  //     case "panel3":
  //       return <img src={acc2} alt="" />;

  //     default:
  //       return <img src={acc1} alt="" />;
  //   }

  //   // return ;
  //   // }
  // };
  return (
    <section className="serverLessWrapper">
      <Navigation />
      <div className="serverLessContainer">
        <div className="serverLessMainHeader">
          <span className="serverLessHeaderText1">
            DevOps Application <br /> Development
          </span>

          <span className="serverLessHeaderText2">
            At Stigmata Techno Solutions, we specialize in delivering agile
            DevOps services designed to streamline your development and
            operations processes.
          </span>
          <div className="serverLessButtonContainer">
            <Link to="/contact">Talk to Experts </Link>
            <FaChevronRight />
          </div>
        </div>
        <div className="serverLessMainHeaderSection">
          <div className="cloudMigrateMainSection1">
            <div className="cloudMigrateMainSection1Left">
              <span className="cloudMigrateSection1LeftTitel">
                Automate your operational tool onboarding access & deployment
                process
              </span>
        
            </div>
            <div className="cloudMigrateMainSection1Right">
              <span>
                Our comprehensive DevOps solutions empower your organization to
                innovate faster, maintain higher quality standards, and achieve
                operational excellence.
                {/* <br />
                <br />
                Our cloud architecture services are tailored to ensure security,
                scalability, and continuity, integrating seamlessly with
                top-tier platforms like cloud AWS services and Azure services.
                By leveraging cloud deployment solutions that focus on
                infrastructure efficiency and innovative pricing models like
                pay-per-use, Integra enhances cloud ROI and delivers consistent,
                on-demand user experiences. */}
              </span>
            </div>
          </div>
          <div className="cloudMigrateMainSection2">
            <div className="cloudMigrateSection2Header">
              <span>
                Tackling your Operational Challenges with Stigmata Techno
                Solutions
              </span>
            </div>
            <>
              <div className="cloudMigrateSection2innerConatiner">
                <div className="cloudMigrateSection2innerLeft">
                  <div className="cloudMigrateSection1LeftBottomContainer">
                    <img src={orangeDot} alt="" />

                    <span className="feaPage-col-1-text-4">
                      <span> Agile Development: </span> <br />
                      Our approach integrates agile methodologies, allowing your
                      development teams to work more efficiently and
                      collaboratively. We help you adopt agile practices to
                      accelerate project timelines and enhance flexibility.
                    </span>
                  </div>
                </div>
                <div className="cloudMigrateSection2innerRight">
                  <div className="cloudMigrateSection1LeftBottomContainer">
                    <img src={blueDot} alt="" />

                    <span className="feaPage-col-1-text-4">
                      <span>
                        Continuous Integration & Continuous Delivery (CI/CD) :
                      </span>{" "}
                      <br />
                      We implement CI/CD pipelines that automate code
                      integration and deployment, ensuring faster delivery and
                      higher code quality. Our CI/CD solutions minimize manual
                      interventions and reduce the risk of errors, enabling
                      seamless and reliable software releases.
                    </span>
                  </div>
                </div>
              </div>
              <div className="cloudMigrateSection2innerConatiner">
                <div className="cloudMigrateSection2innerLeft">
                  <div className="cloudMigrateSection1LeftBottomContainer">
                    <img src={orangeDot} alt="" />

                    <span className="feaPage-col-1-text-4">
                      <span> Continuous Testing :</span>
                      <br />
                      Quality assurance is a critical component of our DevOps
                      strategy. We establish continuous testing frameworks that
                      automate testing processes, providing rapid feedback and
                      ensuring your code is always production-ready.
                    </span>
                  </div>
                </div>
                <div className="cloudMigrateSection2innerRight">
                  <div className="cloudMigrateSection1LeftBottomContainer">
                    <img src={blueDot} alt="" />

                    <span className="feaPage-col-1-text-4">
                      <span> Continuous Security :</span>
                      <br />
                      Security is integrated into every stage of the development
                      lifecycle. Our DevSecOps approach embeds security
                      practices within the DevOps pipeline, ensuring your
                      applications are secure from the ground up. We implement
                      automated security checks and compliance validations to
                      protect your systems against vulnerabilities.
                    </span>
                  </div>
                </div>
              </div>
              <div className="cloudMigrateSection2innerConatiner">
                <div className="cloudMigrateSection2innerLeft">
                  <div className="cloudMigrateSection1LeftBottomContainer">
                    <img src={orangeDot} alt="" />

                    <span className="feaPage-col-1-text-4">
                      <span> Infrastructure as Code (IaC) :</span>
                      <br />
                      We leverage IaC to manage and provision your
                      infrastructure through code, enabling consistent and
                      scalable environments. Our IaC solutions ensure that your
                      infrastructure is version-controlled and easily
                      replicable, reducing configuration drifts and enhancing
                      deployment efficiency.
                    </span>
                  </div>
                </div>
                <div className="cloudMigrateSection2innerRight">
                  <div className="cloudMigrateSection1LeftBottomContainer">
                    <img src={blueDot} alt="" />

                    <span className="feaPage-col-1-text-4">
                      <span>Monitoring and Logging :</span>
                      <br />
                      Our DevOps services include robust monitoring and logging
                      solutions that provide real-time insights into system
                      performance and health. We help you implement
                      comprehensive monitoring tools to detect issues early,
                      optimize performance, and maintain high availability.
                    </span>
                  </div>
                </div>
              </div>
            </>
            <div className="cloudMigrateSection2BottomContainer">
              <span className="cloudMigrateSection2BottomText">
                Stigmata Techno Solution's utilize cloud hyperscalers to create
                collaborative, interactive, and transparent business
                architecture ready to tackle technology challenges.
              </span>
              <div className="cloudMigrateSection2BottomButton">
                <Link to="/contact">Discuss With Our Experts</Link>
                <FaChevronRight />
              </div>
            </div>
          </div>
          <div className="cloudMigrateMainSection3">
            <div className="cloudMigrateMainSection3Top">
              <span className="cloudMigrateMainSection3Titel">What We Do</span>
              <span className="cloudMigrateMainSection3Des">
              Transform your development and operations with our expert DevOps services. Partner with Stigmata Techno Solutions to drive innovation, efficiency, and growth within your organization. Contact us today to learn more about how our DevOps solutions can benefit your business.
              </span>
            </div>

            <div className="cloudMigrateMainSection3Bottom">
              <div className="cloudMigrateMainSection3BottomLeft">
                <>
                  <div>
                    <Accordion
                      expanded={expanded === "panel1"}
                      onChange={handleChange("panel1")}
                      sx={{
                        backgroundColor: "transparent",
                        border: "none",
                        boxShadow: "none",
                      }}
                    >
                      <AccordionSummary
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <div
                          style={{
                            border:
                              expanded === "panel1" ? "none" : "1px solid gray",
                            width: "2.5rem",
                            height: "2.5rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "5px",
                            padding: "1rem",
                            fontSize: "17px",
                            background:
                              expanded === "panel1" ? "#1A74E9" : "transparent",
                            color: expanded === "panel1" ? "white" : "black",
                          }}
                        >
                          <span>01</span>
                        </div>
                        <div>
                          <h1
                            style={{
                              marginLeft: "30px",
                              color:
                                expanded === "panel1"
                                  ? "#1A74E9"
                                  : "rgba(0,0,0,0.7)",
                              fontWeight: "800",
                            }}
                          >
                            
                            Faster Time-to-Market
                          </h1>
                        </div>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div style={{ marginLeft: "70px" }}>
                          <span style={{ color: "rgba(0,0,0,0.8)" }}>
                          Accelerate your software development lifecycle and deliver new features to market faster.
                          </span>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                    <div
                      style={{
                        width: "100%",
                        height: "20px",
                        marginLeft: "33px",
                        borderLeft: "1px dashed rgba(0,0,0,0.9)",
                        display: expanded === "panel1" ? "none" : "flex",
                      }}
                    ></div>
                  </div>
                  <div>
                    <Accordion
                      expanded={expanded === "panel2"}
                      onChange={handleChange("panel2")}
                      sx={{
                        backgroundColor: "transparent",
                        border: "none",
                        boxShadow: "none",
                      }}
                    >
                      <AccordionSummary
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        style={{ paddingTop: "0", paddingBottom: "0" }}
                      >
                        <div
                          style={{
                            border:
                              expanded === "panel2" ? "none" : "1px solid gray",
                            width: "2.5rem",
                            height: "2.5rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "5px",
                            padding: "1rem",
                            fontSize: "17px",
                            background:
                              expanded === "panel2" ? "#1A74E9" : "transparent",
                            color: expanded === "panel2" ? "white" : "black",
                          }}
                        >
                          <span>02</span>
                        </div>
                        <div>
                          <h1
                            style={{
                              marginLeft: "32px",
                              color:
                                expanded === "panel2"
                                  ? "#1A74E9"
                                  : "rgba(0,0,0,0.7)",
                              fontWeight: "800",
                            }}
                          >
                           Improved Collaboration
                          </h1>
                        </div>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div
                          style={{
                            marginLeft: "70px",
                            paddingTop: "0",
                            paddingBottom: "0",
                          }}
                        >
                          <span style={{ color: "rgba(0,0,0,0.8)" }}>
                           Enhance communication and collaboration between development, operations, and security teams.
                          </span>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                    <div
                      style={{
                        width: "100%",
                        height: "20px",
                        marginLeft: "33px",
                        borderLeft: "1px dashed rgba(0,0,0,0.9)",
                        display: expanded === "panel2" ? "none" : "flex",
                      }}
                    ></div>
                  </div>
                  <div>
                    <Accordion
                      expanded={expanded === "panel3"}
                      onChange={handleChange("panel3")}
                      sx={{
                        backgroundColor: "transparent",
                        border: "none",
                        boxShadow: "none",
                      }}
                    >
                      <AccordionSummary
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <div
                          style={{
                            border:
                              expanded === "panel3" ? "none" : "1px solid gray",
                            width: "2.5rem",
                            height: "2.5rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "5px",
                            padding: "1rem",
                            fontSize: "17px",
                            background:
                              expanded === "panel3" ? "#1A74E9" : "transparent",
                            color: expanded === "panel3" ? "white" : "black",
                          }}
                        >
                          <span>03</span>
                        </div>
                        <div>
                          <h1
                            style={{
                              marginLeft: "32px",
                              color:
                                expanded === "panel3"
                                  ? "#1A74E9"
                                  : "rgba(0,0,0,0.7)",
                              fontWeight: "800",
                            }}
                          >
                            Higher Quality Code
                          </h1>
                        </div>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div style={{ marginLeft: "70px" }}>
                          <span style={{ color: "rgba(0,0,0,0.8)" }}>
                          Ensure your code is continuously tested and secured, resulting in higher quality and more reliable applications.
                          </span>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                    <div
                      style={{
                        width: "100%",
                        height: "20px",
                        marginLeft: "33px",
                        borderLeft: "1px dashed rgba(0,0,0,0.9)",
                        display: expanded === "panel3" ? "none" : "flex",
                      }}
                    ></div>
                  </div>
                  <div>
                    <Accordion
                      expanded={expanded === "panel4"}
                      onChange={handleChange("panel4")}
                      sx={{
                        backgroundColor: "transparent",
                        border: "none",
                        boxShadow: "none",
                      }}
                    >
                      <AccordionSummary
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <div
                          style={{
                            border:
                              expanded === "panel4" ? "none" : "1px solid gray",
                            width: "2.5rem",
                            height: "2.5rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "5px",
                            padding: "1rem",
                            fontSize: "17px",
                            background:
                              expanded === "panel4" ? "#1A74E9" : "transparent",
                            color: expanded === "panel4" ? "white" : "black",
                          }}
                        >
                          <span>04</span>
                        </div>
                        <div>
                          <h1
                            style={{
                              marginLeft: "32px",
                              color:
                                expanded === "panel4"
                                  ? "#1A74E9"
                                  : "rgba(0,0,0,0.7)",
                              fontWeight: "800",
                            }}
                          >
                            Cost Efficiency 
                          </h1>
                        </div>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div style={{ marginLeft: "70px" }}>
                          <span style={{ color: "rgba(0,0,0,0.8)" }}>
                          Reduce operational costs by automating repetitive tasks and optimizing resource usage.
                          </span>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </>
              </div>
              <div className="cloudMigrateMainSection3BottomRight">
                {/* {getImage()} */}
                <img src={acc1} alt="" />
              </div>
            </div>
            <div className="cloudMigrateSection3BottomButtonOutter">
              <div className="cloudMigrateSection3BottomButton">
                <Link to="/contact">Talk to Experts</Link>
                <FaChevronRight />
              </div>
            </div>
          </div>
          {/* <Count /> */}

          <div className="cloudMigrateeFqa">
            {/* <span className="cloudMigrateFqaHeaderText">
              Serverless computing Service FAQs
            </span> */}

            {/* {
          devOpsFaq.map((item)=><CommonAccordian key={item.id} data ={item} />)

          
        } */}
            {/* <AccordionSection array={devOpsFaq} /> */}
          </div>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </section>
  );
};

export default ServerLess;
