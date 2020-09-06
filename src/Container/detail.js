import React from "react";

import "../styles/home.css";
import "../styles/detail.css";
import HeaderBg from "../Components/Detail/HeaderBg";
import ProjectDetail from "../Components/Detail/ProjectDetail";
import Footer from "../Components/Home/Footer";

// import components

const DetailPage = () => {
  return (
    <div className="App">
      <HeaderBg />
      <ProjectDetail />
      <Footer />
    </div>
  );
};

export default DetailPage;
