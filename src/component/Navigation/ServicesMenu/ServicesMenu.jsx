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
      <div className="subRouteContainer">
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
        <Link to={data.url1} style={data.id === 2 ? { cursor:"default" ,color:'black' } : {}}>{data.link1}</Link>
        {data.id === 1 ? (
          <>
            <FaAngleRight />
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="subRouteSvgAndTextContainer">
        <Link to={data.url2} style={data.id === 2 ? { cursor:"default" ,color:'black' } : {}}>{data.link2}</Link>
        {data.id === 1 ? (
          <>
            <FaAngleRight />
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="subRouteSvgAndTextContainer">
        <Link to={data.url3} style={data.id === 2 ? { cursor:"default" ,color:'black' } : {}}>{data.link3}</Link>
        {data.id === 1 ? (
          <>
            <FaAngleRight />
          </>
        ) : (
          <></>
        )}
      </div>

      <div className="subRouteSvgAndTextContainer">
        <Link to={data.url4} style={data.id === 2 ? { cursor:"default" ,color:'black' } : {}}>{data.link4}</Link>
        {data.id === 1 ? (
          <>
            <FaAngleRight />
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="subRouteSvgAndTextContainer">
        <Link to={data.url5} style={data.id === 2 ? { cursor:"default" ,color:'black' } : {}}>{data.link5}</Link>
        {data.id === 1 ? (
          <>
            <FaAngleRight />
          </>
        ) : (
          <></>
        )}
      </div>

      <div className="subRouteSvgAndTextContainer">
        <Link to={data.url6} style={data.id === 2 ? { cursor:"default" ,color:'black' } : {}}>{data.link6}</Link>
        {data.id === 1 ? (
          <>
            <FaAngleRight />
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="subRouteSvgAndTextContainer">
        <Link to={data.url7} style={data.id === 2 ? { cursor:"default" ,color:'black' } : {}}>{data.link7}</Link>
        {data.id === 1 ? (
          <>
            <FaAngleRight />
          </>
        ) : (
          <></>
        )}
      </div>

      {/* 
     
     
     
      */}
    </div>
  );
};
