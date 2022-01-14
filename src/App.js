import React from 'react';
import Branches from './components/Branches';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Courses from './components/Courses';
import Cgpa from './components/Cgpa';
import Techclubs from './components/pages/Techclubs';
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
        <Route path="/Cgpa">
          <Cgpa />
        </Route>
        <Route path="/">
          <Branches />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
