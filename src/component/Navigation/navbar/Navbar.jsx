import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { TfiWorld } from "react-icons/tfi";
import { IoIosSearch } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import Marquee from "react-fast-marquee";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import { Link } from "react-router-dom";
import ServicesMenu from "../ServicesMenu/ServicesMenu";
import ProductMenu from "../ProductMenu/ProductMenu";
import ComapnyMenu from "../ComapanyMenu/ServicesMenu";
import Insights from "../Insights/ServicesMenu";
import OptimizedImage from "../../common/OptimizedImage";
import logo from "../../../assets/images/logo.png";

const Navbar = ({
  toggleDrawer,
  toggleGalleryDrawer,
  routes,
  homeMarque,
  isOpen,
}) => {

  

    const navigate = useNavigate();
  const [marqueIsOpen, setmarqueIsOpen] = useState(true);
  return (
    <section className="nav_wrapper">
      <div className="nav_container">
        {homeMarque === "true" ? (
          <>
            {marqueIsOpen ? (
              <div className="NavTopAnnouncement">
                <Marquee speed={60} gradient={false}>
                  <span className="marqueeText">
                    {" "}
                    We provide expert IT consultancy, software development, and
                    support for businesses of all sizes. Contact us today!
                  </span>
                </Marquee>
                <div className="NAvTopCloseSvg">
                  <FaTimes
                    onClick={() => {
                      setmarqueIsOpen(false);
                    }}
                  />
                </div>
              </div>
            ) : (
              <></>
            )}
          </>
        ) : (

          <>
          {marqueIsOpen ? (
            <div className="NavTopAnnouncement CustomNavTopAnnouncement ">
               <span className="StaticText">
                  {" "}
                   "Driven by Innovation, United by Expertise"
                </span>
              <div className="NAvTopCloseSvg">
                <FaTimes
                  onClick={() => {
                    setmarqueIsOpen(false);
                  }}
                />
              </div>
            </div>
          ) : (
            <></>
          )}
        </>

          
          // <>
          //   <div className=" NavTopAnnouncement NavTopAnnouncement2">
          //     <div className="NavTopAnnouncementinner">
          //       <span className="StaticText">
          //         {" "}
          //         "Driven by Innovation, United by Expertise"
          //       </span>
          //     </div>

          //     <div className="NAvTopCloseSvg">
          //       <FaTimes
          //         onClick={() => {
          //           setmarqueIsOpen(false);
          //         }}
          //       />
          //     </div>
          //   </div>
          // </>
        )}

        <div className="SNavbar">
          <div className="NavConatiner">
            <div className="SNavLogo">
              <Link to="/">
                <OptimizedImage 
                  src={logo} 
                  alt="Company Logo"
                  width={150}
                  height="auto"
                  effect="blur"
                />
              </Link>
            </div>
            <div className="RightNav">
              <div className="NavRoutes">
                {routes.map((route) => {
                  if (route.subRoutes) {
                    switch (route.id) {
                      case 1:
                        return <ServicesMenu route={route} key={route.name} />;
                      case 2:
                        return <ProductMenu route={route} key={route.name} />;
                      case 3:
                        return <ComapnyMenu route={route} key={route.name} />;
                      case 4:
                        return <Insights route={route} key={route.name} />;
                      default:
                        return <p>Unknown status.</p>;
                    }

                    // return ;
                  }
                  return <Link key={route.name} to={route.link}>{route.name}</Link>;
                })}

<div className="cloudMigrateSection2BottomButton">
                <Link to="/contact">Schedule a Call</Link>
                {/* <FaArrowRightLong /> */}
              </div>

                {/* <button onClick={ navigate('/contact')}>Schedule a Call</button> */}
                <div className="NavGAlleryButton" onClick={toggleGalleryDrawer}>
                  <IoMdMenu />
                </div>
              </div>
            </div>
            <div className="NavDrawerButton">
              <div className="NavGAlleryButton" onClick={toggleDrawer}>
                <IoMdMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
