import React from "react";
import "./ServicesMenu.scss";
import { FaAngleRight, FaChevronDown } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { BiWorld } from "react-icons/bi";

import { GrServices } from "react-icons/gr";
import { FaBuilding } from "react-icons/fa";

const ServicesMenu = ({ route }) => {
  return (
    <div className="SMenu">
      <div className="menuButton">
        {route.name} <FaChevronDown />{" "}
      </div>
      <div className="CompanySubRouteContainer">
        <div className="subRouteOuterContainer">
          {route.subRoutes.map((subRoute, i) => (
            <SubRouteLinkContainer key={i} data={subRoute} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesMenu;

const SubRouteLinkContainer = ({ data }) => {
  let icon;

  if (data.id === 1) {
    icon = <GrServices />;
  } else if (data.id === 2) {
    icon = <FaBuilding />;
  } else {
    icon = <BiWorld />;
  }
  // console.log("maniainaaiaia", data);
  return (
    <div className="SubRouteLinkContainer">
      <div className="subRouteIconContaner">
        {icon}

        <span className="SubRouteLinkTitel">{data.titel}</span>
      </div>
      <div className="subRouteSvgAndTextContainer">
        <Link to={data.url1}>{data.link1}</Link>
        <FaAngleRight />
      </div>
      <div className="subRouteSvgAndTextContainer">
        <Link to={data.url2}>{data.link2}</Link>
        <FaAngleRight />
      </div>
      <div className="subRouteSvgAndTextContainer">
        <Link to={data.url3}>{data.link3}</Link>
        <FaAngleRight />
      </div>
      {/* {data.id === 1 ? (
        <>
          <div className="subRouteSvgAndTextContainer">
            <Link to={data.url4}>{data.link4}</Link>
            <FaAngleRight />
          </div>
          <div className="subRouteSvgAndTextContainer">
            <Link to={data.url5}>{data.link5}</Link>
            <FaAngleRight />
          </div>
          <div className="subRouteSvgAndTextContainer">
            <Link to={data.url6}>{data.link6}</Link>
            <FaAngleRight />
          </div>
        </>
      ) : (
        <></>
      )} */}

      {/* 
     
     
     
      */}
    </div>
  );
};
