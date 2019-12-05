import React from 'react';
import { Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterForm from './components/RegisterForm.js'
import AdoptForm from './components/AdoptForm.js'
import NavBar from './components/NavBar.js'


const App = () => {
  return(
      <main>
        <NavBar />
        <Switch>
        <Route path='/users/register' component={ RegisterForm } />
        <Route path='/dogs/adopt' component={ AdoptForm } />
        </Switch>
      </main>
    )
}


export default App;
