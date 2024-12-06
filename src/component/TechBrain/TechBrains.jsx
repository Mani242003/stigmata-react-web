import React, { useRef } from "react";
import "./TechBrains.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TB_CustomCard from "./TB_CustomCard/TB_CustomCard";

import { ourBrains } from "../../constant";

const TechBrains = () => {
  let sliderRef1 = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const next1 = () => {
    sliderRef1.slickNext();
  };
  const previous1 = () => {
    sliderRef1.slickPrev();
  };
  // console.log("ourBrains", ourBrains);
  return (
    <section className="techBrains-wrapper">
      <div className="TB_conatiner">
        <div className="TB_headerConatiner">
          <span className="TB_headerSmallTitel">GREAT TEAM MEMBERS</span>
          <span className="TB_headerBigTitel">WE HAVE EXPERT TEAM</span>
        </div>
        <div className="TB_outerSliderCintainer">
       
          <div
            className="TB_sliderContainer"
           
          >
            {/* <Slider
              {...settings}
              ref={(slider) => {
                sliderRef1 = slider;
              }}
            > */}
              {ourBrains.map((data) => (
                <TB_CustomCard key={1} data={data} />
              ))}
            {/* </Slider> */}
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default TechBrains;
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
