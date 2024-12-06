import React from "react";
import "./HoverCard.scss";
import LAndT1 from "../../assets/images/trustCustomer/landT2.jpg";
import LAndT2 from "../../assets/images/trustCustomer/LandT1.jpg";

import img1 from "../../assets/images/trustCustomer/l1.jpg";
import img2 from "../../assets/images/trustCustomer/l2.jpg";
import img3 from "../../assets/images/trustCustomer/l3.jpg";
import img4 from "../../assets/images/trustCustomer/l4.jpg";
import img5 from "../../assets/images/trustCustomer/l5.jpg";
// import img6 from "../../assets/images/trustCustomer/l6.jpg";
import img7 from "../../assets/images/trustCustomer/l7.png";
import img8 from "../../assets/images/trustCustomer/l8.jpg";
// import img9 from "../../assets/images/trustCustomer/l9.png";
// import img10 from "../../assets/images/trustCustomer/l10.png";
import img11 from "../../assets/images/trustCustomer/11.png";
import img12 from "../../assets/images/trustCustomer/L1213.png";
import img13 from "../../assets/images/trustCustomer/L14.png";
import img14 from "../../assets/images/trustCustomer/L15.png";
// import img15 from "../../assets/images/trustCustomer/L16.jpg";
// import img16 from "../../assets/images/trustCustomer/L17.jpg";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const HoverCard = () => {
  const images = [
    { img: img8 },

    { img: img2 },
    { img: LAndT1, w: 200 },

    { img: img3 },
    { img: LAndT2, w: 200 },

    // { img: img4 },
    { img: img5 },

    // { img: img6, w: 110 },
    { img: img7 },
    { img: img1 },


    // { img: logo1 },

    { img: img11 },
    { img: img12 ,w:180},
    { img: img13 ,w:160},
    // { img: logo1 },

    { img: img14 },
    // { img: img10, w: 100 },
    // { img: img9 },


    // { img: img15, w: 100 },
    // { img: img16, w: 100 },
    // { img: logo1 },
  ];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 12,
    autoplay: true,
    speed: 30000,
    autoplaySpeed: 0,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 400, // Mobile devices
        settings: {
          slidesToShow: 1,
          speed: 4000,
          autoplay: false,

          dots: false,
          infinite: true,
          // speed: 500,
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,

          // Show 1 slide
        },
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
        },
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
    // responsive: [
    //   {
    //     breakpoint: 400, // Adjust breakpoint as needed
    //     settings: {
    //       slidesToShow: 1, // Show 1 slide on screens smaller than 768px
    //     }
    //   },
    //   {
    //     breakpoint: 1024, // Adjust breakpoint as needed
    //     settings: {
    //       slidesToShow: 2, // Show 2 slides on screens between 768px and 1024px
    //     }
    //   },
    //   {
    //     breakpoint: Infinity, // Default settings for larger screens
    //     settings: {
    //       slidesToShow: 5, // Show 3 slides on screens larger than 1024px
    //     }
    //   }
    // ],

    style: {
      display: "flex",
      width: "100%",
      height: "100%",
    },
  };

  const getMenuStyle = () => {
    if (document.documentElement.clientWidth <= 800) {
      // console.log(!menuOpened);
      return 1;
    }
    if (!document.documentElement.clientWidth <= 800) {
      // console.log(!menuOpened);
      return 4;
    }
  };

  const getSpeedStyle = () => {
    if (document.documentElement.clientWidth <= 800) {
      // console.log(!menuOpened);
      return 1000;
    }
    if (!document.documentElement.clientWidth <= 800) {
      // console.log(!menuOpened);
      return 4;
    }
  };

  return (
    <div className="Custom_hoverCard-container">
      {/* <div className="hoverCardHeaderContainer">
        <span>Our Trusted Customers</span>
      </div> */}
      <div className="hoverCardLogoConatiner">
        <Slider {...settings} >
          {images.map((data, i) => {
            // console.log("maonio",data.img);
            return (
              <div className="hoverLogoConatiner">
                {" "}
                <img src={data.img} alt=""  width={140} style={{marginLeft:'25%'}} />
                {/* width={data.w ? data.w : 50} */}
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default HoverCard;
