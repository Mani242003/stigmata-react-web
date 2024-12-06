import React from "react";
import "./CustomerSlide.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomCustmerSlide from "./CustomCustmerSlide/CustomCustmerSlide";
import img1 from "../../assets/images/TechExperts/aws.png";
import img2 from "../../assets/images/TechExperts/atlassian.png";
import img3 from "../../assets/images/TechExperts/openai.png";
import img4 from "../../assets/images/TechExperts/razorpay.png";
import img5 from "../../assets/images/TechExperts/PowerBi.png";
import img6 from "../../assets/images/TechExperts/reactjs.png";
import img7 from "../../assets/images/TechExperts/ReatNative.png";
import img8 from "../../assets/images/TechExperts/javascript.png";
import img9 from "../../assets/images/TechExperts/java.png";
import img10 from "../../assets/images/TechExperts/Amplify.png";
import img11 from "../../assets/images/TechExperts/node.png";
import img12 from "../../assets/images/TechExperts/aspnet.jpg";
import img13 from "../../assets/images/TechExperts/SQL.jpg";
import img14 from "../../assets/images/TechExperts/Kubermets.png";

import Count from "../Count/Count";
import News from "../News/News";

const CustomerSlide = () => {
  const images = [
    { img: img1, w: 100 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5, w: 100 },
    { img: img6, w: 100 },
    { img: img7, w: 100 },
    { img: img8, w: 80 },
  ];
  const imgaes2 = [
    { img: img9, w: 100 },
    { img: img10, w: 120 },
    { img: img11, w: 100 },
    { img: img12, w: 100 },
    { img: img13 },
    { img: img14 },
  ];
  const settings1 = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 432, // Mobile devices
        settings: {
    speed: 4000,
    autoplay: false,

    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
    autoplay: true,
    

    // Show 1 slide
        }
      },
      {
        breakpoint: 885, // Tablets
        settings: {
          slidesToShow: 3, 
          speed: 4000,
          autoplay: false,
      
          dots: false,
          infinite: true,
          // speed: 500,
          slidesToScroll: 2,
          autoplay: true,
          
      // Show 3 slides
        }
      },
      // {
      //   breakpoint: 1024, // Laptops
      //   settings: {
      //     slidesToShow: 5, // Show 5 slides
      //   }
      // },
      // {
      //   breakpoint: Infinity, // Larger screens
      //   settings: {
      //     slidesToShow: 7, // Show 7 slides
      //   }
      // }
    ],
  };
  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    rtl: true,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 432, // Mobile devices
        settings: {
    speed: 4000,
    autoplay: false,

    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
    autoplay: true,
    

    // Show 1 slide
        }
      },
      {
        breakpoint: 885, // Tablets
        settings: {
          slidesToShow: 3, 
          speed: 4000,
          autoplay: false,
      
          dots: false,
          infinite: true,
          // speed: 500,
          slidesToScroll: 2,
          autoplay: true,
          
      // Show 3 slides
        }
      },
      // {
      //   breakpoint: 1024, // Laptops
      //   settings: {
      //     slidesToShow: 5, // Show 5 slides
      //   }
      // },
      // {
      //   breakpoint: Infinity, // Larger screens
      //   settings: {
      //     slidesToShow: 7, // Show 7 slides
      //   }
      // }
    ],
  };
  return (
    <section className="C_S-wrapper">
      <div className="C_S-container">
        <div className="C_S-headerConatiner">
          <span className="C_S-title">Our Areas of Experts</span>
          <div className="C_S-seperateLine"></div>
        </div>
        <div className="C_S-topRunSlider">
          <Slider {...settings1}>
            {images.map((data, i) => {
              // console.log("maonio",data.img);
              return (
                <CustomCustmerSlide
                  key={i}
                  img={data.img}
                  width={data.w ? data.w : 170}
                />
              );
            })}
          </Slider>
        </div>

        <div className="C_S-bottomRunSlider" style={{paddingBottom:'2rem'}}>
          <Slider {...settings2}>
            {imgaes2.map((data, i) => {
              // console.log("maonio", data.img);
              return (
                <CustomCustmerSlide
                  key={i}
                  img={data.img}
                  width={data.w ? data.w : 170}
                />
              );
            })}
          </Slider>
        </div>
        <Count />
        <News />
      </div>
    </section>
  );
};

export default CustomerSlide;
