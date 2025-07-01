import React from "react";
import "./News.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsCustomCard from "./NewsCustomCard/NewsCustomCard";
import { linkedInData } from "../../constant";

const News = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="Newscontainer">
      <div className="NewsMiddel" id="news">
        <div className="NewsMiddelHeaderContainer" data-aos="fade-up">
          <span className="NewsMiddelHeadertext1">WEEKLY UPDATES</span>
          <span className="NewsMiddelHeadertext2">LATEST NEWS</span>
          <div className="NewsMiddelHeaderdivider"></div>
        </div>
        <Slider {...settings} className="NewsSlider" style={{ width: "100%",display: "flex" ,alignItems: "center", justifyContent: "center"}}>
          {linkedInData.map((news, index) => (
            <NewsCustomCard
              key={index}
              img={news.img}
              titel={news.title}
              link={news.link}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default News;
