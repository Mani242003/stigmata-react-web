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
import praveen from "./assets/images/brains/TB_new4.jpg";
import aravinth from "./assets/images/brains/TB_new5.jpg";

import logo1 from "./assets/Logo.png";
import logo2 from "./assets/happiedinner.jpg";
import logo3 from "./assets/logoPII.png";


import p1 from "./assets/images/news/new/post1.png";
import p2 from "./assets/images/news/new/post2.png";
import p3 from "./assets/images/news/new/post3.png";
import p4 from "./assets/images/news/new/post4.png";
import p5 from "./assets/images/news/new/post5.png";
import p6 from "./assets/images/news/new/post6.png";
import p7 from "./assets/images/news/new/post7.png";
import p8 from "./assets/images/news/new/post8.png";
import p9 from "./assets/images/news/new/post9.png";


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
        link: "https://www.clousec.net",
        img: logo1,
      },
      {
        title: "Happiediner",
        des: "Happiediner is a complete digital solution for the restaurants involving super admin, restaurant owner, customers and kitchen modules with unique feature like last minute deal, data driven recommendation system, digitalized kitchen process and food order tracking.",
        link: "/",
        img: logo2,
      },
      // {
      //   title: "PII Protector",
      //   des: "PII Protector is a 1st AI based plugin to monitor sensitive PII (personally identifiable information like credit card numbers, passwords, country code, AWS / Google secret keys, email address, JWT tokens etc.)",
      //   link: "https://clousec.io/",
      //   img: logo3,
      // },
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
  {
    id: 14,
    name: "Praveen Raj",
    position: "Junior Full Stack Developer ",
    img: praveen,

    skills: [
      {
        skill: "JavaScript",
        precentage: 90,
      },
      {
        skill: ".Net",
        precentage: 100,
      },
      {
        skill: "MSSQL ",
        precentage: 70,
      },
      {
        skill: "ML / LLM Models ",
        precentage: 80,
      },
    ],
  },
  {
    id: 15,
    name: "Aravinth ",
    position: "Junior Full Stack Developer ",
    img: aravinth,

    skills: [
      {
        skill: "React",
        precentage: 100,
      },
      {
        skill: "JavaScript",
        precentage: 90,
      },
      {
        skill: "Node JS",
        precentage: 70,
      },
      {
        skill: ".Net ",
        precentage: 90,
      },
      {
        skill: "MSSQL",
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

export const linkedInData = [
  {
    img: p1,
    title: "Grateful this Labour Day to the Stigmata and ClouSec teams—your dedication drives our success. Here’s to 2025 milestones together! #LabourDay #Gratitude #Teamwork #2025Goals",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7323398021197504514/"
  },
  {
    img: p2,
    title: "Launching May 1, 2025: ClouSec—next-gen AWS cloud security. Proactive, intelligent defense for compliance, cost savings, and automation. A new era of protection begins!",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7319341494111215616/"
  },
  {
    img: p3,
    title: "Introducing Lex Nyxoria: a visionary platform uniting users and experts. Powered by AWS serverless, Stigmata Team crafts innovation, ignites transformation, and redefines excellence together.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7317223597255639041/"
  },
  {
    img: p4,
    title: "Thrilled to launch our e-auction web app at Stigmata Techno Solutions! Grateful to our team and Ms. Aseel as we start this fiscal strong.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7311407484613599233/"
  },
  {
    img: p5,
    title: "Honored to meet Shikhar Malhotra, CEO of HCL Healthcare, and discuss how ClouSec empowers healthcare with data security and compliance. Thanks to SSN iFound!",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7306953435046678528/"
  },
  {
    img: p6,
    title: "Honored to launch Campus Drive 2025 at St. Joseph’s—my alma mater and talent hub. Grateful for the passionate alumni driving our company’s tech growth!",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7293823522672414720/"
  },
  {
    img: p7,
    title: "Honored to speak on entrepreneurship at Mar Gregorios College, Chennai. Grateful to MSME, StartupTN, and young innovators—let’s dream big, solve boldly, and grow together!",
    link: "https://www.linkedin.com/posts/jerome-melkisidak-970b635b_honored-to-inspire-future-entrepreneurs-activity-7293246929184923648-eTAZ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAAzOs6QBl4ElH2DmrZdk4NB1RH_FXqQKnUI"
  },
  {
    img: p8,
    title: "ClouSec is officially incubated by SSN Incubation Foundation! Excited to fast-track our cloud security solutions for SMEs. Thank you, SSN, for supporting our vision!",
    link: "https://www.linkedin.com/posts/jerome-melkisidak-970b635b_clousec-ssnincubation-cloudsecurity-activity-7243817900468269056-Jasu?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAAzOs6QBl4ElH2DmrZdk4NB1RH_FXqQKnUI"
  },
  {
    img: p3,
    title: "Excited to be the L1 bidder for L&T PT&D's 'Management Information System: Phase III.' Grateful to our team and partners! Big things ahead with ClouSec & Happiediner!",
    link: "https://www.linkedin.com/posts/jerome-melkisidak-970b635b_software-itservices-softwaredevelopment-activity-7241255002952912897-Bl5q?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAAzOs6QBl4ElH2DmrZdk4NB1RH_FXqQKnUI"
  },
  // {
  //   img: news2,
  //   title: "We are thrilled & excited to announce that our team members, Mr. Logeswaran and Mr. Mohamed Faisal, have successfully earned their *AWS Solutions Architect certifications* 🔥 ",
  //   link: "https://www.linkedin.com/posts/jerome-melkisidak-970b635b_awscertification-activity-7218545217790959616-oal7/?utm_source=share&utm_medium=member_android"
  // },
  // {
  //   img: news3,
  //   title: "We are thrilled & excited to announce that our team members, Mr. Logeswaran and Mr. Mohamed Faisal, have successfully earned their *AWS Solutions Architect certifications* 🔥 ",
  //   link: "https://www.linkedin.com/posts/jerome-melkisidak-970b635b_we-are-thrilled-to-share-this-amazing-testimonial-activity-7199999172643602432-2wfk/?utm_source=share&utm_medium=member_android"
  // },
  // {
  //   img: news4,
  //   title: "Ready to transform your cloud security operations? Discover the power of ClouSec today and achieve unparalleled security and compliance for your AWS environment by reaching us at sales@clousec.io ",
  //   link: "https://www.linkedin.com/posts/jerome-melkisidak-970b635b_ciso-cybersecurity-securitymisconfigurations-activity-7217019432592711680-SNnd?utm_source=share&utm_medium=member_android"
  // },
  // {
  //   img: news5,
  //   title: "Welcoming the new joinees Mr. Peter, Mr. Faisal, Mr.Pugal & Mr. Logesh to our Stigmata family. Me & our team are excited to work with you guys ! ",
  //   link: "https://www.linkedin.com/posts/jerome-melkisidak-970b635b_welcoming-the-new-joinees-mr-peter-mr-activity-7196444114136031233-qdYs?utm_source=share&utm_medium=member_android"
  // },
  // {
  //   img: news6,
  //   title: "Board of Study Member of SRM Valliammai Engineering College CSE department was excited to welcome students for an industrial visit at our humble office ",
  //   link: "https://www.linkedin.com/posts/jerome-melkisidak-970b635b_industrialvisit-technology-activity-7176994628116623360-Vndk?utm_source=share&utm_medium=member_android"
  // },
  // {
  //   img: news7,
  //   title: " Waked out of St.Joseph’s @ 2008 with no job, hope and today it’s the 2nd time I go for campus hiring for Stigmata Techno Solutions 🔥 When we figure out our passion, the magic will happen 👌",
  //   link: "https://www.linkedin.com/posts/jerome-melkisidak-970b635b_waked-out-of-stjosephs-2008-with-no-job-activity-7176631864948903936-fbBV?utm_source=share&utm_medium=member_android"
  // },
  // {
  //   img: news8,
  //   title: " ST. JOSEPH'S INSTITUTE OF TECHNOLOGY, OMR (AI & data science department) on developing few scalable POC’s together. Thanks to Precila madam & respected principal sir for having us 🔥\n\nOrdinary person with extraordinary dreams 🔥🔥",
  //   link: "https://www.linkedin.com/posts/jerome-melkisidak-970b635b_mou-activity-7178795486856818690-CX6E?utm_source=share&utm_medium=member_android"
  // },
  // {
  //   img: news9,
  //   title: "The most important thing in life will always be the people who comes as friends and become part of our family 🔥 I strongly believe we can reach sky when the right team is on action 🔥🔥",
  //   link: "https://www.linkedin.com/posts/jerome-melkisidak-970b635b_fullstackwebdevelopment-blockchaindevelopment-activity-7160276670858285056-cnrc?utm_source=share&utm_medium=member_android"
  // },
  // {
  //   img: news10,
  //   title: "Thrilled & with grateful, we would like to share that we were the L1 bidder in getting a new digital / strategic development project from L&T power transmission & distribution IC to perform 'Management Information System : Phase II for entire PT&D EDRC IC .'",
  //   link: "https://www.linkedin.com/posts/jerome-melkisidak-970b635b_thrilled-with-grateful-we-would-like-to-activity-7189237868052078592-blOi?utm_source=share&utm_medium=member_android"
  // },
  // {
  //   img: news11,
  //   title: "we would like to share that we've secured a new Purchase Order from Knit-works to perform data analysis and design an effective, user friendly dashboard (Finance, Production, Animal losses) in Power BI for a dairy farm in Germany.",
  //   link: "https://www.linkedin.com/posts/jerome-melkisidak-970b635b_dataanalytics-dataprocessing-powerbi-activity-7151050480301817856-MpYk?utm_source=share&utm_medium=member_android"
  // }

];



export const productsData = [
  {
    key: 1,
    title: "Healthcare Management Web Application",
    des: "Developed a full-stack web application tailored for healthcare facilities, featuring:",
    list: [
      {
        title: "Patient Data Management",
        description: "Securely store and retrieve patient records with role‑based access controls."
      },
      {
        title: "Visit Token System",
        description: "Generate and manage digital tokens for patient check‑ins, reducing wait times."
      },
      {
        title: "Automated Billing",
        description: "Calculate service‑based dynamic fees and automatically generate invoices at the end of each day."
      },
      {
        title: "Operational Dashboard",
        description: " Interactive executive dashboard offering real‑time insights, including daily revenue, appointment statistics, and service utilization trends."
      },
      {
        title: "Cloud Deployment",
        description: " Deployed on AWS using EC2, RDS, and S3 to ensure scalability, reliability, and data security."
      }
    ],
    link: "904rx4zDDn8",
    url: "https://www.youtube.com/watch?v=904rx4zDDn8"
  },
  {
    key: 2,
    title: "Agricultural Crop Recommendation Platform",
    des: "Built a web application to empower Indian farmers with data‑driven crop planning, featuring:",
    list: [
      {
        title: "Region‑Specific Recommendations",
        description: "Analyze regional climatic data to suggest optimal crops for each month."
      },
      {
        title: "Yield Forecasting",
        description: " Estimate expected yield based on historical weather patterns and soil metrics."
      },
      {
        title: "Enquiry Support",
        description: "Integrated customer support form allows farmers to submit queries and receive expert guidance."
      },
      {
        title: "Responsive Design",
        description: " Intuitive UI that adapts to desktop and mobile devices for on‑the‑field accessibility."
      },
      {
        title: "Cloud Hosting",
        description: "Hosted on AWS with a serverless backend (Lambda, API Gateway) and DynamoDB for efficient, cost‑effective performance."
      }
    ],
    link: "mQ0zuHLDQME",
    url: "https://www.youtube.com/watch?v=mQ0zuHLDQME"
  },
  {
    key: 3,
    title: " ClouSec ",
    des: " The AI-Powered RegTech Platform for Effortless Cloud Compliance ",
    
    
  des1 :"Streamline cloud security and compliance with ClouSec, the intelligent RegTech platform designed for modern businesses. Unlike traditional CSPM tools, ClouSec delivers a unified solution with Security Information and Event Management (SIEM), Cloud Infrastructure Entitlement Management (CIEM) and Cloud Center of Excellence (CCoE) capabilities, providing a comprehensive shield for cloud infrastructures of any scale. ClouSec empowers organizations to meet country specific regulatory standards, automate cloud security operations using AI, and reduce cloud monthly billing.",
    // list: [
    //   {
    //     title: "Region‑Specific Recommendations",
    //     description: "Analyze regional climatic data to suggest optimal crops for each month."
    //   },
    //   {
    //     title: "Yield Forecasting",
    //     description: " Estimate expected yield based on historical weather patterns and soil metrics."
    //   },
    //   {
    //     title: "Enquiry Support",
    //     description: "Integrated customer support form allows farmers to submit queries and receive expert guidance."
    //   },
    //   {
    //     title: "Responsive Design",
    //     description: " Intuitive UI that adapts to desktop and mobile devices for on‑the‑field accessibility."
    //   },
    //   {
    //     title: "Cloud Hosting",
    //     description: "Hosted on AWS with a serverless backend (Lambda, API Gateway) and DynamoDB for efficient, cost‑effective performance."
    //   }
    // ],
    link: "-vLYTijz370",
    url: "https://www.youtube.com/watch?v=-vLYTijz370"
  },
  {
    key: 4,
    title: "Happiedineer ",
    des: "Modernize your Restaurants with Automation & Data driven recommendation.",
    
    
  des1 :"Happiedinner is a Light weight Serverless architecture framework Providing digitalized Wow experience to end customers through, Digital menu's with ordering, Data Driven Recommendation, Digitalized Kitchen's, Last minute deals, Digital Payments.",
    // list: [
    //   {
    //     title: "Region‑Specific Recommendations",
    //     description: "Analyze regional climatic data to suggest optimal crops for each month."
    //   },
    //   {
    //     title: "Yield Forecasting",
    //     description: " Estimate expected yield based on historical weather patterns and soil metrics."
    //   },
    //   {
    //     title: "Enquiry Support",
    //     description: "Integrated customer support form allows farmers to submit queries and receive expert guidance."
    //   },
    //   {
    //     title: "Responsive Design",
    //     description: " Intuitive UI that adapts to desktop and mobile devices for on‑the‑field accessibility."
    //   },
    //   {
    //     title: "Cloud Hosting",
    //     description: "Hosted on AWS with a serverless backend (Lambda, API Gateway) and DynamoDB for efficient, cost‑effective performance."
    //   }
    // ],
    link: "rg03HydYj84",
    url: "https://www.youtube.com/watch?v=rg03HydYj84"
  },

  {
    key: 4,
    title: "HM🟡CLAUSE ",
    des: "A marketing-focused web application to enhance brand engagement at live events, featuring:",
    
    
  // des1 :"Happiedinner is a Light weight Serverless architecture framework Providing digitalized Wow experience to end customers through, Digital menu's with ordering, Data Driven Recommendation, Digitalized Kitchen's, Last minute deals, Digital Payments.",
    list: [
      {
        title: "Event Management",
        description: "Capture event details and organizer information, including a customizable brand cover image."
      },
      {
        title: "Unique Photo Links",
        description: " Generate event-specific URLs for volunteers to take customer photos overlayed with the brand cover."
      },
      {
        title: "Data Collection",
        description: " Collect customer information securely to facilitate personalized follow-ups."
      },
      {
        title: "Instant Sharing",
        description: " Automatically collage photos and enable sharing via WhatsApp or other social media platforms."
      },
      {
        title: "Analytics Dashboard",
        description: " Track engagement metrics, share rates, and user data to measure campaign effectiveness."
      }
      , {
        title: "Cloud Infrastructure",
        description: " Hosted on AWS to ensure reliability and easy scalability."
      }
    ],
    link: "-mBJfymc1QM",
    url: "https://www.youtube.com/watch?v=-mBJfymc1QM"
  },






];
