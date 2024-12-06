import React, { useState } from "react";
import "./about.scss";
import Logo from "../../assets/images/logo.png";
import { FaArrowRightLong } from "react-icons/fa6";
import ReactPlayer from "react-player/youtube";
import visionAndMission from "../../assets/images/visionAndMission.jpg";
import ourStory from "../../assets/images/ourstory.jpg";
import { FaChevronRight } from "react-icons/fa";
import Footer from "../../component/footer/Footer";
import Navigation from "../../component/Navigation/Navigation";
import Count from "../../component/Count/Count";
import TechBrains from "../../component/TechBrain/TechBrains";
import RoadMap from "../../component/Road-Map/RoadMap";
import Challenges from "../../component/Challenges/Challenges";
import HoverCard from "../../component/CustomHoverCard/HoverCard";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import acc1 from "../../assets/images/aboutSample/Untitled.png";

import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    // behavior: 'smooth',
  });
};

const About = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section className="aboutPage_wrapper">
      <Navigation homeMarque="false" />
      <div className="aboutPage_Container">
        <div className="aboutPageMain">
          <div className="aboutPageLeft">
            <span className="aboutPageTitel">
              Welcome To Stigmata Techno Solutions
            </span>
            <br />
            <br />

            <span className="aboutPageDes">About US</span>
          </div>
        </div>
        <HoverCard />
        <div className="AboutPage_whatWeDo">
          <div className="cloudMigrateMainSection3">
            <div className="cloudMigrateMainSection3Top">
              <span className="cloudMigrateMainSection3Titel">What We Do</span>
              <span className="cloudMigrateMainSection3Des">
                Stigmata offers a comprehensive suite of business-focused cloud
                transformation services, spanning across private, public,
                hybrid, and multi-cloud environments. Our team specializes in
                cloud consulting services, assessing legacy architectures and
                crafting strategic roadmaps for transformation. With expertise
                in cloud application development, we facilitate seamless
                migrations to advanced cloud environments, incorporating cloud
                AWS services and Azure services for robust, scalable solutions.
                As a cloud solutions provider, we provide 24/7 managed support
                to help businesses accelerate technology adoption. Our
                innovative use of cloud AI/ML technologies and custom cloud
                products further enhances operational efficiency and agility on
                the cloud.
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
                            Plugin Developement
                          </h1>
                        </div>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div style={{ marginLeft: "70px" }}>
                          <span style={{ color: "rgba(0,0,0,0.8)" }}>
                            We develop customized plugins for business
                            applications, utilizing innovative approaches
                            throughout our development lifecycle. With extensive
                            experience in creating plugins for Atlassian
                            products (Confluence, JIRA, BitBucket, DevOps,
                            SonarQube, Jenkins), we ensure governance and
                            compliance are maintained.
                          </span>
                          <div className="pluginButtonContainer">
                            <Link
                              to="/plugin-development"
                              onClick={handleScrollToTop}
                            >
                              Read More{" "}
                            </Link>
                            <FaAngleRight />
                          </div>
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
                            Serverless Computing
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
                            We specialize in serverless computing, enabling you
                            to build app functionality without the hassle of
                            infrastructure management. Let the cloud provider
                            handle setup, capacity planning, and server
                            management. We architect serverless applications to
                            be highly scalable and event-driven, utilizing
                            resources only when a specific function or trigger
                            occurs.
                          </span>
                          <div className="pluginButtonContainer">
                            <Link
                              to="/serverless-computing"
                              onClick={handleScrollToTop}
                            >
                              Read More{" "}
                            </Link>
                            <FaAngleRight />
                          </div>
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
                            DevOps
                          </h1>
                        </div>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div style={{ marginLeft: "70px" }}>
                          <span style={{ color: "rgba(0,0,0,0.8)" }}>
                            At Stigmata Techno Solutions, we offer agile DevOps
                            services that intelligently automate your entire
                            development and operations process. Our approach
                            ensures the creation of high-quality, secure code by
                            providing agile development, continuous integration,
                            continuous security, continuous testing, and
                            continuous delivery.
                          </span>
                          <div className="pluginButtonContainer">
                            <Link to="/dev-Ops" onClick={handleScrollToTop}>
                              Read More{" "}
                            </Link>
                            <FaAngleRight />
                          </div>
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
                            Web Application Developement
                          </h1>
                        </div>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div style={{ marginLeft: "70px" }}>
                          <span style={{ color: "rgba(0,0,0,0.8)" }}>
                            At Stigmata Techno Solutions, we harness
                            cutting-edge artificial intelligence technologies to
                            drive innovation and efficiency. Our AI solutions
                            are designed to optimize processes, enhance
                            decision-making, and deliver personalized customer
                            experiences. Whether you need machine learning
                            models, natural language processing, or predictive
                            analytics, we have the expertise to help you unlock
                            AI's full potential.
                          </span>
                          <div className="pluginButtonContainer">
                            <Link
                              to="/software-development"
                              onClick={handleScrollToTop}
                            >
                              Read More{" "}
                            </Link>
                            <FaAngleRight />
                          </div>
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
                      expanded={expanded === "panel5"}
                      onChange={handleChange("panel5")}
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
                              expanded === "panel5" ? "none" : "1px solid gray",
                            width: "2.5rem",
                            height: "2.5rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "5px",
                            padding: "1rem",
                            fontSize: "17px",
                            background:
                              expanded === "panel5" ? "#1A74E9" : "transparent",
                            color: expanded === "panel5" ? "white" : "black",
                          }}
                        >
                          <span>05</span>
                        </div>
                        <div>
                          <h1
                            style={{
                              marginLeft: "32px",
                              color:
                                expanded === "panel5"
                                  ? "#1A74E9"
                                  : "rgba(0,0,0,0.7)",
                              fontWeight: "800",
                            }}
                          >
                            Cloud Migration
                          </h1>
                        </div>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div style={{ marginLeft: "70px" }}>
                          <span style={{ color: "rgba(0,0,0,0.8)" }}>
                            Thinking about moving your workloads to the cloud,
                            whether it's your applications, database, or server?
                            Unsure where to start? Stigmata Techno Solutions is
                            here to assist your organization in migrating
                            servers, databases, applications, and emails to
                            cloud, dedicated, and virtual environments, with a
                            strong focus on security.
                          </span>
                          <div className="pluginButtonContainer">
                            <Link
                              to="/cloud-migration"
                              onClick={handleScrollToTop}
                            >
                              Read More{" "}
                            </Link>
                            <FaAngleRight />
                          </div>
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
                      expanded={expanded === "panel6"}
                      onChange={handleChange("panel6")}
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
                              expanded === "panel6" ? "none" : "1px solid gray",
                            width: "2.5rem",
                            height: "2.5rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "5px",
                            padding: "1rem",
                            fontSize: "17px",
                            background:
                              expanded === "panel6" ? "#1A74E9" : "transparent",
                            color: expanded === "panel6" ? "white" : "black",
                          }}
                        >
                          <span>06</span>
                        </div>
                        <div>
                          <h1
                            style={{
                              marginLeft: "32px",
                              color:
                                expanded === "panel6"
                                  ? "#1A74E9"
                                  : "rgba(0,0,0,0.7)",
                              fontWeight: "800",
                            }}
                          >
                            Mobile App Development
                          </h1>
                        </div>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div style={{ marginLeft: "70px" }}>
                          <span style={{ color: "rgba(0,0,0,0.8)" }}>
                            Our team excels in developing robust and scalable
                            web portals tailored to your enterprise's unique
                            needs. By combining innovative technology with
                            user-centric design, we deliver portals that enhance
                            collaboration, streamline workflows, and improve
                            overall efficiency.
                          </span>
                          <div className="pluginButtonContainer">
                            <Link
                              to="/mobile-app-development"
                              onClick={handleScrollToTop}
                            >
                              Read More{" "}
                            </Link>
                            <FaAngleRight />
                          </div>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "20px",
                      marginLeft: "33px",
                      borderLeft: "1px dashed rgba(0,0,0,0.9)",
                      display: expanded === "panel1" ? "none" : "flex",
                    }}
                  ></div>
                  <div>
                    <Accordion
                      expanded={expanded === "panel7"}
                      onChange={handleChange("panel7")}
                      sx={{
                        backgroundColor: "transparent",
                        border: "none",
                        boxShadow: "none",
                      }}
                    >
                      <AccordionSummary
                        aria-controls="panel7bh-content"
                        id="panel1bh-header"
                      >
                        <div
                          style={{
                            border:
                              expanded === "panel7" ? "none" : "1px solid gray",
                            width: "2.5rem",
                            height: "2.5rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "5px",
                            padding: "1rem",
                            fontSize: "17px",
                            background:
                              expanded === "panel7" ? "#1A74E9" : "transparent",
                            color: expanded === "panel7" ? "white" : "black",
                          }}
                        >
                          <span>07</span>
                        </div>
                        <div>
                          <h1
                            style={{
                              marginLeft: "32px",
                              color:
                                expanded === "panel7"
                                  ? "#1A74E9"
                                  : "rgba(0,0,0,0.7)",
                              fontWeight: "800",
                            }}
                          >
                            Artificial Intelligence
                          </h1>
                        </div>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div style={{ marginLeft: "70px" }}>
                          <span style={{ color: "rgba(0,0,0,0.8)" }}>
                            At Stigmata Techno Solutions, we harness the power
                            of artificial intelligence to drive innovation,
                            efficiency, and growth for your business. Our AI
                            services are designed to provide tailored solutions
                            that meet the unique needs of your organization.
                            Explore our comprehensive suite of AI services:{" "}
                          </span>
                          <div className="pluginButtonContainer">
                            <Link
                              to="/artificial-intelligence"
                              onClick={handleScrollToTop}
                            >
                              Read More{" "}
                            </Link>
                            <FaAngleRight />
                          </div>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </>
              </div>
              <div className="cloudMigrateMainSection3BottomRight">
                <img src={acc1} alt="" />
              </div>
            </div>
            {/* <div className="cloudMigrateSection3BottomButtonOutter">
              <div className="cloudMigrateSection3BottomButton">
                <Link href="">Talk to Experts</Link>
                <FaChevronRight />
              </div>
            </div> */}
          </div>
        </div>

        <div className="ourStoryContainer">
          <div className="ourStoryLeft">
            <img src={ourStory} alt="" />
          </div>
          <div className="ourStoryRight">
            <span className="ourStoryLeRightTitel">OUR STORY</span>
            <span className="ourStoryRzightDes">
              Founded in 2014, Stigmata Techno Solutions emerged with a mission
              to bridge the technical gap within educational institutions. We
              offered specialized technical training through guest lectures,
              workshops, value-added courses, internships, and research projects
              to empower students and academic institutions.
              <br />
              <br />
              In 2019, we evolved, expanding our focus to the dynamic realm of
              software development. Our expertise now spans creating websites,
              IT consulting, ERP development, plugin development, automation
              using web and AI technologies, and offering a range of digital
              services. We pride ourselves on providing customized IT solutions
              to customers worldwide.
              <br />
              <br />
              With a commitment to excellence and innovation, we continuously
              strive to stay ahead of industry trends, delivering cutting-edge
              technology and personalized services to meet the unique needs of
              our clients. At Stigmata Techno Solutions, your success is our
              priority. Let us transform your ideas into reality.
            </span>
          </div>
        </div>

        <div className="VisionAndMissionContainer">
          <div className="VisionAndMissionHeaderContainer">
            <span>We believe in The Power of Simple.</span>
          </div>
          <div className="VisionAndMissionMainContainer">
            <div className="VisionAndMissionLeft">
              <span className="VisionAndMissionLeftTitel">
                Mission & Vision
              </span>
              <span className="VisionAndMissionLeftDes">
                Our guiding principle is straightforward: to deliver exceptional
                quality service to our customers by prioritizing their needs and
                ensuring that technology serves as a catalyst for their business
                growth.
                <br />
                <br />
                Stigmata Techno Solutions comprises a vibrant team of dedicated
                professionals and consultants who excel in exceeding customer
                expectations with our deliverables and making a transformative
                impact worldwide.
              </span>
            </div>
            <div className="VisionAndMissionRight">
              <img src={visionAndMission} alt="" />
            </div>
          </div>
        </div>
      </div>
      <RoadMap />
      <Challenges />

      <Count />
      <TechBrains />
      <Footer />
    </section>
  );
};

export default About;
