import React from "react";

// import assets

import partner from "../../../assets/images/software-development.png";

const TeamWork = () => {
  return (
    <div className="container">
      <div className="team-work-heading">
        <h2>Team Work</h2>
      </div>
      <div className="succes-rate">
        <div className="projects">
          <h1>22+</h1>
          <span>Projects</span>
        </div>
        <div className="awards">
          <h1>27+</h1>
          <span>Awards</span>
        </div>
        <div className="professional-expertise">
          <h1>108+</h1>
          <span>Professional Expertise</span>
        </div>
        <div className="experience-years">
          <h1>12+</h1>
          <span>Years Experience</span>
        </div>
      </div>
      <div className="software-development-design-container">
        <div className="row">
          <div className="col-md-6">
            <div className="development-design-container">
              <p className="custome-software">
                Customer software development & design
              </p>
              <h1>Our Partners</h1>
              <p className="partner-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt laber ed dolore manga aliqua. Quis
                ipsum suspendisee ultericise gravida. Risus commodo viverra
                maecenas accusman lacus vel facilisis.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="software-design-development-photo">
              <img src={partner} className="img-fluid" alt="partner" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamWork;
