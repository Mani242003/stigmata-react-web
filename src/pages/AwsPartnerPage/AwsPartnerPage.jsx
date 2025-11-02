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
  Award,
  TrendingDown,
  CheckCircle,
  DollarSign,
  BarChart3,
} from "lucide-react";
import "./AwsPartnerPage.scss";
import Footer from "../../component/footer/Footer";
import Navigation from "../../component/Navigation/Navigation";
import { Link } from "react-router-dom";

import AwsQualified from "../../assets/awsPartner.png";
import AwsPartner from "../../assets/aws_qualified_software.png";

export default function AwsPartnerPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
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
              <span>Stigmata's Partnership with AWS</span>
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
              and compliance automation platform on AWS's robust infrastructure,
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
              adherence to AWS's high standards for security, reliability, and
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
          variants={staggerContainer}
        >
          <div className="containeraws">
            <h2>
              <Cpu className="icon" /> Our Key Products & Capabilities
            </h2>
            <motion.div className="grid" variants={staggerContainer}>
              <motion.div className="card" variants={fadeUp}>
                <div className="icon">
                  <Server />
                </div>
                <h3>Serverless App for Hospitals</h3>
                <p>
                  Built on AWS's scalable serverless architecture, this solution
                  streamlines visitor registration, token issuance, and daily
                  closure processes. It leverages IAM and DynamoDB to ensure
                  security and compliance while reducing manual intervention.
                </p>
              </motion.div>

              <motion.div className="card" variants={fadeUp}>
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
              </motion.div>

              <motion.div className="card" variants={fadeUp}>
                <div className="icon">
                  <Shield />
                </div>
                <h3>AWS Hardening & Compliance</h3>
                <p>
                  We implement AWS hardening for enterprise customers focusing
                  on vulnerability remediation, Red Hat and Linux server audits,
                  and compliance using AWS Config, Inspector, and CloudWatch.
                </p>
              </motion.div>

              <motion.div className="card" variants={fadeUp}>
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
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* WHY AWS */}
        <motion.section
          className="why-aws"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="containeraws">
            <h2>
              <Globe className="icon" /> Why AWS Cloud?
            </h2>
            <motion.div className="grid" variants={staggerContainer}>
              <motion.div className="card" variants={fadeUp}>
                <div className="icon">
                  <Layers />
                </div>
                <h3>Scalability</h3>
                <p>
                  AWS enables dynamic scaling for computing and security
                  workloads, ensuring consistent performance and cost
                  efficiency.
                </p>
              </motion.div>

              <motion.div className="card" variants={fadeUp}>
                <div className="icon">
                  <Globe />
                </div>
                <h3>Global Reach</h3>
                <p>
                  With AWS's global infrastructure, deployments deliver
                  low-latency performance and compliance across regions.
                </p>
              </motion.div>

              <motion.div className="card" variants={fadeUp}>
                <div className="icon">
                  <Shield />
                </div>
                <h3>Security & Compliance</h3>
                <p>
                  AWS's shared responsibility model ensures 99.9% compliant
                  outcomes and enterprise-grade data protection.
                </p>
              </motion.div>

              <motion.div className="card" variants={fadeUp}>
                <div className="icon">
                  <Cpu />
                </div>
                <h3>Flexibility</h3>
                <p>
                  Architecture adaptable to enterprise needs and evolving threat
                  landscapes.
                </p>
              </motion.div>

              <motion.div className="card" variants={fadeUp}>
                <div className="icon">
                  <Server />
                </div>
                <h3>Reliability</h3>
                <p>
                  Multi-AZ redundancy guarantees consistent uptime and
                  performance for mission-critical environments.
                </p>
              </motion.div>

              <motion.div className="card" variants={fadeUp}>
                <div className="icon">
                  <Database />
                </div>
                <h3>Integration</h3>
                <p>
                  Seamless integration with APIs and third-party systems ensures
                  effortless adoption and operational continuity.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* SERVICE OFFERINGS */}
        <motion.section
          className="service-offerings"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="containeraws">
            <h2>
              <Server className="icon" /> Our Service Offerings on AWS
            </h2>
            <p className="section-intro">
              Stigmata Cloud Security Solutions delivers end-to-end consulting
              and managed services on AWS, helping businesses innovate securely
              and efficiently. Our expertise spans cloud migration, serverless
              application development, security and compliance automation, cost
              optimization, and AI/ML-driven operations.
            </p>
            <div className="service-list">
              <div className="service-item">
                <CheckCircle className="check-icon" />
                <span>Cloud Migration & Modernization</span>
              </div>
              <div className="service-item">
                <CheckCircle className="check-icon" />
                <span>Serverless Application Development</span>
              </div>
              <div className="service-item">
                <CheckCircle className="check-icon" />
                <span>Security & Compliance Automation</span>
              </div>
              <div className="service-item">
                <CheckCircle className="check-icon" />
                <span>Cost Optimization & FinOps</span>
              </div>
              <div className="service-item">
                <CheckCircle className="check-icon" />
                <span>AI/ML-Driven Operations</span>
              </div>
              <div className="service-item">
                <CheckCircle className="check-icon" />
                <span>24/7 Managed Cloud Services</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CASE STUDIES */}
        <motion.section
          className="case-studies"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="containeraws">
            <h2>
              <BarChart3 className="icon" /> Case Studies
            </h2>

            <div className="case-study-card">
              <div className="case-header">
                <h3>Case Study 1: Enhancing Security and Reducing Cloud Costs</h3>
                <div className="case-tags">
                  <span className="tag">Banking & Finance</span>
                  <span className="tag">Asia's 6th Largest Bank</span>
                </div>
              </div>

              <div className="case-content">
                <div className="case-section">
                  <h4>Challenge</h4>
                  <p>
                    The bank required continuous monitoring of their AWS cloud
                    infrastructure's security posture and needed to optimize
                    cloud expenditures without compromising security or
                    performance.
                  </p>
                </div>

                <div className="case-section">
                  <h4>Solution</h4>
                  <p>
                    Stigmata Cloud Security Solutions partnered with the bank to
                    provide comprehensive security monitoring and cost
                    optimization. Leveraging our custom S3 Browser logic, the
                    customer eliminated the need for AWS Transfer Family service.
                    Additional features included smart workload shutdown, unused
                    resource identification, granular cost analytics, and new
                    resource alerts.
                  </p>
                </div>

                <div className="case-results">
                  <div className="result-item">
                    <DollarSign className="result-icon" />
                    <div className="result-content">
                      <span className="result-value">$500-700</span>
                      <span className="result-label">Monthly Savings</span>
                    </div>
                  </div>
                  <div className="result-item">
                    <TrendingDown className="result-icon" />
                    <div className="result-content">
                      <span className="result-value">20-30%</span>
                      <span className="result-label">Cost Reduction</span>
                    </div>
                  </div>
                  <div className="result-item">
                    <CheckCircle className="result-icon" />
                    <div className="result-content">
                      <span className="result-value">100%</span>
                      <span className="result-label">Security Compliance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-study-card">
              <div className="case-header">
                <h3>Case Study 2: Automated Compliance & Workflow</h3>
                <div className="case-tags">
                  <span className="tag">IT Security</span>
                  <span className="tag">Audit Firm</span>
                </div>
              </div>

              <div className="case-content">
                <div className="case-section">
                  <h4>Challenge</h4>
                  <p>
                    A leading IT security audit firm needed to streamline their
                    compliance monitoring process across multiple regulatory
                    frameworks including RBI, PCI-DSS, SOC, MAS-TRM, and ISO
                    27001.
                  </p>
                </div>

                <div className="case-section">
                  <h4>Solution</h4>
                  <p>
                    Stigmata implemented continuous cloud infrastructure
                    monitoring driven by a custom rule engine mapped to multiple
                    compliance standards. Our platform provides customers with a
                    unified view of their security posture, proactively identifies
                    gaps, and automates outcome-driven workflows. Findings are
                    automatically assigned to responsible users, suppressed when
                    necessary, and remediated with actionable
                    solutions—transforming security governance from detection to
                    resolution.
                  </p>
                </div>

                <div className="case-highlights">
                  <div className="highlight-item">
                    <CheckCircle className="highlight-icon" />
                    <span>Unified multi-framework compliance view</span>
                  </div>
                  <div className="highlight-item">
                    <CheckCircle className="highlight-icon" />
                    <span>Automated workflow assignment</span>
                  </div>
                  <div className="highlight-item">
                    <CheckCircle className="highlight-icon" />
                    <span>Proactive gap identification</span>
                  </div>
                  <div className="highlight-item">
                    <CheckCircle className="highlight-icon" />
                    <span>Actionable remediation solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* INDUSTRIES SERVED */}
        <motion.section
          className="industries"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="containeraws">
            <h2>Industries Served</h2>
            <motion.div className="industry-grid" variants={staggerContainer}>
              <motion.div className="industry-card" variants={fadeUp}>
                Banking, Financial Services & Insurance (BFSI)
              </motion.div>
              <motion.div className="industry-card" variants={fadeUp}>
                Non-Banking Financial Companies (NBFC)
              </motion.div>
              <motion.div className="industry-card" variants={fadeUp}>
                Healthcare & Life Sciences
              </motion.div>
              <motion.div className="industry-card" variants={fadeUp}>
                Retail & Hospitality
              </motion.div>
              <motion.div className="industry-card" variants={fadeUp}>
                Technology & SaaS Startups
              </motion.div>
              <motion.div className="industry-card" variants={fadeUp}>
                Large Enterprises
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* AWS CERTIFICATIONS */}
        <motion.section
          className="certifications"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="containeraws">
            <h2>
              <Award className="icon" /> Our AWS Certifications
            </h2>
            <p className="section-intro">
              Our team includes certified AWS professionals who bring deep
              expertise and proven excellence to every project.
            </p>
            <div className="cert-grid">
              <div className="cert-card">
                <Award className="cert-icon" />
                <h3>AWS Certified Solutions Architects</h3>
                <p>
                  Expert-level architecture design and implementation for complex
                  cloud solutions
                </p>
              </div>
              <div className="cert-card">
                <Award className="cert-icon" />
                <h3>AWS Certified Cloud Practitioners</h3>
                <p>
                  Foundational cloud knowledge with comprehensive AWS service
                  understanding
                </p>
              </div>
              <div className="cert-card">
                <Award className="cert-icon" />
                <h3>AWS Certified Security Specialists</h3>
                <p>
                  Advanced security expertise ensuring robust protection and
                  compliance
                </p>
              </div>
            </div>
            <div className="ftr-badge">
              <CheckCircle className="ftr-icon" />
              <div className="ftr-content">
                <h4>AWS Foundational Technical Review (FTR) Validated</h4>
                <p>
                  Stigmata Cloud Security Solutions meets AWS standards for
                  technical excellence through ongoing training, certification,
                  and successful completion of the AWS Foundational Technical
                  Review (FTR).
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