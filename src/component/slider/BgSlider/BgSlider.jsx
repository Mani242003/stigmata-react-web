import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sli1 from "../../../assets/homeBg/HomeBgSlide1.jpg";
import sli2 from "../../../assets/homeBg/HomeBgSlide2.jpg";
import sli3 from "../../../assets/homeBg/HomeBgSlide3.jpg";
import sli4 from "../../../assets/homeBg/HomeBgSlide4.jpg";




import ExampleCarouselImage from "../ExampleCarouselImage";

const BgSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    speed: 1500, 
    autoplay: true,
    autoplaySpeed: 5000, 
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div style={{ height: "680px", width: "100%", overflow: "hidden" }}>
      <Slider {...settings}>
        <div>
          <ExampleCarouselImage
            text="Super charge your Business with "
            text2="Artificial Intelligences."
            text3="Unlock next-level business growth with AI solutions. Let's go!"
            link="/blog"
            img={sli1}
          />
        </div>
        <div>
          <ExampleCarouselImage
            text="Thinking of Cloud Migration, DevOps,"
            text2=" Serverless framework Architecture?"
            text3="OUR Experts are Waiting!"
            link="/blog"
            img={sli2}
          />
        </div>
        <div>
          <ExampleCarouselImage
            text="Expert in Software "
            text2="Development"
            text3="ERP, Workflow, Plugins, API development."
            link="/blog"
            img={sli3}
          />
        </div>
        <div>
          <ExampleCarouselImage
            text="You Imagine a Digital Future, "
            text2="We make it a Reality!"
            text3="Data Analytics, Image / Video Analytics, Agile methodology."
            link="/blog"
            img={sli4}
          />
        </div>
      </Slider>
   
    </div>
  );
};

export default BgSlider;