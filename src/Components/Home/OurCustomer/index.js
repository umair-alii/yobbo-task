import React from "react";

import Slider from "react-slick";

//import assets

import customer from "../../../assets/images/customer.png";
import customer2 from "../../../assets/images/customer-2.png";
import customer3 from "../../../assets/images/customer-3.png";
import customer4 from "../../../assets/images/customer-4.png";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const OurCustomer = () => {
  return (
    <div className="container">
      <div className="customer-say-heading">
        <h2>What Our Customer Say</h2>
      </div>
      <div className="sliderBox">
        <Slider {...settings}>
          <div className="customer-feedback-container">
            <div className="customer-icon">
              <img src={customer} className="img-fluid" alt="customer" />
            </div>
            <div className="customer-feedback">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt laber ed dolore manga aliqua. Quis
                ipsum suspendisee ultericise gravida. Risus commodo viverra
                maecenas accusman lacus vel facilisis.
              </p>
              <div className="customer-name">
                <h6>John Doe</h6>
                <span>CEO, Company Name</span>
              </div>
            </div>
          </div>
          <div className="customer-feedback-container">
            <div className="customer-icon">
              <img src={customer4} className="img-fluid" alt="customer" />
            </div>
            <div className="customer-feedback">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt laber ed dolore manga aliqua. Quis
                ipsum suspendisee ultericise gravida. Risus commodo viverra
                maecenas accusman lacus vel facilisis.
              </p>
              <div className="customer-name">
                <h6>John Doe</h6>
                <span>CEO, Company Name</span>
              </div>
            </div>
          </div>
          <div className="customer-feedback-container">
            <div className="customer-icon">
              <img src={customer2} className="img-fluid" alt="customer" />
            </div>
            <div className="customer-feedback">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt laber ed dolore manga aliqua. Quis
                ipsum suspendisee ultericise gravida. Risus commodo viverra
                maecenas accusman lacus vel facilisis.
              </p>
              <div className="customer-name">
                <h6>John Doe</h6>
                <span>CEO, Company Name</span>
              </div>
            </div>
          </div>
          <div className="customer-feedback-container">
            <div className="customer-icon">
              <img src={customer3} className="img-fluid" alt="customer" />
            </div>
            <div className="customer-feedback">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt laber ed dolore manga aliqua. Quis
                ipsum suspendisee ultericise gravida. Risus commodo viverra
                maecenas accusman lacus vel facilisis.
              </p>
              <div className="customer-name">
                <h6>John Doe</h6>
                <span>CEO, Company Name</span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default OurCustomer;
