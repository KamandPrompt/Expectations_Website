import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Courses from './components/Courses';
import Branches from './components/Branches';
import Placements from './components/Placements';

 const App = () => {
  return (
  <>
    <Switch>
      <Route exact path='/' component={Branches}/>
      <Route exact path='/Courses' component={Courses}/>
      <Route exact path='/Placements' component={Placements}/>
    </Switch>
  </>
);
}
export default App;