import React from "react";

// import aasets

import uxDriven from "../../../assets/images/ux-driven-side.png";
import codeReview from "../../../assets/images/code-review.png";
import security from "../../../assets/images/security.png";
import developmentIcon from "../../../assets/images/development-icon.png";

import team from "../../../assets/images/team.png";

const DevelopmentApproach = () => {
  return (
    <div className="container">
      <div className="development-approach">
        <h2>
          Our design and
          <br /> development approach
        </h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="process-description">
            <h2>General Process</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt laber ed dolore manga aliqua. Quis ipsum
              suspendisee ultericise gravida. Risus commodo viverra{" "}
              <b>maecenas accusman lacus vel facilisis.</b>
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="team-photo">
            <img src={team} className="img-fluid" alt="team" />
          </div>
        </div>
      </div>
      <div className="development-approaches-container">
        <div className="ux-driven-img">
          <img src={uxDriven} className="img-fluid" alt="uxDriven" width="65" />
        </div>
        <div className="code-review-img">
          <img src={codeReview} className="img-fluid" alt="code" width="100" />
        </div>
        <div className="security-img">
          <img
            src={security}
            className="img-fluid"
            alt="security"
            width="110"
          />
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="development-approaches">
              <div className="d-flex">
                <div className="heading-icon">
                  <img
                    src={developmentIcon}
                    className="img-fluid"
                    alt="developmentIcon"
                    width="40"
                  />
                </div>
                <div className="heading">
                  <h5>UX Driven Engineering</h5>
                </div>
              </div>
              <div className="development-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt laber ed dolore manga aliqua.
                  Quis ipsum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="development-approaches">
              <div className="d-flex">
                <div className="heading-icon">
                  <img
                    src={developmentIcon}
                    className="img-fluid"
                    alt="developmentIcon"
                    width="40"
                  />
                </div>
                <div className="heading">
                  <h5>Developing Shared Understanding</h5>
                </div>
              </div>
              <div className="development-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt laber ed dolore manga aliqua.
                  Quis ipsum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="development-approaches">
              <div className="d-flex">
                <div className="heading-icon">
                  <img
                    src={developmentIcon}
                    className="img-fluid"
                    alt="developmentIcon"
                    width="40"
                  />
                </div>
                <div className="heading">
                  <h5>Proven Experience and Expertise</h5>
                </div>
              </div>
              <div className="development-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt laber ed dolore manga aliqua.
                  Quis ipsum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="development-approaches">
              <div className="d-flex">
                <div className="heading-icon">
                  <img
                    src={developmentIcon}
                    className="img-fluid"
                    alt="developmentIcon"
                    width="40"
                  />
                </div>
                <div className="heading">
                  <h5>Security & Intellectual Property(IP)</h5>
                </div>
              </div>
              <div className="development-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt laber ed dolore manga aliqua.
                  Quis ipsum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="development-approaches">
              <div className="d-flex">
                <div className="heading-icon">
                  <img
                    src={developmentIcon}
                    className="img-fluid"
                    alt="developmentIcon"
                    width="40"
                  />
                </div>
                <div className="heading">
                  <h5>Code Reviews</h5>
                </div>
              </div>
              <div className="development-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt laber ed dolore manga aliqua.
                  Quis ipsum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="development-approaches">
              <div className="d-flex">
                <div className="heading-icon">
                  <img
                    src={developmentIcon}
                    className="img-fluid"
                    alt="developmentIcon"
                    width="40"
                  />
                </div>
                <div className="heading">
                  <h5>Quality Assurance & Testing</h5>
                </div>
              </div>
              <div className="development-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt laber ed dolore manga aliqua.
                  Quis ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentApproach;
