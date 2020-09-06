import React from "react";

//import assets

import challenge1 from "../../../assets/images/challenge-1.png";
import challenge2 from "../../../assets/images/challenge-2.png";
import projectPlan from "../../../assets/images/project-plan.png";
import technologyImg1 from "../../../assets/images/technology-1.png";
import technologyImg2 from "../../../assets/images/technology-2.png";

const ProjectDetail = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="project-detail-headings">
            <h2>
              <span>01</span>Challenge
            </h2>
          </div>
        </div>
        <div className="col-md-8">
          <div className="challenge-detail">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="challenge-img">
            <img src={challenge1} className="img-fluid" alt="challenge1" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="challenge-img">
            <img src={challenge2} className="img-fluid" alt="challenge2" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="project-detail-headings">
            <h2>
              <span>02</span>Project Plan
            </h2>
          </div>
        </div>
        <div className="col-md-8">
          <div className="project-plan-detail">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy.
            </p>
          </div>
        </div>
        <div className="col-md-12">
          <div className="project-plan-img">
            <img src={projectPlan} className="img-fluid" alt="projectPlan" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="project-detail-headings">
            <h2>
              <span>02</span>Technology
              <br /> Stack
            </h2>
          </div>
        </div>
        <div className="col-md-8">
          <div className="technologies-name">
            <h4>Technologies Used</h4>
            <div className="row">
              <div className="col-md-4">
                <ul>
                  <li>C#</li>
                  <li>.NET Code</li>
                  <li>Angular</li>
                  <li>Entity Framework</li>
                  <li>MS SQL Server</li>
                  <li>Microservices</li>
                  <li>Docker</li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul>
                  <li>Kuernetes</li>
                  <li>Azure</li>
                  <li>Sonar Cloud</li>
                  <li>Graph</li>
                  <li>Expression Trees</li>
                  <li>CI/CD</li>
                  <li>Unit Testing Tool</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="technology-img">
            <img src={technologyImg1} className="img-fluid" alt="tech" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="technology-img">
            <img src={technologyImg2} className="img-fluid" alt="tech" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="project-detail-headings">
            <h2>
              <span>04</span>Solution
            </h2>
          </div>
        </div>
        <div className="col-md-8">
          <div className="solution-detail">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
