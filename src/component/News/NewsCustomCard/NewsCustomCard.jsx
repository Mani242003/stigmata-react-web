import React from "react";
import "./NewsCustomCard.scss";
import { Link } from "react-router-dom";
import { MdDateRange } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { GoArrowRight } from "react-icons/go";

const NewsCustomCard = ({ img, titel, date, link, name }) => {
  return (
    <div className="N_C_C-conatiner"  data-aos="fade-up">
      <div className="N_C_C-imgConatiner">
        <img src={img} alt="" />
      </div>
      <div className="N_C_C-text-container">
        <div className="N_C_C-top">
          {/* <div className="N_C_C-top_Text">
            <MdDateRange />
            <span> {date}</span>
          </div>
          <div className="N_C_C-top_Text">
            <RxAvatar />
            <span> {name}</span>
          </div> */}
        </div>
        <div className="N_C_C-middel">
          <span>{titel}</span>
        </div>
        <div className="N_C_C-bottom">
          <a href={link}>Read Deatils </a>
          <GoArrowRight />
        </div>
      </div>
    </div>
  );
};

export default NewsCustomCard;
