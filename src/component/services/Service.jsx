import React from "react";
import "./Services.scss";
import ServicesCustomCard from "./ServicesCustomCard/ServicesCustomCard";
import cloud from "../../assets/images/services/migration.png";
import mobile from "../../assets/images/services/setting-mobile.png";
import software from "../../assets/images/services/monitor-setting.png";
import plugin from "../../assets/images/services/website-plug-in (1).png";
import severless from "../../assets/images/services/server.png";
import deops from "../../assets/images/services/development.png";

const Service = () => {
  return (
    <div>
      <section className="serviceWrapper" id="services">
        <div className="servicesContainer">
          <div className="ServicesHeaderContainer" data-aos="fade-up">
            <span className="seviceTitleSmall"> An Emerging Player In</span>

            <span className="seviceTitle">Software Development/ Automation Services</span>
            <div className="services-seperateLine"></div>

            <span className="seviceDec">
            Delivering innovative and tailored software solutions  to drive your business forward and meet your unique business needs.
            </span>
            {/* Delivering integrated value through assets, services, and partnership models */}
          </div>
          <div className="servicesRow-1 servicesContentConatiner">
            <ServicesCustomCard
              name="Serverless Computing"
              des1="We specialize in serverless computing, enabling you to build app functionality without the hassle of infrastructure management. Let the cloud provider handle setup, capacity planning, and server management. We architect serverless applications to be highly scalable and event-driven, utilizing resources only when a specific function or trigger occurs."
              img={severless}
              url="/serverless-computing"
            />
            <ServicesCustomCard
              name="DevOps"
              des1="At Stigmata Techno Solutions, we offer agile DevOps services that intelligently automate your entire development and operations process. Our approach ensures the creation of high-quality, secure code by providing agile development, continuous integration, continuous security, continuous testing, and continuous delivery."
              img={deops}
              url="/dev-Ops"

            />
            <ServicesCustomCard
              name="Web Application Development"
              des1="At Stigmata Techno Solutions, we leverage cutting-edge AI to drive innovation and efficiency. Our solutions optimize processes, enhance decision-making, and deliver personalized customer experiences. From machine learning to natural language processing and predictive analytics, we unlock AI's full potential for your needs."
              img={software}
              url="/software-development"

            />{" "}
          </div>
          <div className="servicesRow-2 servicesContentConatiner">
            <ServicesCustomCard
              name="Cloud Migration"
              des1="Thinking about moving your workloads to the cloud, whether it's your applications, database, or server? Unsure where to start? Stigmata Techno Solutions is here to assist your organization in migrating servers, databases, applications, and emails to cloud, dedicated, and virtual environments, with a strong focus on security."
              img={cloud}
              url="/cloud-migration"

            />
            <ServicesCustomCard
              name=" Mobile App Development"
              des1="Our team excels in developing robust and scalable web portals tailored to your enterprise's unique needs. By combining innovative technology with user-centric design, we deliver portals that enhance collaboration, streamline workflows, and improve overall efficiency."
              img={mobile}
              url="/mobile-app-development"
            />

            <ServicesCustomCard
              name="Plugin Development"
              des1="We develop customized plugins for business applications, utilizing innovative approaches throughout our development lifecycle. With extensive experience in creating plugins for Atlassian products (Confluence, JIRA, BitBucket, DevOps, SonarQube, Jenkins), we ensure governance and compliance are maintained."
              img={plugin}
              url="/plugin-development"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
