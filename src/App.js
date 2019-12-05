import React from 'react';
import { Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import RegisterForm from './components/RegisterForm.js'
import AdoptForm from './components/AdoptForm.js'
import NavBar from './components/NavBar.js'
import Carousel from './components/Carousel.js'
import RehomeIndex from './components/RehomeIndex.js'
import RehomeForm from './components/RehomeForm.js'
import Login from './components/Login.js'

const App = () => {
  return(
    <React.Fragment>
          <NavBar />
          <main>
            <Switch>
            <Route path='/home' component={ Carousel } />
            <Route path='/dogs/rehome' component={ RehomeIndex } />
            <Route path='/users/register' component={ RegisterForm } />
            <Route path='/dogs/adopt' component={ AdoptForm } />
            <Route path='/dogs/new' component={ RehomeForm } />
            <Route path='/users/login' component={ Login } />
            </Switch>
          </main>
      </React.Fragment>
    )
}


export default App;
