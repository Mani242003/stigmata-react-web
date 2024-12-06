import React from "react";
import "./Career.scss";
import Navigation from "../../component/Navigation/Navigation";
import Footer from "../../component/footer/Footer";
import ContactForm from "../../component/ContactForm/ContactForm";
import HoverCard from "../../component/CustomHoverCard/HoverCard";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Challenges from "../../component/Challenges/Challenges";
import orangeDot from "../../assets/images/icons/orangeBullet.png"
import blueDot from "../../assets/images/icons/blueBullet.png"
const Career = () => {
  return (
    <section className="Career_w">
      <Navigation />

      <div className="Carerr_c">
        <div className="CarerrHeader">
          <div className="contactPageMainHeader">
            <span className="contactPageHeaderText1">
              Join Our Team at Stigmata
            </span>
            <span className="contactPageHeaderText2">
              {/* Let's have a discussion!! */}
            </span>
            <div className="contactPageMainSocialContainer">
              {/* <FiPhoneCall />
            <IoMailOutline />
            <TiMessages /> */}
            </div>
          </div>
        </div>
        <div className="JoinContent_c">
     
        </div>
        <div className="JoinContent_S">
          <div className="JoinContentSection1">
            <div className="JoinContentSection1Left">
            <span className="CareerTitel2">Why Stigmata?</span>
          <span className="CareerDesText">
            At <span>Stigmata</span>, we are passionate about revolutionizing in
            the software development domain with innovative solutions and
            cutting-edge technology. Our team is our greatest asset, and we are
            committed to fostering a dynamic, inclusive, and inspiring work
            environment where every member can thrive and grow.
          </span>
            </div>
            <div className="JoinContentSection1Right"></div>

          </div>
          <div className="JoinContentSection2">
            <div className="cloudMigrateSection2Header">
              <span>
              We believe in
              </span>
            </div>
            <>
              <div className="cloudMigrateSection2innerConatiner">
                <div className="cloudMigrateSection2innerLeft">
                  <div className="cloudMigrateSection1LeftBottomContainer">
                    <img src={orangeDot} alt="" />

                    <span className="feaPage-col-1-text-4">
                      <span> Innovation: </span> <br />
                      Encouraging creative thinking and problem-solving.
                    </span>
                  </div>
                </div>
                <div className="cloudMigrateSection2innerRight">
                  <div className="cloudMigrateSection1LeftBottomContainer">
                    <img src={blueDot} alt="" />

                    <span className="feaPage-col-1-text-4">
                      <span>
                      Collaboration:
                      </span>{" "}
                      <br />
                      Working together to achieve common goals.
                    </span>
                  </div>
                </div>
              </div>
              <div className="cloudMigrateSection2innerConatiner">
                <div className="cloudMigrateSection2innerLeft">
                  <div className="cloudMigrateSection1LeftBottomContainer">
                    <img src={orangeDot} alt="" />

                    <span className="feaPage-col-1-text-4">
                      <span> Growth:</span>
                      <br />
                      Providing opportunities for professional
            development and career advancement.
                    </span>
                  </div>
                </div>
                <div className="cloudMigrateSection2innerRight">
                  <div className="cloudMigrateSection1LeftBottomContainer">
                    <img src={blueDot} alt="" />

                    <span className="feaPage-col-1-text-4">
                      <span>Inclusivity:</span>
                      <br />
                      Embracing diversity and promoting a
                      culture of respect and equality.
                    </span>
                  </div>
                </div>
              </div>
              <div className="cloudMigrateSection2innerConatiner">
                <div className="cloudMigrateSection2innerLeft">
                  <div className="cloudMigrateSection1LeftBottomContainer">
                    <img src={orangeDot} alt="" />

                    <span className="feaPage-col-1-text-4">
                      <span> Excellence:</span>
                      <br />
                      Striving for the highest standards in
                      everything we do.
                    </span>
                  </div>
                </div>
                <div className="cloudMigrateSection2innerRight">
                  <div className="cloudMigrateSection1LeftBottomContainer">
                    <img src={blueDot} alt="" />

                    <span className="feaPage-col-1-text-4">
                      <span>Competitive Salary:</span>
                      <br />
                      We offer a market-competitive
            compensation package.
                    </span>
                  </div>
                </div>
              </div>
              <div className="cloudMigrateSection2innerConatiner">
                <div className="cloudMigrateSection2innerLeft">
                  <div className="cloudMigrateSection1LeftBottomContainer">
                    <img src={orangeDot} alt="" />

                    <span className="feaPage-col-1-text-4">
                      <span> Professional Development:</span>
                      <br />
                      Access to training,
                      workshops, and mentorship programs.
                    </span>
                  </div>
                </div>
                <div className="cloudMigrateSection2innerRight">
                  <div className="cloudMigrateSection1LeftBottomContainer">
                    <img src={blueDot} alt="" />

                    <span className="feaPage-col-1-text-4">
                      <span>Team Activities:</span><br/>
                      Regular team-building events and
            social activities.
                    </span>
                  </div>
                </div>
              </div>
            </>
            <div className="cloudMigrateSection2BottomContainer">
              {/* <span className="cloudMigrateSection2BottomText">
                Stigmata Techno Solution's utilize cloud hyperscalers to create
                collaborative, interactive, and transparent business
                architecture ready to tackle technology challenges.
              </span> */}
              {/* <div className="cloudMigrateSection2BottomButton">
                <Link href="">Discuss With Our Experts</Link>
                <FaChevronRight />
              </div> */}
            </div>
          </div>
          <div className="JoinContentSection3">
            <div className="JoinContentSection1Left">
            <span className="CareerTitel2">How to Apply</span>
          <span className="CareerDesText">
          Ready to take the next step in your career ? Send your resume and a cover letter to <a href="">jerome@stigmatatech.com</a> & <a href="">jerome@stigmata.co.in</a>  with the job title in the subject line. We can’t wait to hear from you!
          </span>
            </div>
            <div className="JoinContentSection1Right"></div>

          </div>
          <div className="JoinContentSection4">
            <div className="JoinContentSection1Left">
            <span className="CareerTitel2">          Internship Opportunities
            </span>
          <span className="CareerDesText">
We also offer internship programs for students and recent graduates. If you are eager to gain hands-on experience and learn from industry experts, apply for our internship positions by emailing <a href="">jerome@stigmatatech.com</a> & <a href="">jerome@stigmatatech.com</a> with your resume and a brief introduction.

          </span>
            </div>
            <div className="JoinContentSection1Right"></div>

          </div>
          <div className="JoinContentSection5">
            <div className="JoinContentSection1Left">
            <span className="CareerTitel2">Stay Connected</span>
          <span className="CareerDesText">
          Follow us on <Link to="https://www.linkedin.com/in/jerome-melkisidak-970b635b">https://www.linkedin.com/in/jerome-melkisidak-970b635b</Link> to stay updated on our latest job openings and company news.
          </span>

          <span className="CareerDesText">
          We look forward to welcoming you to the <span>Stigmata family!</span>
          </span>
            </div>
            <div className="JoinContentSection1Right"></div>

          </div>

        
          <br />
          {/* <span className="CareerTitel2">Our Culture</span>
          <span className="CareerTitel2">:</span>
          <span className="CareerDesText">
            <span></span> 
            <br />
            <br />
            <span></span> 
            <br />
            <br />
            <span> </span>
            <br />
            <br />
            <span></span> 
            <br />
            <br />
            <span>Excellence:</span> 
            <br />
            <br />
            <span>Benefits of Working with Us</span>
            <br />
            <br />
            <span></span> 
            <br />
            <br />
            <span>Health & Wellness:</span> Comprehensive health insurance plans
            and wellness programs.
            <br />
            <br />
            <span>Work-Life Balance:</span> Flexible working hours and remote
            work options.
            <br />
            <br />
            <span></span> 
            <br />
            <br />
            <span>Team Activities:</span> 
          </span> */}
          <br />
          <br />
          <br />
          <br />
          {/* <span className="CareerTitel2">How to Apply</span>
          <span className="CareerDesText">
            Ready to take the next step in your career ? Send your resume and a
            cover letter to <a href="">jerome@stigmatatech.com </a>&{" "}
            <a href="">jerome@stigmata.co.in</a> with the job title in the
            subject line. We can’t wait to hear from you!
          </span>
          Internship Opportunities We also offer internship programs for
          students and recent graduates. If you are eager to gain hands-on
          experience and learn from industry experts, apply for our internship
          positions by emailing jerome@stigmatatech.com & jerome@stigmata.co.in
          with your resume and a brief introduction. Stay Connected Follow us on
          https://www.linkedin.com/in/jerome-melkisidak-970b635b to stay updated
          on our latest job openings and company news.
          ________________________________________ We look forward to welcoming
          you to the Stigmata family!
          <br /> */}
        </div>
      
      </div>
      <ContactForm />
      <Footer />
    </section>
  );
};

export default Career;
