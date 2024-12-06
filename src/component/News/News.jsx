import React from "react";
import "./News.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsCustomCard from "./NewsCustomCard/NewsCustomCard";

import news1 from "../../assets/images/news/n1.jpg";
import news2 from "../../assets/images/news/n2.jpg";
import news3 from "../../assets/images/news/n3.jpg";
import news4 from "../../assets/images/news/n4.jpg";
import news5 from "../../assets/images/news/n5.jpg";



import news6 from "../../assets/images/news/news3.jpg";
import news7 from "../../assets/images/news/news7.jpg";
import news8 from "../../assets/images/news/news8.jpg";
import news9 from "../../assets/images/news/news9.jpg";
import news10 from "../../assets/images/news/img3.jpg";

import news11 from "../../assets/images/news/img2.jpg";




// import img4 from "../../assets/images/news/news4.jpg";
// import img5 from "../../assets/images/news/img2.jpg";






import { Link } from "react-router-dom";

const News = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",

    responsive: [
      {
        breakpoint: 430, // Mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

          // Show 1 slide
        },
      },
      {
        breakpoint: 885, // Tablets
        settings: {
          slidesToShow: 2,

          // speed: 500,
          slidesToScroll: 1,

          // Show 3 slides
        },
      },
      {
        breakpoint: 1024, // Laptops
        settings: {
          slidesToShow: 3, // Show 5 slides
        },
      },
      {
        breakpoint: Infinity, // Larger screens
        settings: {
          slidesToShow: 1, // Show 7 slides
        },
      },
    ],
  };
  return (
    <div className="Newscontainer" >
      <div className="NewsMiddel" id="news">
        <div className="NewsMiddelHeaderContainer" data-aos="fade-up">
          <span className="NewsMiddelHeadertext1">WEEKLY UPDATES</span>
          <span className="NewsMiddelHeadertext2">LATEST NEWS</span>
          <div className="NewsMiddelHeaderdivider"></div>
        </div>
        <Slider {...settings}>
        <div  >
            <NewsCustomCard
              img={news1}
              titel="ClouSec empowers businesses with centralized visibility, comprehensive security insights, and efficient audit readiness. Stay ahead in the ever-evolving landscape of cloud security with ClouSec by reaching out 📩 sales@clousec.io📩"
              // date="10 Aug, 2024"
              // name="Jerome Melkisidak"
              link="https://www.linkedin.com/posts/jerome-melkisidak-970b635b_cloudsecurity-cspm-ccoe-activity-7220051999277400065-oqIV?utm_source=share&utm_medium=member_android"
            />
            
          </div>
          <div  >
            <NewsCustomCard
              img={news2}
              titel="We are thrilled & excited to announce that our team members, Mr. Logeswaran and Mr. Mohamed Faisal, have successfully earned their *AWS Solutions Architect certifications* 🔥 "
              // date="10 Aug, 2024"
              // name="Jerome Melkisidak"
              link="https://www.linkedin.com/posts/jerome-melkisidak-970b635b_awscertification-activity-7218545217790959616-oal7/?utm_source=share&utm_medium=member_android"
            />
            
          </div>
          <div  >
            <NewsCustomCard
              img={news4}
              titel="We are thrilled & excited to announce that our team members, Mr. Logeswaran and Mr. Mohamed Faisal, have successfully earned their *AWS Solutions Architect certifications* 🔥 "
              // date="10 Aug, 2024"
              // name="Jerome Melkisidak"
              link="https://www.linkedin.com/posts/jerome-melkisidak-970b635b_we-are-thrilled-to-share-this-amazing-testimonial-activity-7199999172643602432-2wfk/?utm_source=share&utm_medium=member_android"
            />
            
          </div>
          
          <div  >
            <NewsCustomCard
              img={news3}
              titel="Ready to transform your cloud security operations? Discover the power of ClouSec today and achieve unparalleled security and compliance for your AWS environment by reaching us at sales@clousec.io "
              // date="10 Aug, 2024"
              // name="Jerome Melkisidak"
              link="https://www.linkedin.com/posts/jerome-melkisidak-970b635b_ciso-cybersecurity-securitymisconfigurations-activity-7217019432592711680-SNnd?utm_source=share&utm_medium=member_android"
            />
            
          </div>
          <div  >
            <NewsCustomCard
              img={news5}
              titel="Welcoming the new joinees Mr. Peter, Mr. Faisal, Mr.Pugal & Mr. Logesh to our Stigmata family. Me & our team are excited to work with you guys ! "
              // date="10 Aug, 2024"
              // name="Jerome Melkisidak"
              link="https://www.linkedin.com/posts/jerome-melkisidak-970b635b_welcoming-the-new-joinees-mr-peter-mr-activity-7196444114136031233-qdYs?utm_source=share&utm_medium=member_android"
            />
            
          </div>
          <div  >
            <NewsCustomCard
              img={news6}
              titel="Board of Study Member of SRM Valliammai Engineering College CSE department was excited to welcome students for an industrial visit at our humble office "
              // date="10 Aug, 2024"
              // name="Jerome Melkisidak"
              link="https://www.linkedin.com/posts/jerome-melkisidak-970b635b_industrialvisit-technology-activity-7176994628116623360-Vndk?utm_source=share&utm_medium=member_android"
            />
            
          </div>
          <div  >
            <NewsCustomCard
              img={news7}
              titel=" Waked out of St.Joseph’s @ 2008 with no job, hope and today it’s the 2nd time I go for campus hiring for Stigmata Techno Solutions 🔥 When we figure out our passion, the magic will happen 👌"
              // date="10 Aug, 2024"
              // name="Jerome Melkisidak"
              link="https://www.linkedin.com/posts/jerome-melkisidak-970b635b_waked-out-of-stjosephs-2008-with-no-job-activity-7176631864948903936-fbBV?utm_source=share&utm_medium=member_android"
            />
            
          </div>
          <div  >
            <NewsCustomCard
              img={news8}
              titel=" ST. JOSEPH'S INSTITUTE OF TECHNOLOGY, OMR (AI & data science department) on developing few scalable POC’s together. Thanks to Precila madam & respected principal sir for having us 🔥

Ordinary person with extraordinary dreams 🔥🔥"
              // date="10 Aug, 2024"
              // name="Jerome Melkisidak"
              link="https://www.linkedin.com/posts/jerome-melkisidak-970b635b_mou-activity-7178795486856818690-CX6E?utm_source=share&utm_medium=member_android"
            />
            
          </div>
          <div  >
            <NewsCustomCard
              img={news9}
              titel="The most important thing in life will always be the people who comes as friends and become part of our family 🔥 I strongly believe we can reach sky when the right team is on action 🔥🔥"
              // date="10 Aug, 2024"
              // name="Jerome Melkisidak"
              link="https://www.linkedin.com/posts/jerome-melkisidak-970b635b_fullstackwebdevelopment-blockchaindevelopment-activity-7160276670858285056-cnrc?utm_source=share&utm_medium=member_android"
            />
            
          </div>
          <div  >
            <NewsCustomCard
              img={news10}
              titel="Thrilled & with grateful, we would like to share that we were the L1 bidder in getting a new digital / strategic development project from L&T power transmission & distribution IC to perform 'Management Information System : Phase II for entire PT&D EDRC IC .'"
              // date="10 Aug, 2024"
              // name="Jerome Melkisidak"
              link="https://www.linkedin.com/posts/jerome-melkisidak-970b635b_thrilled-with-grateful-we-would-like-to-activity-7189237868052078592-blOi?utm_source=share&utm_medium=member_android"
            />
            
          </div>
          <div  >
            <NewsCustomCard
              img={news11}
              titel="we would like to share that we've secured a new Purchase Order from Knit-works to perform data analysis and design an effective, user friendly dashboard (Finance, Production, Animal losses) in Power BI for a dairy farm in Germany."
              // date="10 Aug, 2024"
              // name="Jerome Melkisidak"
              link="https://www.linkedin.com/posts/jerome-melkisidak-970b635b_dataanalytics-dataprocessing-powerbi-activity-7151050480301817856-MpYk?utm_source=share&utm_medium=member_android"
            />
            
          </div>
   
          
      
        </Slider>
      </div>
    </div>
  );
};

export default News;
