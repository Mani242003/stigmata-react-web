import React from "react";
import "./PluginSample.scss";

import plug1 from "../../assets/images/plug1.png";
import plug2 from "../../assets/images/plug2.png";
import plug3 from "../../assets/images/plug3.png";
import plug4 from "../../assets/images/plug4.png";
import plug5 from "../../assets/images/plug5.png";

import img1 from "../../assets/images/icons/react.png";
import img2 from "../../assets/images/icons/fluter.png";
import img3 from "../../assets/images/icons/wordpress.png";
import { BsFillRecord2Fill } from "react-icons/bs";

const PluginSample = () => {
  return (
    <section className="PluginSample_wrapper" id="simplicity">
      <div className="PluginSample_container">
        <div className="PluginSample_container_left">
          <img src={plug1} alt="" />
        </div>

        <div className="PluginSample_container_right">
          <span className="simplicity_right_text2">
            ATLASSIAN:<span> Confluence space Analytics</span>
          </span>
        


          <span className="simplicity_right_text3">
          As part of our compliance management, we safeguard against unauthorized issue deletion. Our plugin allows users to submit deletion requests to the JIRA administrator. The administrator can then approve or reject these requests. All activities are logged for auditing purposes and can be exported as a CSV file when needed.
          </span>
          <span className="simplicity_rightTechTitel"> Features :</span>
         
          <div className="feaPage-col-1-bottom-container">
            <BsFillRecord2Fill color="#5E6FEC" size={26} />
            <span className="feaPage-col-1-text-4"> Audit logs</span>
          </div>
          <div className="feaPage-col-1-bottom-container">
            <BsFillRecord2Fill color="#5E6FEC" size={26} />
            <span className="feaPage-col-1-text-4"> Workflow for deletion of issues
            </span>
          </div>

      
        </div>
      </div>
      <div className="PluginSample_container customContainer">
        <div className="PluginSample_container_left">
          <img src={plug2} alt="" />
        </div>

        <div className="PluginSample_container_right">
          <span className="simplicity_right_text2">
            ATLASSIAN: <span>PII Protector : Confluence</span>
          </span>
          <span className="simplicity_right_text3">
          This plugin effectively handles PII data in reactive approach and blocks the code push with notification. Our plugin detects below PII types, masks with detailed logs for the project administrators solving the compliance and auditing problems.
          </span>
          <span className="simplicity_rightTechTitel"> Features :</span>
          <div className="feaPage-col-1-bottom-container">
            <BsFillRecord2Fill color="#5E6FEC" size={26} />

            <span className="feaPage-col-1-text-4">
            Passwords

            </span>
          </div>
          <div className="feaPage-col-1-bottom-container">
            <BsFillRecord2Fill color="#5E6FEC" size={26} />
            <span className="feaPage-col-1-text-4">
            NRIC

            </span>
          </div>
          <div className="feaPage-col-1-bottom-container">
            <BsFillRecord2Fill color="#5E6FEC" size={26} />
            <span className="feaPage-col-1-text-4">
            Email

            </span>
          </div>
          <div className="feaPage-col-1-bottom-container">
            <BsFillRecord2Fill color="#5E6FEC" size={26} />
            <span className="feaPage-col-1-text-4">
            Passport Number

            </span>
          </div>
          <div className="feaPage-col-1-bottom-container">
            <BsFillRecord2Fill color="#5E6FEC" size={26} />
            <span className="feaPage-col-1-text-4">
            Credit card number

            </span>
          </div>
          <div className="feaPage-col-1-bottom-container">
            <BsFillRecord2Fill color="#5E6FEC" size={26} />
            <span className="feaPage-col-1-text-4">
            AWS key

            </span>
          </div>

       
        </div>
      </div>
      {/* <div className="PluginSample_container">
        <div className="PluginSample_container_left">
          <img src={plug3} alt="" />
        </div>

        <div className="PluginSample_container_right">
          <span className="simplicity_right_text2">
          ATLASSIAN: <span> PII Protector : BitBucket</span>
           

          </span>
          <span className="simplicity_right_text3">
          This plugin effectively handles PII data in reactive approach and blocks the code push with notification. Our plugin detects below PII types, masks with detailed logs for the project administrators solving the compliance and auditing problems.

          </span>
          <span className="simplicity_rightTechTitel"> Features :</span>
          <div className="feaPage-col-1-bottom-container">
            <BsFillRecord2Fill color="#5E6FEC" size={26} />

            <span className="feaPage-col-1-text-4">
              Highly contributed user rank
            </span>
          </div>
          <div className="feaPage-col-1-bottom-container">
            <BsFillRecord2Fill color="#5E6FEC" size={26} />
            <span className="feaPage-col-1-text-4">
              Most updated pages in a space
            </span>
          </div>
          <div className="feaPage-col-1-bottom-container">
            <BsFillRecord2Fill color="#5E6FEC" size={26} />
            <span className="feaPage-col-1-text-4">
              Most updated pages list with their respective count
            </span>
          </div>
          <div className="feaPage-col-1-bottom-container">
            <BsFillRecord2Fill color="#5E6FEC" size={26} />
            <span className="feaPage-col-1-text-4">
              Number of likes in the space
            </span>
          </div>
          <div className="feaPage-col-1-bottom-container">
            <BsFillRecord2Fill color="#5E6FEC" size={26} />
            <span className="feaPage-col-1-text-4">
              Number of Pages updated in a space
            </span>
          </div>
          <div className="feaPage-col-1-bottom-container">
            <BsFillRecord2Fill color="#5E6FEC" size={26} />
            <span className="feaPage-col-1-text-4">
              Number of Pages created in a space
            </span>
          </div>

      
        </div>
      </div>
      <div className="PluginSample_container customContainer">
        <div className="PluginSample_container_left">
          <img src={plug4} alt="" />
        </div>

        <div className="PluginSample_container_right">
          <span className="simplicity_right_text2">
            ATLASSIAN: <span>Delete Protector : JIRA</span>
            

          </span>
          <span className="simplicity_right_text3">
            Mart Easy is an Andaman island based multiple vendor managed
            ecommerce product. Mart Easy manages 8 different category of
            products with several subcategories.
          </span>
          <span className="simplicity_rightTechTitel"> Features :</span>
          <div className="feaPage-col-1-bottom-container">
            <BsFillRecord2Fill color="#5E6FEC" size={26} />

            <span className="feaPage-col-1-text-4"> Passwords</span>
          </div>
          <div className="feaPage-col-1-bottom-container">
            <BsFillRecord2Fill color="#5E6FEC" size={26} />
            <span className="feaPage-col-1-text-4">NRIC</span>
          </div>
          <div className="feaPage-col-1-bottom-container">
            <BsFillRecord2Fill color="#5E6FEC" size={26} />
            <span className="feaPage-col-1-text-4"> Email</span>
          </div>
          <div className="feaPage-col-1-bottom-container">
            <BsFillRecord2Fill color="#5E6FEC" size={26} />
            <span className="feaPage-col-1-text-4"> Passport Number</span>
          </div>
          <div className="feaPage-col-1-bottom-container">
            <BsFillRecord2Fill color="#5E6FEC" size={26} />
            <span className="feaPage-col-1-text-4"> Credit card number</span>
          </div>
          <div className="feaPage-col-1-bottom-container">
            <BsFillRecord2Fill color="#5E6FEC" size={26} />
            <span className="feaPage-col-1-text-4"> AWS key</span>
          </div>
          <div className="feaPage-col-1-bottom-container">
            <BsFillRecord2Fill color="#5E6FEC" size={26} />
            <span className="feaPage-col-1-text-4"> AWS secret key</span>
          </div>
          <div className="feaPage-col-1-bottom-container">
            <BsFillRecord2Fill color="#5E6FEC" size={26} />
            <span className="feaPage-col-1-text-4"> Custom Tables</span>
          </div>
        
        </div>
      </div>
      <div className="PluginSample_container">
        <div className="PluginSample_container_left">
          <img src={plug5} alt="" />
        </div>

        <div className="PluginSample_container_right">
          <span className="simplicity_right_text2">
            ATLASSIAN:<span> Delete Protector : CONFLUENCE</span>
            

          </span>
          <span className="simplicity_right_text3">
            With this plugin, we are eliminating that gap and providing most
            important insights to the organization to promote the confluence
            usage and support the users who are contributing to confluence
            usages. Below are the features we are currently providing.
          </span>
          <span className="simplicity_rightTechTitel"> Features :</span>
          <div className="feaPage-col-1-bottom-container">
            <BsFillRecord2Fill color="#5E6FEC" size={26} />

            <span className="feaPage-col-1-text-4">
              Highly contributed user rank
            </span>
          </div>
          <div className="feaPage-col-1-bottom-container">
            <BsFillRecord2Fill color="#5E6FEC" size={26} />
            <span className="feaPage-col-1-text-4">
              Most updated pages in a space
            </span>
          </div>
          <div className="feaPage-col-1-bottom-container">
            <BsFillRecord2Fill color="#5E6FEC" size={26} />
            <span className="feaPage-col-1-text-4">
              Most updated pages list with their respective count
            </span>
          </div>
          <div className="feaPage-col-1-bottom-container">
            <BsFillRecord2Fill color="#5E6FEC" size={26} />
            <span className="feaPage-col-1-text-4">
              Number of likes in the space
            </span>
          </div>
          <div className="feaPage-col-1-bottom-container">
            <BsFillRecord2Fill color="#5E6FEC" size={26} />
            <span className="feaPage-col-1-text-4">
              Number of Pages updated in a space
            </span>
          </div>
          <div className="feaPage-col-1-bottom-container">
            <BsFillRecord2Fill color="#5E6FEC" size={26} />
            <span className="feaPage-col-1-text-4">
              Number of Pages created in a space
            </span>
          </div>

        
        </div>
      </div> */}
    </section>
  );
};

export default PluginSample;
