import React from "react";
import "./CompanySkills.scss";
import csImg from "../../assets/images/skillup.jpg";
import ProgressBar from "@ramonak/react-progress-bar";

const CompanySkills = () => {
  return (
    <section className="companySkillsWrapper">
      <div className="companySkillsContainer">
        <div className="companySkillsLeftContainer">
          <span className="CS_smallText">THE GREAT COMPANY SKILL</span>
          <span className="CS_bigText">
            CONNECTING PEOPLE AND BUILD TECHNOLOGY
          </span>
          <span className="CS_desText">
            Energistically evisculate an expanded array of meta-services after
            cross-media strategic theme areas. Interactively simplify
            interactive customer service before fully tested relationship
            parallel task high standards...
          </span>
          <div className="CS_progressLabel">
            <span>BUSINESS SECURITY</span><span>65%</span>
          </div>
          <ProgressBar
            completed={65}
            customLabel=" "
            margin="10px"
            baseBgColor="white"
            labelSize="10px"
            bgColor="#1A74E9"
            baseBgColor="silver"
            labelColor="black"
            labelAlignment="center"
            height="10px"
          />
            <div className="CS_progressLabel">
            <span>BUSINESS INOVATION</span><span>80%</span>
          </div>
          <ProgressBar
            completed={80}
            customLabel=" "
            margin="10px"
            baseBgColor="white"
            labelSize="10px"
            bgColor="#1A74E9"
            baseBgColor="silver"
            labelColor="black"
            height="10px"

            labelAlignment="center"
          />  <div className="CS_progressLabel">
          <span>CAREER DEVELOPMENT</span><span>95%</span>
        </div>
        <ProgressBar
          completed={95}
          customLabel=" "
          margin="10px"
          baseBgColor="white"
          labelSize="10px"
          bgColor="#1A74E9"
          baseBgColor="silver"
          labelColor="black"
          height="10px"

          labelAlignment="center"
        />

        </div>
        <div className="companySkillsRightContainer">
          <img src={csImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default CompanySkills;
