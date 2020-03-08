import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div id="application">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />

          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
