import React from "react";
import "./DevOps.scss";
import Navigation from "../../../component/Navigation/Navigation";
import Footer from "../../../component/footer/Footer";
import ContactForm from "../../../component/ContactForm/ContactForm";
import HoverCard from "../../../component/CustomHoverCard/HoverCard";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import ReactPlayer from "react-player/youtube";
import KeyCharacter from "../../../component/KeyCharacter/KeyCharacter";
import TechBrains from "../../../component/TechBrain/TechBrains";
import Problem from "../../../component/DevChallenges/Problem";
import CommonAccordian from "../../../component/commonAccordian/CommonAccordian";
import { devOpsFaq } from "../../../constant";
import AccordionSection from "../../../component/Accordion/AccordionSection";
import devopsLogo from "../../../assets/images/64615.png";
import Count from "../../../component/Count/Count";
import { FaChevronRight } from "react-icons/fa";
import blueDot from "../../../assets/images/icons/blueBullet.png";
import orangeDot from "../../../assets/images/icons/orangeBullet.png";

const DevOps = () => {
  return (
    <section className="DevOps_wrapper">
      <Navigation />
      <div className="DevOps_container">
        <div className="DevOpsMainHeader">
          <span className="DevOpsPageHeaderText1">
            Embrace the future of cloud
            <br /> computing with our <br /> serverless solutions
          </span>

          <span className="DevOpsPageHeaderText2">
            At Stigmata Techno Solutions, we specialize in creating cutting-edge
            serverless computing solutions that enable your business to focus on
            innovation and functionality without the burden of infrastructure
            management.
          </span>
          <div className="DevOpsPageButtonContainer">
            <Link to="/contact">Talk to Experts </Link>
            <FaChevronRight />
          </div>
        </div>
        <HoverCard />
        <div className="devopsOverviewContainer">
          <div className="devopsOverviewSection1">
            <div className="devopsOverviewSection1LeftContainer">
              <img src={devopsLogo} alt="" width={600} />
              {/* <ReactPlayer
                //   // width='200%'
                //   height="250px"
                width="560px"
                height="360px"
                url="https://www.youtube.com/watch?v=bY1OCCrNhXM"
                //  playing={true} // Enable autoplay
                // muted={true}
                // style={playerStyle}
              /> */}
            </div>
            <div className="devopsOverviewSection1RightContainer">
              <span className="devopsOverviewSection1BigText">
                Transform Your Application Development with our Serverless
                Computing stack
              </span>
              <span className="devopsOverviewSection1Des">
                At Stigmata Techno Solutions, we specialize in creating
                cutting-edge serverless computing solutions that enable your
                business to focus on innovation and functionality without the
                burden of infrastructure management. Our serverless architecture
                ensures that your applications are scalable, cost-efficient, and
                resilient.{" "}
              </span>
            </div>
          </div>
          <div className="devopsOverviewSection2">
            <div className="cloudMigrateSection2Header">
              <span>Why Choose Serverless Computing?</span>
            </div>
            <>
              <div className="cloudMigrateSection2innerConatiner">
                <div className="cloudMigrateSection2innerLeft">
                  <div className="cloudMigrateSection1LeftBottomContainer">
                    <img src={orangeDot} alt="" />

                    <span className="feaPage-col-1-text-4">
                      <span> No Infrastructure Management : </span> <br />
                      With serverless computing, the cloud provider takes care
                      of the infrastructure setup, capacity planning, and server
                      management. This allows your development teams to focus on
                      writing code and delivering value to your business.
                    </span>
                  </div>
                </div>
                <div className="cloudMigrateSection2innerRight">
                  <div className="cloudMigrateSection1LeftBottomContainer">
                    <img src={blueDot} alt="" />

                    <span className="feaPage-col-1-text-4">
                      <span>                      Event-Driven Architecture :
                      </span> <br />
Serverless applications are designed to be event-driven, meaning they only consume resources when a specific function or trigger occurs. This architecture ensures efficient resource utilization and optimal performance.
                    </span>
                  </div>
                </div>
              </div>
              <div className="cloudMigrateSection2innerConatiner">
                <div className="cloudMigrateSection2innerLeft">
                  <div className="cloudMigrateSection1LeftBottomContainer">
                    <img src={orangeDot} alt="" />

                    <span className="feaPage-col-1-text-4">
                      <span> Scalability :</span>
                      <br />
                      Serverless architectures automatically scale your
                      applications based on demand. Whether you have a spike in
                      traffic or a steady flow of users, serverless computing
                      ensures that your applications can handle the load without
                      manual intervention.
                    </span>
                  </div>
                </div>
                <div className="cloudMigrateSection2innerRight">
                  <div className="cloudMigrateSection1LeftBottomContainer">
                    <img src={blueDot} alt="" />

                    <span className="feaPage-col-1-text-4">
                      <span>                      Cost Efficiency
                      :</span>
                      <br />
Pay only for what you use. Serverless computing charges you based on the actual execution of your code, rather than pre-allocated resources. This model significantly reduces costs by eliminating the need to over-provision resources for peak times.
                    </span>
                  </div>
                </div>
              </div>
            </>
            <div className="cloudMigrateSection2BottomContainer">
              {/* <span className="cloudMigrateSection2BottomText">
                Stigmata Techno Solution's utilize cloud hyperscalers to create
                collaborative, interactive, and transparent business
                architecture ready to tackle technology challenges.
              </span> */}
              {/* <div className="cloudMigrateSection2BottomButton">
                <Link href="">Discuss With Our Experts</Link>
                <FaChevronRight />
              </div> */}
            </div>
          </div>
         
          <KeyCharacter />
        </div>
      </div>
      <Problem />

      <div className="devopsPageFqa">
        {/* <span className="devopsPageFqaHeaderText">
          Cloud DevOps Service FAQs
        </span> */}

        {/* {
          devOpsFaq.map((item)=><CommonAccordian key={item.id} data ={item} />)

          
        } */}
        {/* <AccordionSection array={devOpsFaq} /> */}
      </div>
      <ContactForm />
      <Footer />
    </section>
  );
};

export default DevOps;
