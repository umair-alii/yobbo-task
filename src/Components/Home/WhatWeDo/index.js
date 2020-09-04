import React from "react";

import Slider from "react-slick";

//import assets

import playBtn from "../../../assets/images/play-button.png";

const WhatWeDo = () => {
  var settings = {
    dots: true,
    infinite: true,
    width: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <div className="what-we-do">
        <h2>What we do</h2>
      </div>
      <div className="what-we-do-slider">
        <Slider {...settings}>
          <div className="progressive-web">
            <div className="heading-logo">
              <div className="what-we-do-logo">
                <img
                  src={playBtn}
                  alt="play"
                  className="img-fluid"
                  width="25"
                />
              </div>
              <div className="what-we-do-heading">
                <h6>
                  Progressive Web
                  <br /> app
                </h6>
              </div>
            </div>
            <hr />
            <div className="what-we-do-description">
              <p>
                Product design is about translating complex components into
                simple.
              </p>
            </div>
          </div>
          <div className="business-process">
            <div className="heading-logo">
              <div className="what-we-do-logo">
                <img
                  src={playBtn}
                  alt="play"
                  className="img-fluid"
                  width="25"
                />
              </div>
              <div className="what-we-do-heading">
                <h6>
                  Business Process <br />
                  Outsourcing
                </h6>
              </div>
            </div>
            <hr />
            <div className="what-we-do-description">
              <p>
                Product design is about translating complex components into
                simple.
              </p>
            </div>
          </div>
          <div className="business-app">
            <div className="heading-logo">
              <div className="what-we-do-logo">
                <img
                  src={playBtn}
                  alt="play"
                  className="img-fluid"
                  width="25"
                />
              </div>
              <div className="what-we-do-heading">
                <h6>
                  Business
                  <br /> Apps
                </h6>
              </div>
            </div>
            <hr />
            <div className="what-we-do-description">
              <p>
                Product design is about translating complex components into
                simple.
              </p>
            </div>
          </div>
          <div className="it-support">
            <div className="heading-logo">
              <div className="what-we-do-logo">
                <img
                  src={playBtn}
                  alt="play"
                  className="img-fluid"
                  width="25"
                />
              </div>
              <div className="what-we-do-heading">
                <h6>
                  IT
                  <br /> Support
                </h6>
              </div>
            </div>
            <hr />
            <div className="what-we-do-description">
              <p>
                Product design is about translating complex components into
                simple.
              </p>
            </div>
          </div>
          <div className="business-app">
            <div className="heading-logo">
              <div className="what-we-do-logo">
                <img
                  src={playBtn}
                  alt="play"
                  className="img-fluid"
                  width="25"
                />
              </div>
              <div className="what-we-do-heading">
                <h6>
                  Business
                  <br /> Apps
                </h6>
              </div>
            </div>
            <hr />
            <div className="what-we-do-description">
              <p>
                Product design is about translating complex components into
                simple.
              </p>
            </div>
          </div>
          <div className="it-support">
            <div className="heading-logo">
              <div className="what-we-do-logo">
                <img
                  src={playBtn}
                  alt="play"
                  className="img-fluid"
                  width="25"
                />
              </div>
              <div className="what-we-do-heading">
                <h6>
                  IT
                  <br /> Support
                </h6>
              </div>
            </div>
            <hr />
            <div className="what-we-do-description">
              <p>
                Product design is about translating complex components into
                simple.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default WhatWeDo;
