import React from "react";
import "./TB_CustomCard.scss";
// import img from "../../../assets/images/brains/brain1.jpeg";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";

const TB_CustomCard = ({ data }) => {
  return (
    <div className="TB_CustomCard">
      <div className="TB_CC_mainContent">
        <div className="TB_CC_imgContainer">
          <img src={data.img} alt="" />
          <span className="TB_CC_name">{data.name}</span>
          <span className="TB_CC_position">{data.position}</span>
        </div>
        <div className="TB_CC_contentBox">
          {data.skills.map((skill) => (
            <ProgressBar
              completed={skill.precentage}
              customLabel={skill.skill}
              margin="10px"
              baseBgColor="white"
              labelSize="10px"
              bgColor="#FFFFFF"
              baseBgColor ="silver"
              labelColor="black"
              labelAlignment="center"
            height="15px"

            />
          ))}
        </div>
      </div>
      {/* <div className="TB_CC_socialLinks">
        <Link>
          <FaFacebookF />
        </Link>
        <Link>
          <FaInstagram />
        </Link>
        <Link>
          <FaLinkedinIn />
        </Link>
        <Link>
          <FaXTwitter />
        </Link>
      </div> */}
    </div>
  );
};

export default TB_CustomCard;
