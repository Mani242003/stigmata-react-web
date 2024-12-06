import React, { useRef } from "react";
import logo1 from "../../assets/images/Joined forece/joinedForceKineWorks.jpeg";
import logo2 from "../../assets/images/Joined forece/L&T.jpg";
import logo3 from "../../assets/images/Joined forece/mx_techies_logo.jpg";
import logo4 from "../../assets/images/Joined forece/joinedForceAWS.jpeg";

import Slider from "react-slick";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonal.scss";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import avatar from "../../assets/images/avatar.png";
import customer from "../../assets/images/customerSatis.png";
const Testimonal = () => {
  // let sliderRef = useRef(null);
  let sliderRef1 = useRef(null);

  // const next = () => {
  //   sliderRef.slickNext();
  // };
  // const previous = () => {
  //   sliderRef.slickPrev();
  // };
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
  // };

  const next1 = () => {
    sliderRef1.slickNext();
  };
  const previous1 = () => {
    sliderRef1.slickPrev();
  };
  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="Testimonal-wrapper">
      <div className="Testimonal-container">
        <div className="JoinedpattnerrOutterContainer">
          <div className="JoinedpattnerrContainer" data-aos="fade-up">
            <div className="JoinedpattnerHeaderContainer">
              <span>Joined Force With</span>
            </div>
            <div className="JoinedpattnerrSliderContainer">
              {/* <Slider
                ref={(slider) => {
                  sliderRef = slider;
                }}
                {...settings}
              > */}
              <div key={1}>
                <img src={logo1} alt="" />
              </div>
              <div key={2}>
                <img src={logo2} alt="" />
              </div>
              <div key={3}>
                <img src={logo3} alt="" />
              </div>
              <div key={4}>
                <img src={logo4} alt="" />
              </div>
              {/* </Slider> */}
              {/* <div
                style={{ textAlign: "end" }}
                className="JoinedpattnerrButtonContainer"
              >
                <button className="button" onClick={next}>
                  <FaArrowLeft />
                </button>
                <button className="button" onClick={previous}>
                  <FaArrowRight />
                </button>
              </div> */}
            </div>
        
          </div>
        </div>
        <div className="testimonialMainContent">
          <div className="testimonialLeftConatiner" >
            <span className="T_title">TESTIMONIALS</span>
            <span className="T_mainTitle">
              100% Customer <br /> References
            </span>
            <span className="T_des">
              We think we are doing a great job. Our customers think so, too!
            </span>
          </div>
          <div className="testimonialRightConatiner">
            <div className="testimonialSlider" data-aos="fade-up">
              <Slider
                ref={(slider) => {
                  sliderRef1 = slider;
                }}
                {...settings1}
              >
                <TestimonialCard
                  key={1}
                  content="Young energetic team capable of bringing our inventory software dream LIVE ! I would definitely recommend this team to my client !"
                  name="GraceSoft Solutions"
                  position="Director"
                />
                <TestimonialCard
                  key={2}
                  content="Always get inspire seeing these young team handling so many clients with 100% efforts. They always like to delight the customers. They support me with internship, technical workshops and project works. They educate students with high flexibility and positive feedback. Also they are a strong web and mobile expert team, delighting customers across globe. I recommend Stigmata Techno Solutions !"
                  name="Edify Techno Solutions"
                  position="Director"
                />
                <TestimonialCard
                  key={3}
                  content="It is with great pleasure I write the testimonial for Stigmata Techno Solutions. Being in the dental field, when I set out to develop a programme for my research work, I had my trepidations if I would be able to find a programme developer team which who could understand my needs, thought process and be able to convert them into reality. Mr. Jerome and Mr. Ayyanar Raja were more than ready to make my research proposal a reality. All throughout the multiple virtual meetings we had, there was a lot of ease and mutual learning. What I initially thought would be a daunting task became a very smooth and enjoyable process. Thank you team Stigmata for all your efforts!!"
                  name="Dr. Annapurna Kannan "
                  position="Sri Ramachandra Faculty of Dental Sciences"
                />
                <TestimonialCard
                  key={4}
                  content="Stigmata Techno Solutions, our engineering partner, consistently delivers high-quality development services. They are willing to embark on endeavours and initiatives when we require it. This group is responsible for ensuring that our projects receive the attention they deserve. Their rigour and expertise add value and minimize delays. Stigmata continuously provides customers with intelligent and efficient service. I would strongly recommend anyone contemplating engineering or development services to contact Stigmata."
                  name="Mrs. Brinda, CEO"
                  position="DevOpsLabs Private Ltd."
                />
                <TestimonialCard
                  key={5}
                  content="I am delighted to share my experience with Stigmata Techno Solutions, the experts Mr. Jerome Melkisidak, Mr. Praveen Kumaresan and Miss Ananthi have done the incredible work for PTD EDRC MIS Enhancement Work, from initial consultation to the final implementation, their team displayed an exceptional level of professionalism, expertise, and dedication."
                  name="Mr. Vivek Singh"
                  position="Common-EDRC Chennai - PTD L&T construction "
                />
                <TestimonialCard
                  key={6}
                  content=" Your team's ability to adapt to our evolving needs and provide innovative solutions has been commendable. Thank you once again for your outstanding work. We look forward to continuing our professional relationship and achieving more milestones together."
                  name="E.Rama Sai"
                  position="Assistant Engineering Manager, L&T Construction – PT&D IC"
                />
              </Slider>
            </div>
            <div
              style={{ textAlign: "end" }}
              className="testimonialCardButtonContainer"
            >
              <button className="button" onClick={next1}>
                <FaArrowLeft />
              </button>
              <button className="button" onClick={previous1}>
                <FaArrowRight />
              </button>
            </div>

            <div className="TestimonialSVG">
              <FaQuoteLeft />
            </div>
          </div>
        </div>
        {/* <div className="testimonialFinalOutterContainer">
          <div className="testimonialFinal">
            <div className="TF_imgConatiner">
              <img src={customer} alt="" />
            </div>
            <div className="TF_right">
              <span className="TF_title">CSS</span>
              <span className="TF_mainTitle">
                We Have Delivered Supreme Customer Satisfaction!
              </span>
              <span className="TF_des">
                Our customers rate our service satisfaction levels on a
                quarterly basis, which allows us to enhance our strategies and
                improve performance. Find out the score from our latest Customer
                Satisfaction Survey.
              </span>
              <div className="TF_buttonContainer">
                <Link>
                  Check the Score <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonal;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
        display: "none",
      }}
      onClick={onClick}
    />
  );
}

const TestimonialCard = ({ content, name, position }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
      className="TestimonialCard"
    >
      <span style={{ fontWeight: "500", lineHeight: "1.5rem" }}>{content}</span>
      <div
        className="bottomTestimoinalContainer"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginTop: "2rem",
        }}
      >
        <div className="bottomTestimonialLeft">
          <img
            src={avatar}
            alt=""
            style={{ width: "50px", borderRadius: "50px" }}
          />
        </div>

        <div
          className="bottomTestimonialRight"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <span
            className="T_bottomRightTitle"
            style={{
              fontWeight: "900",
              letterSpacing: "1px",
              fontSize: "20px",
              color: "black",
              opacity: "0.7",
            }}
          >
            {" "}
            {name}
          </span>
          <span className="T_bottomRightDes">{position}</span>
        </div>
      </div>
    </div>
  );
};
