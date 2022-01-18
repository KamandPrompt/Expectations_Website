import React from 'react';
import Branches from './components/Branches';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Courses from './components/Courses';
import Techclubs from './components/pages/Techclubs';
import Interiit from './components/pages/Interiit';
import Home from './components/pages/Home';
// import { Switch } from 'react-router';
 const App = () => {
   return (
    <Router>
      <Switch>
        <Route path="/techclubs">
          <Techclubs />
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
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
