import React from "react";
import "./Challenges.scss";
// import content_1Img from "../../Images/challenges/26129142.jpg";
// import content_2Img from "../../Images/challenges/content-2.png";
// import content_3Img from "../../Images/challenges/content-3.png";
// import content_4Img from "../../Images/challenges/content-4.png";

const Challenges = ({id}) => {
  return (
    <section className="challenges_wrapper">
      <div className= {id==="custom" ?("challenges_container customC"):("challenges_container")}>
        <div className="challenges_header_title_container">
          <span className="challenges_header_title">
          {
                id === "custom"  ? ("We believe in"):("Our Principles")
          }</span>
        </div>

        <div className="challenges_main_content">
          <div className="challenges_main_content_left">
            <div className="challenges_content-1 challenges_content ">
              <div className="challenges_text_container">
                <span className="challenges_content_title">
               {
                id === "custom"  ?("1. Innovation:"):("1. Excellence in Software Development:")
               }
                 
                </span>
                <span className="challenges_content_des">
                {
                id === "custom"  ?(" Encouraging creative thinking and problem-solving."):("We are committed to crafting the best software with a seamless and user-friendly journey for our clients. Our focus on quality ensures that our clients receive solutions that are reliable, efficient, and tailored to their needs.")
               }
                
                </span>
              </div>
            </div>
            <div className="challenges_content-2 challenges_content ">
              <div className="challenges_text_container">
                <span className="challenges_content_title">
                {
                id === "custom"  ?(" 2. Collaboration:"):("   2. Dedicated Customer Support: ")
               }
                </span>
                <span className="challenges_content_des">
                {
                id === "custom"  ?(" Working together to achieve common goals."):("Our straightforward and effective customer approach is backed by a team that is equally responsible for supporting our clients at all times. We prioritize clear communication and prompt resolution of any issues.")
               }
                </span>
              </div>
            </div>
            <div className="challenges_content-3 challenges_content ">
              <div className="challenges_text_container">
                <span className="challenges_content_title">
                3. Talented and Motivated Team: 
                </span>
                <span className="challenges_content_des">
                We recognize that a successful company is built on the strength of its people. We are fortunate to have a skilled team of professionals who bring their expertise and passion to provide superior service to our clients.
                </span>
              </div>
            </div>
          </div>
          <div className="challenges_main_content_right">
          
            <div className="challenges_content-4 challenges_content ">
              <div className="challenges_text_container">
                <span className="challenges_content_title">
                4. Empowerment and Collaboration: 
                </span>
                <span className="challenges_content_des">
                We believe in the power of people and technology as the driving force behind our success. Empowering our team leads to outstanding performance and, ultimately, higher client satisfaction.
                </span>
              </div>
            </div>
            <div className="challenges_content-5 challenges_content ">
              <div className="challenges_text_container">
                <span className="challenges_content_title">
                  5. Nurturing a Creative Workspace: 
                </span>
                <span className="challenges_content_des">
                We foster a pleasant, creative, and collaborative work environment. By encouraging team effort, education, growth opportunities, and rewarding good performance, we cultivate a culture of innovation and excellence.
                </span>
              </div>
            </div>
            <div className="challenges_content-6 challenges_content ">
              <div className="challenges_text_container">
                <span className="challenges_content_title">
               6. Commitment to Total Quality: 
                </span>
                <span className="challenges_content_des">
                Pursuing total quality and delivering on our promises is central to who we are at Stigmata Techno Solutions. We take pride in our work and strive to exceed our clients' expectations with every project.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
