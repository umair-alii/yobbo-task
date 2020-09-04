import React from "react";

import Nav from "react-bootstrap/Nav";

// import assets

import google_cloud from "../../../assets/images/Google_cloud.png";
import twilio from "../../../assets/images/twilio.png";
import algolia from "../../../assets/images/Algolia.png";
import talend from "../../../assets/images/Talend.png";
import spluck from "../../../assets/images/Spluck.png";
import aws from "../../../assets/images/AWS.png";

const TechStack = () => {
  return (
    <div className="container">
      <div className="tech-stack-heading">
        <h2>Tech Stacks</h2>
      </div>
      <div className="tech-tabs">
        <Nav className="tabs">
          <Nav.Link href="#home" className="navbar-tab-links">
            Backend
          </Nav.Link>
          <Nav.Link href="#link" className="navbar-tab-links">
            Frontend
          </Nav.Link>
          <Nav.Link href="#link" className="navbar-tab-links">
            Databases
          </Nav.Link>
          <Nav.Link href="#link" className="navbar-tab-links">
            CMS
          </Nav.Link>
          <Nav.Link href="#link" className="navbar-tab-links">
            Cloud
          </Nav.Link>
          <Nav.Link href="#link" className="navbar-tab-links">
            Testing
          </Nav.Link>
          <Nav.Link href="#link" className="navbar-tab-links">
            DevOps
          </Nav.Link>
        </Nav>
      </div>
      <div className="tech-stack-images">
        <div className="row">
          <div className="col-md-2">
            <div className="tech-stack-icon">
              <img
                src={google_cloud}
                className="img-fluid"
                alt="google_cloud"
                width="35"
              />
            </div>
          </div>
          <div className="col-md-2">
            <div className="tech-stack-icon">
              <img src={twilio} className="img-fluid" alt="google_cloud" />
            </div>
          </div>
          <div className="col-md-2">
            <div className="tech-stack-icon">
              <img src={algolia} className="img-fluid" alt="google_cloud" />
            </div>
          </div>
          <div className="col-md-2">
            <div className="tech-stack-icon">
              <img src={talend} className="img-fluid" alt="google_cloud" />
            </div>
          </div>
          <div className="col-md-2">
            <div className="tech-stack-icon">
              <img src={spluck} className="img-fluid" alt="google_cloud" />
            </div>
          </div>
          <div className="col-md-2">
            <div className="tech-stack-icon">
              <img
                src={aws}
                className="img-fluid"
                alt="google_cloud"
                width="35"
              />
            </div>
          </div>
          <div className="col-md-2">
            <div className="tech-stack-icon">
              <img
                src={google_cloud}
                className="img-fluid"
                alt="google_cloud"
                width="35"
              />
            </div>
          </div>
          <div className="col-md-2">
            <div className="tech-stack-icon">
              <img src={twilio} className="img-fluid" alt="google_cloud" />
            </div>
          </div>
          <div className="col-md-2">
            <div className="tech-stack-icon">
              <img src={algolia} className="img-fluid" alt="google_cloud" />
            </div>
          </div>
          <div className="col-md-2">
            <div className="tech-stack-icon">
              <img src={talend} className="img-fluid" alt="google_cloud" />
            </div>
          </div>
          <div className="col-md-2">
            <div className="tech-stack-icon">
              <img src={spluck} className="img-fluid" alt="google_cloud" />
            </div>
          </div>
          <div className="col-md-2">
            <div className="tech-stack-icon">
              <img
                src={aws}
                className="img-fluid"
                alt="google_cloud"
                width="35"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
