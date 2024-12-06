import React from "react";
import "./Branches.scss";
import img1 from "../../assets/images/brains/brain1.jpeg";
import img2 from "../../assets/images/branches2.jpeg";
import img3 from "../../assets/images/branches3.jpeg";

const Branches = () => {
  return (
    <section className="branches-wrapper">
      <div className="branchesContainer">
        <div className="TB_headerConatiner">
          <span className="TB_headerSmallTitel">GREAT TEAM MEMBERS</span>
          <span className="TB_headerBigTitel">
            The People Behind Our Success
          </span>
        </div>
        <div className="profileConainer">
          <B_CustomCard
            name="Jerome Melkisidak, B.E, M.B.A "
            ceoText="CEO"
            url={img1}
            position="Board of Study Member : CSE, MCA "
            clgName="(SRM Valliammai Engineering College)"
            boldText=""
            addText="Ex - TNQ Books & Journals"
          />
          <B_CustomCard
            name="Mr. Youssef Azad"
            url={img2}
            position="Business Development & Client Relationship  "
            boldText="Canada"
          />
          <B_CustomCard
            name="Mr. Lawrence"
            url={img3}
            position="Business Development Head & Client Relationship  "
            boldText="Zimbabwe"
          />
        </div>
      </div>
    </section>
  );
};

export default Branches;

const B_CustomCard = ({ name, url, position, boldText,addText ,ceoText,clgName}) => {
  return (
    <div className="B_CustomCardContainer">
      <div className="gradiant"></div>
      <div className="profileDown">
        <img src={url} alt="" />
        <div className="profileIntro">
          <span className="profileName">{name}</span>
          <span className="profileName">{ceoText}</span>
       

          <span className="profileDes" >{position}<br/>
          {
            clgName ? (<span className="profileDes" style={{color:'black'}}>{clgName}</span>) :(<></>)
          }
      
          <span>{boldText}</span>

          </span>
          <span  className="profileAddText">{addText}</span>
        </div>
      </div>
    </div>
  );
};
