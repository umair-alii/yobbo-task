import React from "react";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const TechStack = () => {
  return (
    <div className="container">
      <div className="tech-stack-heading">
        <h2>Tech Stacks</h2>
      </div>
      <div className="tech-tabs">
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab title="Backend"></Tab>
          <Tab title="Frontend"></Tab>
          <Tab title="Databases"></Tab>
          <Tab title="CSM"></Tab>
          <Tab title="Cloud"></Tab>
          <Tab title="Testing"></Tab>
          <Tab title="Devops"></Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default TechStack;
