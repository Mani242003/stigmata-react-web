import React, { useState } from "react";
import "./Count.scss";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import lottie from "../../assets/Animation - 1716198686129.json"
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
const Count = () => {
  const [counterOn, setcounterOn] = useState(false);


  const CustomCountConatiner=({num,text1,text2,id })=>{
  
    return(
      <div className="customCountConatiner">
        <div className="customCountLeftConatiner ">
  
        <span className="countNum">
                  {counterOn && (
                    <CountUp start={0} end={num} duration={6} delay={0} />
                  )}
                  
                 {id === "true" ? "K" : ""} +
                </span>
        </div>
        <div className="customCountRightConatiner">
          <span>{text1}</span>
          <span>{text2}</span>
  
        </div>
        <div className="customCountRightResponsiveConatiner">
          <span>{text1}{text2}</span>
  
        </div>
  
  
      </div>
    )
  }

  return (
    <ScrollTrigger
      onEnter={() => setcounterOn(true)}
      onExit={() => setcounterOn(false)}
    >
      <section className="count_wrapper">
        <div className="count_container">
          <div className="count_main_container">
            <div className="countLeftContainer">
              <div className="countLeftHeader">
                <span>Loved by Customers. <br/>Made for the World.</span>
               

              </div>
              <div className="countLeftNumContainer">
                <div className="countLeftNumInnerCol_1">
                  <CustomCountConatiner num={1} id= 'true' text1="Users" text2="Globally " />
                  <CustomCountConatiner num={10} text1="Countries " text2="Served" />

                  <CustomCountConatiner num={10} text1="Years in " text2="Business" />



                </div>
                <div className="countLeftNumInnerCol_2">
                <CustomCountConatiner num={20} text1="Employees " text2="Worldwide" />

                <CustomCountConatiner num={4} text1="Products"  />
                <div className="countButtonConatiner">
                <Link to="/about-us" >MORE ABOUT STIGMATA</Link>
                <FaChevronRight />
                </div>


                </div>


              </div>
            </div>
            <div className="countRightContainer">
            <Lottie animationData={lottie} loop={true} style={{width:'550px'}}/>
            </div>


           
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default Count;



