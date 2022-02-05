import React from "react";
import Branches from "./components/Branches";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Courses from "./components/Courses";
import Techclubs from "./components/pages/Techclubs";
import Interiit from "./components/pages/Interiit";
import Home from "./components/pages/Home";
import Nptel from "./components/pages/Nptel";
import Sports from "./components/pages/Sports";
import Hostels from "./components/pages/Hostels";
import Places from "./components/pages/Places";
import Measure from "./components/pages/Measure";
import Culclub from "./components/pages/culclub";
import Placements from "./components/Placements";

// import { Switch } from 'react-router';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/techclubs">
          <Techclubs />
        </Route>
        <Route path="/culclub">
          <Culclub />
        </Route>
        <Route path="/courses">
          <Courses />
        </Route>
        <Route path="/interiit">
          <Interiit />
        </Route>
        <Route path="/branches">
          <Branches />
        </Route>
        <Route path="/nptel">
          <Nptel />
        </Route>
        <Route path="/hostels">
          <Hostels />
        </Route>
        <Route path="/sports">
          <Sports />
        </Route>
        <Route path="/places">
          <Places />
        </Route>
        <Route path="/measure">
          <Measure />
        </Route>
        <Route path="/Placements">
          <Placements />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
