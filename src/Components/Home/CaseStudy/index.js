import React from "react";

// import assets

import k2award from "../../../assets/images/k2-image.png";
import fosterCare from "../../../assets/images/fc2s.png";
import mra from "../../../assets/images/mra.png";

const CaseStudy = () => {
  return (
    <div className="container">
      <div className="case-study">
        <h1>
          Our recent <span>Case studies</span>
        </h1>
      </div>

      <div className="k2awards">
        <div className="row">
          <div className="col-md-6">
            <div className="detail">
              <h3>K2awards</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt laber ed dolore manga aliqua. Quis
                ipsum suspendisee ultericise gravida. Risus commodo viverra
                maecenas accusman lacus vel facilisis.
              </p>
              <hr />
              <span>Read More</span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="portfolio-img">
              <img src={k2award} className="img-fluid" alt="k2" width="400" />
            </div>
          </div>
        </div>
      </div>
      <div className="fosterCare">
        <div className="row">
          <div className="col-md-6">
            <div className="detail">
              <h3>Foster Care to Success</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt laber ed dolore manga aliqua. Quis
                ipsum suspendisee ultericise gravida. Risus commodo viverra
                maecenas accusman lacus vel facilisis.
              </p>
              <hr />
              <span>Read More</span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="portfolio-img">
              <img src={fosterCare} className="img-fluid" alt="care" />
            </div>
          </div>
        </div>
      </div>
      <div className="mra">
        <div className="row">
          <div className="col-md-6">
            <div className="detail">
              <h3>MRA</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt laber ed dolore manga aliqua. Quis
                ipsum suspendisee ultericise gravida. Risus commodo viverra
                maecenas accusman lacus vel facilisis.
              </p>
              <hr />
              <span>Read More</span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="portfolio-img">
              <img src={mra} className="img-fluid" alt="care" />
            </div>
          </div>
        </div>
      </div>
      <div className="read-more">
        <button>Read more Case Studies</button>
      </div>
    </div>
  );
};

export default CaseStudy;
