import React from "react";

import "../styles/home.css";

// import components

import NavBar from "../Components/Home/NavBar";
import Banner from "../Components/Home/Banner";
import WhatWeDo from "../Components/Home/WhatWeDo";
import TeamWork from "../Components/Home/TeamWork";
import CaseStudy from "../Components/Home/CaseStudy";
import DevelopmentApproach from "../Components/Home/DevelopmentApproach";
import TechStack from "../Components/Home/TechStack";
import OurCustomer from "../Components/Home/OurCustomer";
import Footer from "../Components/Home/Footer";

const HomePage = () => {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <WhatWeDo />
      <TeamWork />
      <CaseStudy />
      <DevelopmentApproach />
      <TechStack />
      <OurCustomer />
      <Footer />
    </div>
  );
};

export default HomePage;
