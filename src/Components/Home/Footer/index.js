import React, { Fragment } from "react";

//import assets

import faceook from "../../../assets/images/facebook.png";
import twitter from "../../../assets/images/twitter.png";
import insta from "../../../assets/images/instagram.png";
import behance from "../../../assets/images/behance.png";
import linkedin from "../../../assets/images/linkedin.png";
import person from "../../../assets/images/person-stock.png";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer-container">
        <div className="container">
          <div className="footer-person-parent">
            <div className="person-img">
              <img
                src={person}
                className="img-fluid"
                alt="person"
                width="325"
              />
            </div>
          </div>
          <div className="talk-to-us">
            <span>Talk to us</span>
            <h2>Discover a new level of awsomeness together</h2>
            <div className="form-container">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <input
                        type="text"
                        className="form-contrl"
                        placeholder="Name*"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <input
                        type="email"
                        className="form-contrl"
                        placeholder="Email*"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input-wrapper">
                      <input
                        type="text"
                        className="form-contrl"
                        placeholder="Message*"
                      />
                    </div>
                  </div>
                </div>
                <div className="submitBtn">
                  <button>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copy-rights">
          <span>
            <b>Yobo,</b> All rights reserved 2020. - <b>Careers</b>
          </span>
        </div>
        <div className="social-media-icon">
          <span>Follow us on</span>
          <img src={faceook} className="img-fluid" alt="fb" width="20" />
          <img src={twitter} className="img-fluid" alt="twiter" width="20" />
          <img src={linkedin} className="img-fluid" alt="in" width="20" />
          <img src={behance} className="img-fluid" alt="behance" width="20" />
          <img src={insta} className="img-fluid" alt="insta" width="20" />
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
