import React from 'react';
import { Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Register from './components/RegisterForm.js'
import Adopt from './components/AdoptForm.js'


const App = () => {
  return(
    <main>
      <Switch>
      <Route path='/users/register' component={ Register } />
      <Route path='/dogs/adopt' component={ Adopt } />
      </Switch>
    </main>
    )
}


export default App;
