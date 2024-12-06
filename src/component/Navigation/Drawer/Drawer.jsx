import React, { useState } from "react";
import "./Drawer.scss";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
const Drawer = ({ isOpen, toggleDrawer }) => {
  const [selected, setSelected] = useState(null);
  const accordianToggel = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  // const handleChange = (panel) => (event, isExpanded) => {
  //   setExpanded(isExpanded ? panel : false);
  // };
  // console.log(isOpen);
  return (
    <>
      {isOpen && <div className="backDrop" onClick={toggleDrawer}></div>}

      <div
        className="sDrawer"
        style={
          isOpen
            ? { transform: "translateX(0%)" }
            : { transform: "translateX(150%)" }
        }
      >
        <div className="NavDrawerRoutes">
          <div className="DrawerBottomSpace" onClick={toggleDrawer}></div>

          <div className="accordian_D">
            <div className="item">
              <div className="titel" onClick={() => accordianToggel(1)}>
                <span>What We Do</span>
                {selected === 1 ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              <div
                className={selected == 1 ? "contentshow content" : "content"}
              >
                <div className="itemInneItem">
                  <Link to="/serverless-computing">Serverless Computing</Link>
                  <div></div>
                  <Link to="/dev-Ops">Devops</Link>
                  <div></div>
                  <Link to="/mobile-app-development">
                    Mobile App Development
                  </Link>
                  <div></div>
                  <Link to="/plugin-development">Plugin Development</Link>
                  <div></div>
                  <Link to="/software-development">
                    Software Application Development
                  </Link>
                  <div></div>
                  <Link to="/cloud-migration">Cloud Migration</Link>
                  <div></div>
                  <Link to="/artificial-intelligence">
                    Artificial intelligence
                  </Link>
                  <div className="customDiv"></div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="titel" onClick={() => accordianToggel(3)}>
                <span>Our Products</span>
                {selected === 3 ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              <div
                className={selected == 3 ? "contentshow content" : "content"}
              >
                <div className="itemInneItem">
                  <Link to="https://clousec.io/">ClouSec</Link>
                  <div></div>
                  <Link to="https://clousec.io/">Happiediner</Link>
                  <div></div>
                  <Link to="https://clousec.io/">PII Protector</Link>

                  <div className="customDiv"></div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="titel" onClick={() => accordianToggel(2)}>
                <span>Our Expertise</span>
                {selected === 2 ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              <div
                className={
                  selected == 2
                    ? "contentshow content CustomContent"
                    : "content CustomContent"
                }
              >
                <div className="itemInneItem CustomItemInneItem ">
                  <Link> # Heavy Construction Companies</Link>
                  <div></div>
                  <Link> # Power Transmission & Distribution</Link>
                  <div></div>
                  <Link> # Financial institutions</Link>
                  <div></div>
                  <Link> # AWS enterprises (CSPM tool – ClouSec)</Link>
                  <div></div>
                  <Link> # Digital Solutions for all enterprises</Link>

                  <div className="customDiv"></div>
                </div>
              </div>
            </div>
           
            <div className="item">
              <div className="titel" onClick={() => accordianToggel(4)}>
                <span>Company</span>
                {selected === 4 ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              <div
                className={selected == 4 ? "contentshow content" : "content"}
              >
                <div className="itemInneItem">
                  <Link to="/about-us">About US</Link>
                  <div></div>
                  <Link to="/contact">Contact US</Link>
                  <div></div>
                  <Link to="/careers">
                  Careers
                  </Link>
                
                  <div className="customDiv"></div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="titel" onClick={() => accordianToggel(5)}>
                <span>Insights</span>
                {selected === 5 ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              <div
                className={selected == 5 ? "contentshow content" : "content"}
              >
                <div className="itemInneItem">
                  <Link>Blog</Link>
                  <div></div>
                  <Link to="https://youtube.com/@stigmatatechnosolutionsclousec?si=-jlrQuNQ6ACViNae">Youtube</Link>
                  <div></div>
                  <a href="#news" onClick={toggleDrawer}>News</a>
                  <div className="customDiv"></div>
                </div>
              </div>
            </div>
            <div className="Customitem">
              <div className="titel" onClick={() => accordianToggel(6)}>
                <Link to="/contact"> Contact Us</Link>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="NavDrawerRoutes">
          <div className="DrawerBottomSpace" onClick={toggleDrawer}></div>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            style={{ background: "none", color: "white", paddingLeft: "0" }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowDropDownIcon style={{ color: "white", opacity: "0.8" }} />
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <div className="drawerMainLinkConatainer">
                <span>What we do</span>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="drawerSubLinkConatainer">
                <Link to="/serverless-computing">Serverless Computing</Link>
                <div></div>
                <Link to="/dev-Ops">Devops</Link>
                <div></div>
                <Link to="/mobile-app-development">Mobile App Development</Link>
                <div></div>
                <Link to="/plugin-development">Plugin Development</Link>
                <div></div>
                <Link to="/software-development">
                  Software Application Development
                </Link>
                <div></div>
                <Link to="/cloud-migration">Cloud Migration</Link>
                <div></div>
                <Link to="/artificial-intelligence">Artificial intelligence</Link>
                <div></div>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{ background: "none", color: "white", paddingLeft: "0" }}
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={
                <ArrowDropDownIcon style={{ color: "white", opacity: "0.8" }} />
              }
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <div className="drawerMainLinkConatainer">
                <span>Our Products</span>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="drawerSubLinkConatainer">
                <Link to="https://clousec.io/">ClouSec</Link>
                <div></div>
                <Link to="https://clousec.io/">Happiedinner</Link>
                <div></div>
                <Link to="https://clousec.io/">PII Protector</Link>
                <div></div>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{ background: "none", color: "white", paddingLeft: "0" }}
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={
                <ArrowDropDownIcon style={{ color: "white", opacity: "0.8" }} />
              }
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <div className="drawerMainLinkConatainer">
                <span>Company</span>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="drawerSubLinkConatainer">
                <Link to="/about-us">About US</Link>
                <div></div>
                <Link to="/contact">Contact US</Link>
                <div></div>
                <Link to="/careers">Careers</Link>
                <div></div>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{ background: "none", color: "white", paddingLeft: "0" }}
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
          >
            <AccordionSummary
              expandIcon={
                <ArrowDropDownIcon style={{ color: "white", opacity: "0.8" }} />
              }
              aria-controls="panel7bh-content"
              id="panel7bh-header"
            >
              <div className="drawerMainLinkConatainer">
                <span>Industry</span>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="drawerSubLinkConatainer DrawerCustomSubLink">
                <Link>Heavy Construction Companies</Link>
                <div></div>
                <Link>Power Transmission & Distribution,</Link>
                <div></div>
                <Link>AWS enterprises (CSPM tool – ClouSec)</Link>
                <div></div>
                <Link>Digital Solutions for all enterprises</Link>
                <div></div>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{ background: "none", color: "white", paddingLeft: "0" }}
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={
                <ArrowDropDownIcon style={{ color: "white", opacity: "0.8" }} />
              }
              aria-controls="panel5bh-content"
              id="panel5bh-header"
            >
              <div className="drawerMainLinkConatainer">
                <span></span>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="drawerSubLinkConatainer ">
             
              </div>
            </AccordionDetails>
          </Accordion>

          <div
            className="drawerMainLinkConatainer"
            style={{ marginLeft: "1rem", marginTop: "0.7rem" }}
          >
            <span>
              <Link to="/contact"> Contact Us</Link>
            </span>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Drawer;
