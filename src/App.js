import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Cgpa from './components/Cgpa';

 const App = () => {
  return (
  <>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/cgpa' component={Cgpa}/>
    </Switch>
  </>
);
}
export default App;

