import React from 'react';
import Branches from './components/Branches';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Courses from './components/Courses';
import Techclubs from "./components/pages/Techclubs";
// import { Switch } from 'react-router';
 const App = () => {
   return (
    <Router>
      <Switch>
        <Route path="/courses">
          <Courses />
        </Route>
        <Route path="/">
          <Branches />
        </Route>
        <Route path="/techclubs">
          <Techclubs />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
