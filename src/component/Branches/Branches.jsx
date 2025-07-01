import React, { useRef } from "react";
import "./Branches.scss";
import img1 from "../../assets/images/brains/brain1.jpeg";
import img2 from "../../assets/images/branches2.jpeg";
import img3 from "../../assets/images/branches3.jpeg";
import img4 from "../../assets/images/brains/naveen.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Branches = () => {
  const sliderRef = useRef(null);

 const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 1000,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024, // Tablet and below
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768, // Mobile and below
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};


  return (
    <section className="branches-wrapper">
      <div className="branchesContainer">
        <div className="TB_headerConatiner">
          <span className="TB_headerSmallTitel">GREAT TEAM MEMBERS</span>
          <span className="TB_headerBigTitel">
            The People Behind Our Success
          </span>
        </div>

        <div className="profileConainer" style={{ width: "100%" }}>
          <Slider {...settings} ref={sliderRef} >
            <div>
              <B_CustomCard
                name="Jerome Melkisidak, B.E, M.B.A "
                ceoText="CEO"
                url={img1}
                position="Board of Study Member : CSE, MCA "
                clgName="(SRM Valliammai Engineering College)"
                addText="Ex - TNQ Books & Journals"
              />
            </div>

            <div>
              <B_CustomCard
                name="Mr. Youssef Azad"
                url={img2}
                position="Business Development & Client Relationship"
                boldText="Canada"
              />
            </div>

            <div>
              <B_CustomCard
                name="Mr. Lawrence"
                url={img3}
                position="Business Development Head & Client Relationship"
                boldText="Zimbabwe"
              />
            </div>
            <div>
              <B_CustomCard
                name="Mr. Naveen
"
                url={img4}
                position="Business Development & Client Relationship"
                boldText="Canada"
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Branches;

const B_CustomCard = ({
  name,
  url,
  position,
  boldText,
  addText,
  ceoText,
  clgName,
}) => {
  return (
    <div className="B_CustomCardContainer">
      <div className="gradiant"></div>
      <div className="profileDown">
        <img src={url} alt={name} />
        <div className="profileIntro">
          <span className="profileName">{name}</span>
          {ceoText && <span className="profileName">{ceoText}</span>}

          <span className="profileDes">
            {position}
            <br />
            {clgName && (
              <span className="profileDes" style={{ color: "black" }}>
                {clgName}
              </span>
            )}
            <br />
            {boldText && <strong>{boldText}</strong>}
          </span>

          {addText && <span className="profileAddText">{addText}</span>}
        </div>
      </div>
    </div>
  );
};
