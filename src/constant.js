import brain1 from "./assets/images/brains/brain1.jpeg";
import brain2 from "./assets/images/brains/brain2.jpg";
import brain3 from "./assets/images/brains/brain3.jpeg";
import brain4 from "./assets/images/brains/brain4.png";
import brain5 from "./assets/images/brains/brain5.jpeg";
import brain6 from "./assets/images/brains/brain6.jpeg";
import brain7 from "./assets/images/brains/brain7.jpeg";
import brain8 from "./assets/images/brains/brain8.jpeg";
import brain9 from "./assets/images/brains/brain9.jpeg";
import brain10 from "./assets/images/brains/brain10.jpeg";
import avatar from "./assets/images/brains/avatar9.jpg";
import TB_new1 from "./assets/images/brains/TB_new1.jpeg";
import logesh from "./assets/images/brains/logesh.jpg";
import TB_new3 from "./assets/images/brains/TB_new3.jpg";
import SathishImg from "./assets/images/brains/Sathish.jpg";
import Mahendran from "./assets/images/brains/Mahendran.jpg";

import logo1 from "./assets/Logo.png";
import logo2 from "./assets/happiedinner.jpg";
import logo3 from "./assets/logoPII.png";

export const routes = [
  {
    id: 1,
    name: "What we do",
    // link: "/services",

    subRoutes: [
      {
        id: 1,
        titel: "Services",
        link1: "Serverless Computing",
        url1: "/serverless-computing",
        link2: "DevOps",
        url2: "/dev-Ops",
        link3: "Mobile App Development",
        url3: "/mobile-app-development",
        link4: "Plugin Development",
        url4: "/plugin-development",
        link5: "Software Application Development",
        url5: "/software-development",
        link6: "Cloud Migration",
        url6: "/cloud-migration",
        link7: "Artificial intelligence",
        url7: "/artificial-intelligence",
      },
      {
        id: 2,

        titel: "Our Expertise",
        link1: "Heavy Construction Companies,",
        link2: "Power Transmission & Distribution,",
        link3: "Financial institutions",

        link4: "AWS enterprises (CSPM tool – ClouSec)",
        link5: "Digital Solutions for all enterprises",
      },
    ],
  },
  {
    id: 2,
    name: "Our Products",
    link: "/products",
    subRoutes: [
      {
        title: "ClouSec",
        des: "ClouSec is a intelligent CSPM tool addressing regulatory compliance, data risks, infrastructure gap in the security policy with comprehensive account view, saving cost on the workloads and solutions to known configuration issues. ",
        link: "https://clousec.io/",
        img: logo1,
      },
      {
        title: "Happiediner",
        des: "Happiediner is a complete digital solution for the restaurants involving super admin, restaurant owner, customers and kitchen modules with unique feature like last minute deal, data driven recommendation system, digitalized kitchen process and food order tracking.",
        link: "https://clousec.io/",
        img: logo2,
      },
      {
        title: "PII Protector",
        des: "PII Protector is a 1st AI based plugin to monitor sensitive PII (personally identifiable information like credit card numbers, passwords, country code, AWS / Google secret keys, email address, JWT tokens etc.)",
        link: "https://clousec.io/",
        img: logo3,
      },
    ],
  },
  {
    id: 3,

    name: "Company",
    subRoutes: [
      {
        id: 1,
        titel: "Company",
        link1: "About US",
        url1: "/about-us",
        link2: "Contact US",
        url2: "/contact",
        link3: "Careers",
        url3: "/careers",
      },
    ],
  },

  {
    id: 4,
    name: "Insights",
    link: "/blog",
    subRoutes: [
      {
        id: 2,

        titel: "Insights",
        link1: "Blog",
        url1: "#",
        link2: "Youtube",
        url2: "https://youtube.com/@stigmatatechnosolutionsclousec?si=-jlrQuNQ6ACViNae",
        link3: "News",

        url3: "#news",
      },
    ],
  },

  {
    id: 5,

    name: "Contact Us",
    link: "/contact",
  },
];

export const ourBrains = [
  {
    id: 1,
    name: "Jerome Melkisidak B.E, M.B.A",
    position: "CEO",
    img: brain1,

    skills: [
      {
        skill: "Scrum master",
        precentage: 70,
      },
      {
        skill: "Manual testing",
        precentage: 50,
      },
      {
        skill: "Client Acquisition",
        precentage: 70,
      },
      {
        skill: "Business Development",
        precentage: 60,
      },
    ],
  },
  {
    id: 2,
    name: "Arun Deivendran",
    position: "Advisor",
    img: brain2,

    skills: [
      {
        skill: "Business Development",
        precentage: 80,
      },
    ],
  },
  {
    id: 3,
    name: "Maria Lourdu Diana",
    position: "HR Head & Chief Marketing Head",
    img: brain3,

    skills: [
      {
        skill: "Social media listening",
        precentage: 70,
      },
      {
        skill: "Social media analytics",
        precentage: 70,
      },

      {
        skill: "Trend analysis",
        precentage: 90,
      },
      {
        skill: "Content creation",
        precentage: 70,
      },
      {
        skill: "Social media management",
        precentage: 90,
      },
    ],
  },
  {
    id: 4,
    name: "Lawrence",
    position: "BUSINESS DEVELOPMENT HEAD-ZIMBABWE",
    img: brain4,

    skills: [
      {
        skill: "Business Development",
        precentage: 80,
      },
    ],
  },
  {
    id: 5,
    name: "Mahendran Sundaram",
    position: "Chief Growth Officer",
    img: Mahendran,

    skills: [
      {
        skill: "Business Development",
        precentage: 80,
      },
    ],
  },
  {
    id: 6,
    name: "Praveen K",
    position: "Senior Full Stack Developer",
    img: brain5,

    skills: [
      {
        skill: "React",
        precentage: 70,
      },
      {
        skill: "React Native",
        precentage: 50,
      },
      {
        skill: "MongoDB",
        precentage: 70,
      },
      {
        skill: "MySQL",
        precentage: 90,
      },
      {
        skill: "Javascript",
        precentage: 60,
      },
      {
        skill: "Java",
        precentage: 80,
      },
    ],
  },
  {
    id: 7,
    name: "Faisal",
    position: "Full Stack Developer",
    img: TB_new1,

    skills: [
      {
        skill: "React",
        precentage: 90,
      },
      {
        skill: "React Native",
        precentage: 70,
      },

      {
        skill: "AWS(amplify,lambda)",
        precentage: 70,
      },
      {
        skill: "Javascript",
        precentage: 60,
      },
      {
        skill: "Java",
        precentage: 80,
      },
    ],
  },
  {
    id: 8,
    name: "Moorthy",
    position: "Senior Java Developer",
    img: brain7,

    skills: [
      {
        skill: "Java",
        precentage: 90,
      },
      {
        skill: "JavaScript",
        precentage: 60,
      },
    ],
  },
  {
    id: 9,
    name: "Sathish ",
    position: "Power Bi Developer",
    img: SathishImg,

    skills: [
      {
        skill: "Java",
        precentage: 100,
      },
      {
        skill: "JavaScript",
        precentage: 90,
      },
      {
        skill: "SQL",
        precentage: 70,
      },
    ],
  },
  {
    id: 10,
    name: "Suresh",
    position: "Full Stack Developer",
    img: brain8,

    skills: [
      {
        skill: "React",
        precentage: 90,
      },
      {
        skill: "JavaScript",
        precentage: 60,
      },
      {
        skill: "Python",
        precentage: 90,
      },
      {
        skill: "AWS",
        precentage: 60,
      },
    ],
  },
  {
    id: 11,
    name: "A. Backia Ananthi",
    position: "Juinor Backend Developer",
    img: brain9,

    skills: [
      {
        skill: "JavaScript",
        precentage: 60,
      },
      {
        skill: "Asp.net",
        precentage: 90,
      },
      {
        skill: ".Net core",
        precentage: 60,
      },
    ],
  },
  {
    id: 12,
    name: "Logeshwaran",
    position: "Full Stack Developer",
    img: logesh,

    skills: [
      {
        skill: "Java",
        precentage: 100,
      },
      {
        skill: "JavaScript",
        precentage: 90,
      },
      {
        skill: "SQL",
        precentage: 70,
      },
    ],
  },
  {
    id: 13,
    name: "Peter",
    position: "Junior Backend Developer",
    img: TB_new3,

    skills: [
      {
        skill: "Java",
        precentage: 100,
      },
      {
        skill: "JavaScript",
        precentage: 90,
      },
      {
        skill: "SQL",
        precentage: 70,
      },
    ],
  },
];

export const devOpsFaq = {
  question1: "What is DevOps?",
  answer1:
    "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). The goal is to shorten the development lifecycle, deliver high-quality software continuously, and improve collaboration between development and operations teams. DevOps emphasizes automation, continuous integration, continuous delivery (CI/CD), and monitoring to achieve these objectives.",
  question2: "What is the role of monitoring and observability in DevOps?",
  answer2:
    "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) ",
  question3: "What is Continuous Integration (CI)?",
  answer3:
    "Continuous Integration (CI) is a DevOps practice where developers frequently integrate their code changes into a shared repository, preferably several times a day. Each integration is automatically verified by an automated build and automated tests. The primary goal of CI is to detect errors quickly and improve software quality by enabling early detection of integration issues.",
  question4: "What is Continuous Delivery (CD)?",
  answer4:
    "Continuous Delivery (CD) is a DevOps practice where code changes are automatically prepared for a release to production. It builds upon Continuous Integration by deploying all code changes to a testing environment and/or a production environment after the build stage. Continuous Delivery ensures that the software can be reliably released at any time, and with minimal manual intervention.",
};
