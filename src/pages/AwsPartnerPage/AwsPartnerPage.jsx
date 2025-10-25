import React from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  Shield,
  Cpu,
  Server,
  Lock,
  Database,
  Globe,
  Layers,
  Zap,
} from "lucide-react";
import "./AwsPartnerPage.scss";
import Footer from "../../component/footer/Footer";
import Navigation from "../../component/Navigation/Navigation";
import { Link } from "react-router-dom";

import AwsQualified from "../../assets/awsPartner.png"
import AwsPartner from "../../assets/aws_qualified_software.png";

export default function AwsPartnerPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Navigation homeMarque="false" />
      <div className="aws-page">
        {/* HERO */}
        <section className="hero">
          <div className="overlay" />
          <motion.div
            className="content"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
        <h1 className="hero-title">
  Unlocking Potential <br />
  <span>Stigmata’s Partnership with AWS</span>
</h1>


            <p>
              Empowering enterprises worldwide through secure, compliant, and
              scalable AWS cloud solutions.
            </p>

            {/* BOTH BADGES AT TOP */}
            <motion.div
              className="aws-badge-group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <img
                src={AwsQualified}
                alt="AWS Qualified Software Badge"
                className="badge-img"
              />
              <img
                src={AwsPartner}
                alt="AWS Partner Badge"
                className="badge-img"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* INTRO */}
        <motion.section
          className="intro"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="bg-overlay" />
          <div className="containeraws">
            <p>
              <strong>Stigmata Techno Solutions</strong> was founded in 2014,
              beginning by bridging the technology gap in education through
              training, R&D, and specialized programs. Over the years, we have
              evolved into a trusted engineering partner for global enterprises
              — delivering cutting-edge software, cloud, and security solutions.
            </p>

            <p>
              Today, we proudly serve as an engineering vendor to{" "}
              <strong>L&T Construction</strong> for enterprise applications and
              automation, and a cloud & security vendor to{" "}
              <strong>One Connect Financial Technology Inc.</strong> We are also
              a technology partner for leading banks like{" "}
              <strong>DBS, OCBC, and CIMB</strong> on critical software
              initiatives.
            </p>

            <p>
              Working on Governance and Compliance-related solutions, Stigmata
              Techno Solutions developed its flagship product{" "}
              <strong>Stigmata Cloud Security Solutions</strong>, empowering
              global enterprises—especially in regulated industries—to
              strengthen cloud security, ensure compliance, automate operations,
              and optimize costs.
            </p>

            <p>
              By deploying our AI-driven{" "}
              <strong>Cloud Infrastructure Entitlement Management (CIEM)</strong>{" "}
              and compliance automation platform on AWS’s robust infrastructure,
              we deliver reliable, scalable, and secure operations across
              diverse environments.
            </p>
          </div>
        </motion.section>

        {/* PARTNERSHIP */}
        <motion.section
          className="partnership"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="containeraws">
            <h2>
              <Cloud className="icon" />
              Our Partnership with AWS
            </h2>
            <p>
              As an <strong>AWS Consulting Partner</strong>, Stigmata Cloud
              Security Solutions collaborates with AWS to enhance enterprise
              cloud security, compliance automation, and operational excellence.
              Our platform—built on AWS—integrates AI, automation, and compliance
              frameworks to help customers meet standards like{" "}
              <strong>RBI, PCI DSS, SOC 2, and ISO 27001</strong> with
              audit-ready reliability.
            </p>

            <p>
              We leverage AWS technologies such as{" "}
              <strong>
                AWS Security Hub, GuardDuty, Inspector, Trusted Advisor, Cost
                Explorer, and AWS Config
              </strong>{" "}
              to automate security monitoring, cost optimization, and compliance
              governance—ensuring proactive risk detection and near real-time
              remediation.
            </p>

            <p>
              Our partnership accelerates digital transformation for regulated
              sectors, enabling secure scalability across{" "}
              <strong>
                India, Singapore, the USA, Malaysia, Thailand, and Dubai
              </strong>
              .
            </p>

            <p>
              <strong>Stigmata Cloud Security Solutions</strong> has also
              undergone the AWS Foundational Technical Review (FTR), validating
              adherence to AWS’s high standards for security, reliability, and
              operational excellence. Our AWS-certified team brings deep
              expertise in AWS security hardening, serverless architectures, and
              migrations.
            </p>
          </div>
        </motion.section>

        {/* PRODUCTS */}
        <motion.section
          className="products"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="containeraws">
            <h2>
              <Cpu className="icon" /> Our Key Products & Capabilities
            </h2>
            <div className="grid">
              <div className="card">
                <div className="icon">
                  <Server />
                </div>
                <h3>Serverless App for Hospitals</h3>
                <p>
                  Built on AWS’s scalable serverless architecture, this solution
                  streamlines visitor registration, token issuance, and daily
                  closure processes. It leverages IAM and DynamoDB to ensure
                  security and compliance while reducing manual intervention.
                </p>
              </div>

              <div className="card">
                <div className="icon">
                  <Zap />
                </div>
                <h3>Serverless App for Restaurants</h3>
                <p>
                  This intelligent restaurant management system uses AWS
                  serverless tech to digitize and automate order processing,
                  QR-based ordering, real-time tracking, and smart prioritization
                  for kitchen operations.
                </p>
              </div>

              <div className="card">
                <div className="icon">
                  <Shield />
                </div>
                <h3>AWS Hardening & Compliance</h3>
                <p>
                  We implement AWS hardening for enterprise customers focusing
                  on vulnerability remediation, Red Hat and Linux server audits,
                  and compliance using AWS Config, Inspector, and CloudWatch.
                </p>
              </div>

              <div className="card">
                <div className="icon">
                  <Lock />
                </div>
                <h3>Stigmata Cloud Security Solutions (CIEM)</h3>
                <p>
                  A PaaS-based, AI-driven CIEM platform enhanced with Cloud
                  Center of Excellence (CCoE) capabilities — ensuring 100% audit
                  pass rates, reducing cloud costs by 27%, and achieving global
                  compliance automation.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* WHY AWS */}
        <motion.section
          className="why-aws"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="containeraws">
            <h2>
              <Globe className="icon" /> Why AWS Cloud?
            </h2>
            <div className="grid">
              <div className="card">
                <div className="icon">
                  <Layers />
                </div>
                <h3>Scalability</h3>
                <p>
                  AWS enables dynamic scaling for computing and security
                  workloads, ensuring consistent performance and cost
                  efficiency.
                </p>
              </div>

              <div className="card">
                <div className="icon">
                  <Globe />
                </div>
                <h3>Global Reach</h3>
                <p>
                  With AWS’s global infrastructure, deployments deliver
                  low-latency performance and compliance across regions.
                </p>
              </div>

              <div className="card">
                <div className="icon">
                  <Shield />
                </div>
                <h3>Security & Compliance</h3>
                <p>
                  AWS’s shared responsibility model ensures 99.9% compliant
                  outcomes and enterprise-grade data protection.
                </p>
              </div>

              <div className="card">
                <div className="icon">
                  <Cpu />
                </div>
                <h3>Flexibility</h3>
                <p>
                  Architecture adaptable to enterprise needs and evolving threat
                  landscapes.
                </p>
              </div>

              <div className="card">
                <div className="icon">
                  <Server />
                </div>
                <h3>Reliability</h3>
                <p>
                  Multi-AZ redundancy guarantees consistent uptime and
                  performance for mission-critical environments.
                </p>
              </div>

              <div className="card">
                <div className="icon">
                  <Database />
                </div>
                <h3>Integration</h3>
                <p>
                  Seamless integration with APIs and third-party systems ensures
                  effortless adoption and operational continuity.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="cta"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="overlay" />
          <div className="content">
            <h2>Stay Productive. Stay Secure.</h2>
            <p>
              Experience seamless productivity with enterprise-grade AWS cloud
              security.
            </p>
            <Link to="/contact">
              <button>Contact Us</button>
            </Link>
          </div>
        </motion.section>
      </div>
      <Footer />
    </>
  );
}
