import React from "react";

import NavBar from "../../Home/NavBar";

// import assets

import projectImg from "../../../assets/images/k2-image.png";
import projectIcon from "../../../assets/images/small-k2.png";

const HeaderBg = () => {
  return (
    <div className="header-banner">
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-6">
            <div className="project-deatil">
              <h2>K2Awars</h2>
              <p>
                We think business software should cover complex needs without
                being complicated.
              </p>
              <h6>Skills</h6>
              <p>
                LARAVEL, JAVA, ANDROID, REACT, MARIA DB, GOOGLE MAPS, OCR
                SOLUTION
              </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-6">
            <div className="project-cover-photo">
              <img
                src={projectImg}
                className="img-fluid"
                alt="projectImg"
                width="350"
              />
            </div>
            <div className="project-icon-img">
              <img
                src={projectIcon}
                className="img-fluid"
                alt="icon"
                width="75"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBg;
