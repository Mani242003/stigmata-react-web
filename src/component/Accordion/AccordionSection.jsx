import React, { useState } from "react";
import "./AccordionSection.scss";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// import client2 from "../../Images/features/client2main.png";
// import faqsmall from "../../assets/images/faqSmall.jpg";
import faqBig from "../../assets/images/Vectorqa.png";

import { TbLicense } from "react-icons/tb";
import { MdOutlineContactSupport } from "react-icons/md";
import { BsHeadset } from "react-icons/bs";
import { BiImages } from "react-icons/bi";
import CommonAccordian from "../commonAccordian/CommonAccordian";

const AccordionSection = ({ array }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  console.log("aaa", array);
  return (
    <section className="accordionSectionWrapper" id="Q&A">
      <div className="accordion_container">
        <div className="accordion_left">
          <div
            className="accordion_left_img"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <img src={faqBig} alt="" />
          </div>
        </div>
        <div className="accordion_right">
          <div className="accordionRightHeader">
            <div className="accordionRightTextHeader">
              <span className="accordion_left_text1">TALK ABOUT SOMETHING</span>
              <span className="accordion_left_text2">HOW CAN WE HELP YOU?</span>
            </div>

            <div>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                style={{ marginBottom: "1rem" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "100%", flexShrink: 0 }}>
                    {array.question1}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{array.answer1}</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
                style={{ marginBottom: "1rem" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography sx={{ width: "100%", flexShrink: 0 }}>
                    {array.question2}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{array.answer2}</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
                style={{ marginBottom: "1rem" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography sx={{ width: "100%", flexShrink: 0 }}>
                    {array.question3}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{array.answer3}</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography sx={{ width: "100%", flexShrink: 0 }}>
                    {array.question4}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{array.answer4}</Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccordionSection;
