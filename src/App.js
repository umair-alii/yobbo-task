import React from "react";

// import components
import HomePage from "./Container/home";
import DetailPage from "./Container/detail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/detail" component={DetailPage} />
      </Switch>
    </Router>
  );
};

export default App;
