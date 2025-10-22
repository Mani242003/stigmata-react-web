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

export default function AwsPartnerPage() {
  // Motion variants for consistency
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
            <h1>
              Unlocking Potential: <br /> Stigmata’s Partnership with AWS
            </h1>
            <p>
              Empowering enterprises worldwide through secure, compliant, and
              scalable AWS cloud solutions.
            </p>
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
              Founded in 2014, <strong>Stigmata Techno Solutions</strong> began
              by bridging the technology gap in education through training,
              R&D, and specialized programs. Over the years, we have evolved
              into a trusted engineering partner for global enterprises —
              delivering cutting-edge software, cloud, and security solutions.
            </p>
            <p>
              Our partnership with <strong>Amazon Web Services (AWS)</strong>{" "}
              empowers enterprises in regulated industries to strengthen cloud
              security, ensure compliance, automate operations, and optimize
              costs with AI-driven solutions.
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
          <div className="containeraws text-center">
            <h2>
              <Cloud className="icon" />
              Our Partnership with AWS
            </h2>
            <p>
              As an <strong>AWS Consulting Partner</strong>, Stigmata
              collaborates with AWS to enhance enterprise cloud security,
              compliance automation, and operational excellence.
            </p>
            <p>
              Leveraging AWS services like <strong>Security Hub</strong>,{" "}
              <strong>GuardDuty</strong>, <strong>Inspector</strong>,{" "}
              <strong>Trusted Advisor</strong>, and <strong>AWS Config</strong>,
              we enable automated security monitoring, cost optimization, and
              compliance governance.
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
          <div className="overlay" />
          <div className="containeraws">
            <h2>
              <Cpu className="icon" /> Our Key Products & Capabilities
            </h2>
            <div className="grid">
              {[
                {
                  icon: <Server />,
                  title: "Serverless App for Hospitals",
                  desc: "Streamlines visitor registration and daily closure with IAM and DynamoDB.",
                },
                {
                  icon: <Zap />,
                  title: "Serverless App for Restaurants",
                  desc: "Digitizes order processing, QR ordering, and real-time tracking using AWS Lambda.",
                },
                {
                  icon: <Shield />,
                  title: "AWS Hardening & Compliance",
                  desc: "Implements AWS Config and CloudWatch for vulnerability remediation and compliance.",
                },
                {
                  icon: <Lock />,
                  title: "Cloud Security Solutions (CIEM)",
                  desc: "AI-driven CIEM ensuring PCI-DSS, ISO 27001, and SOC 2 compliance — reducing cloud costs by 27%.",
                },
              ].map((item, i) => (
                <motion.div
                  className="card"
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
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
              {[
                {
                  icon: <Layers />,
                  title: "Scalability",
                  desc: "Dynamic scaling for consistent performance and cost efficiency.",
                },
                {
                  icon: <Globe />,
                  title: "Global Reach",
                  desc: "Low-latency performance and worldwide compliance coverage.",
                },
                {
                  icon: <Shield />,
                  title: "Security & Compliance",
                  desc: "Strong frameworks with 99.9% compliant service outcomes.",
                },
                {
                  icon: <Cpu />,
                  title: "Flexibility",
                  desc: "Architecture adaptable to enterprise needs and threats.",
                },
                {
                  icon: <Server />,
                  title: "Reliability",
                  desc: "Multi-AZ redundancy ensures consistent uptime and performance.",
                },
                {
                  icon: <Database />,
                  title: "Integration",
                  desc: "Effortless connection with APIs and third-party tools.",
                },
              ].map((item, i) => (
                <motion.div
                  className="card"
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
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
            <p>Experience seamless productivity with enterprise-grade security.</p>
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
